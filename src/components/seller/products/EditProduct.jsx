import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEdit, FaCloudUploadAlt, FaBoxes, FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { getCategories } from "../../../redux/actions/productActions/categoriesActions";
import { showToast } from "../../../utils/toastUtils";
import { updateProduct } from "../../../redux/actions/seller/sellerProductsActions";
import { getProduct } from "../../../redux/actions/productActions/singleProductActions";
import { clearProductMessage } from "../../../redux/slices/seller/sellerProductsSlice";
import ButtonLoader from "../../common/ButtonLoader";

// Validation schema
const schema = yup.object().shape({
    title: yup.string().required("Title is required"),
    description: yup.string().required("Description is required").min(10),
    price: yup.number().typeError("Price must be a number").positive().required(),
    discount: yup
        .number()
        .typeError("Discount must be a number")
        .min(0)
        .nullable()
        .transform((v, o) => (String(o).trim() === "" ? null : v)),
    stock: yup.number().typeError("Stock must be a number").integer().min(0).required(),
    category: yup.string().required("Category is required"),
    image: yup.mixed(),
});

const EditProduct = () => {
    const dispatch = useDispatch();
    const { productId } = useParams();

    const { categories } = useSelector((state) => state.categories);
    const singleProductState = useSelector((state) => state.product);
    const { product } = singleProductState || {};
    const { loading, error, updateMessage } = useSelector((state) => state.sellerProducts);

    const [preview, setPreview] = useState(null);
    const [currentImage, setCurrentImage] = useState(null);

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    useEffect(() => {
        dispatch(getCategories);
        dispatch(getProduct(productId));
    }, [dispatch, productId]);

    useEffect(() => {
        if (product && categories.length > 0) {
            reset(); // Clear previous values

            // Find matching category by ID or name
            const matchedCategory = categories.find(
                (cat) => cat._id === product.category || cat.name === product.category || product.category?._id === cat._id
            );

            // Set all form values
            setValue("title", product.title || "");
            setValue("description", product.description || "");
            setValue("price", product.price || "");
            setValue("discount", product.discount || 0);
            setValue("stock", product.stock || "");
            setValue("category", matchedCategory?._id || "");
            setCurrentImage(product.image || null);
        }
    }, [product, categories, setValue, reset]);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setValue("image", file);
            setPreview(URL.createObjectURL(file));
        }
    };

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("title", data.title);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("discount", data.discount ?? 0);
        formData.append("stock", data.stock);
        formData.append("category", data.category);

        if (data.image instanceof File) {
            formData.append("image", data.image);
        }

        dispatch(updateProduct(productId, formData))
            .then(() => {
                showToast("Product updated successfully!", "success");
                dispatch(clearProductMessage());
            })
            .catch(() => {
                showToast("Failed to update product", "error");
            });
    };

    if (!product) return <p className="text-center mt-10">Loading product...</p>;

    return (
        <div className="min-h-screen flex flex-col md:flex-row items-stretch bg-white dark:bg-gray-900 px-4 py-10 gap-8">
            {/* Info Panel */}
            <div className="w-full md:w-1/3 bg-gradient-to-b from-indigo-600 to-purple-500 text-white rounded-2xl p-6 shadow-xl">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
                    <FaBoxes /> Edit Product
                </h2>
                <p className="text-sm opacity-90">
                    Update your product details here. You can change everything, including uploading a new image.
                </p>
                <ul className="mt-6 space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-300" /> Edit price and stock
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-300" /> Update description
                    </li>
                    <li className="flex items-center gap-2">
                        <FaCheckCircle className="text-green-300" /> Optional discount
                    </li>
                </ul>
                <p className="text-xs text-purple-100 mt-6 flex items-center gap-1">
                    <FaInfoCircle /> Keep image empty if not changing.
                </p>
            </div>

            {/* Edit Form */}
            <div className="w-full md:w-2/3 max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6 flex items-center justify-center gap-2">
                    <FaEdit /> Update Product
                </h2>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Title */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Title</label>
                        <input
                            type="text"
                            {...register("title")}
                            className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border text-gray-800 dark:text-white"
                        />
                        {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
                    </div>

                    {/* Description */}
                    <div>
                        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                        <textarea
                            rows={3}
                            {...register("description")}
                            className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border text-gray-800 dark:text-white"
                        />
                        {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
                    </div>

                    {/* Price, Discount, Stock */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="text-sm font-medium">Price</label>
                            <input
                                type="number"
                                {...register("price")}
                                className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border"
                            />
                            {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
                        </div>
                        <div>
                            <label className="text-sm font-medium">Discount (optional)</label>
                            <input
                                type="number"
                                {...register("discount")}
                                className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border"
                            />
                            {errors.discount && <p className="text-red-500 text-sm mt-1">{errors.discount.message}</p>}
                        </div>
                        <div>
                            <label className="text-sm font-medium">Stock</label>
                            <input
                                type="number"
                                {...register("stock")}
                                className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border"
                            />
                            {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>}
                        </div>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="text-sm font-medium">Category</label>
                        <select
                            {...register("category")}
                            className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border"
                        >
                            <option value="">Select category</option>
                            {categories.map((cat) => (
                                <option key={cat._id} value={cat._id}>
                                    {cat.name}
                                </option>
                            ))}
                        </select>
                        {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="text-sm font-medium">Product Image</label>
                        <label className="mt-1 flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-md cursor-pointer bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600">
                            <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                            <FaCloudUploadAlt className="text-3xl text-gray-400 mb-1" />
                            <span className="text-xs text-gray-600 dark:text-gray-400">
                                Click or drag to upload new image
                            </span>
                        </label>
                        {(preview || currentImage) && (
                            <div className="mt-2">
                                <img
                                    src={preview || currentImage}
                                    alt="Product"
                                    className="h-16 w-16 object-cover rounded border"
                                />
                            </div>
                        )}
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full flex justify-center items-center gap-2 ${
                            loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700"
                        } text-white font-semibold py-3 rounded-lg transition`}
                    >
                        <FaEdit /> {loading ?  <ButtonLoader size={6} color="#fff"  message="Updating"/>: "Update Product"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
