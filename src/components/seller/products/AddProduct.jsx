import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  FaPlus,
  FaCloudUploadAlt,
  FaCheckCircle,
  FaBoxes,
  FaInfoCircle,
} from "react-icons/fa";
import { createProduct } from "../../../redux/actions/seller/sellerProductsActions";
import { showToast } from "../../../utils/toastUtils";
import { getCategories } from "../../../redux/actions/productActions/categoriesActions";
import { clearProductMessage } from "../../../redux/slices/seller/sellerProductsSlice";
import ButtonLoader from "../../common/ButtonLoader";
import { schema } from "./schema";


const AddProduct = () => {
  const dispatch = useDispatch();
  const { productMessage, error, loading } = useSelector((state) => state.sellerProducts);
  const { categories } = useSelector((state) => state.categories);

  const [preview, setPreview] = useState(null);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setValue("image", file);
      setPreview(URL.createObjectURL(file));
    }
  };


  const onSubmit = (data) => {
    const formattedData = {
      ...data,
      discount: data.discount ?? 0,
      brand: data.brand?.trim() || null,
    };
    dispatch(createProduct(formattedData));
  };

  // Effects
  useEffect(() => {
    dispatch(getCategories);

    if (productMessage) {
      showToast(productMessage, "success", "product-toast");
      reset();
      setPreview(null);
      dispatch(clearProductMessage());
    }

    if (error) {
      showToast(error, "error", "product-toast");
    }
  }, [dispatch, productMessage, error, reset]);

  return (
    <div className="min-h-screen flex flex-col md:flex-row items-stretch bg-white dark:bg-gray-900 px-4 py-10 gap-8">
      {/* Left Info Panel */}
      <div className="w-full md:w-1/3 bg-gradient-to-b from-rose-600 to-pink-500 text-white rounded-2xl p-6 flex flex-col justify-between shadow-xl">
        <div>
          <h2 className="text-3xl font-bold mb-4 flex items-center gap-2">
            <FaBoxes /> Start Selling Smart
          </h2>
          <p className="text-sm leading-relaxed opacity-90">
            Showcase your products with style. Provide all key details and stand out from the crowd. 🛍️
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-300" /> Clear product name
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-300" /> Right category & stock
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-300" /> Upload good images
            </li>
            <li className="flex items-center gap-2">
              <FaCheckCircle className="text-green-300" /> Catchy description
            </li>
          </ul>
        </div>
        <p className="text-xs text-pink-100 mt-6 flex items-center gap-1">
          <FaInfoCircle /> Use this panel to easily add products.
        </p>
      </div>

      {/* Right Form Panel */}
      <div className="w-full md:w-2/3 max-w-3xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6 flex items-center justify-center gap-2">
          <FaPlus /> Add New Product
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Title */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Product Title</label>
            <input
              type="text"
              {...register("title")}
              className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
            <textarea
              rows={3}
              {...register("description")}
              className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
            ></textarea>
            {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
          </div>

          {/* Price, Discount, Stock */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Price</label>
              <input
                type="number"
                {...register("price")}
                className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
              />
              {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Discount (optional)</label>
              <input
                type="number"
                {...register("discount")}
                placeholder="₹0"
                className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
              />
              {errors.discount && <p className="text-red-500 text-sm mt-1">{errors.discount.message}</p>}
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Stock</label>
              <input
                type="number"
                {...register("stock")}
                className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
              />
              {errors.stock && <p className="text-red-500 text-sm mt-1">{errors.stock.message}</p>}
            </div>
          </div>

          {/* Category */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
            <select
              {...register("category")}
              className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
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

          {/* Brand */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Brand (optional)</label>
            <input
              type="text"
              placeholder="Eg: Apple, Samsung"
              {...register("brand")}
              className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-white"
            />
          </div>

          {/* Image Upload */}
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Product Image</label>
            <label className="mt-1 flex flex-col items-center justify-center w-full h-36 border-2 border-dashed rounded-md cursor-pointer bg-gray-50 dark:bg-gray-800 border-gray-300 dark:border-gray-600">
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={handleImageChange}
              />
              {preview ? (
                <img src={preview} alt="Preview" className="h-full object-contain" />
              ) : (
                <div className="flex flex-col items-center gap-2 text-gray-500 dark:text-gray-300">
                  <FaCloudUploadAlt className="text-3xl" />
                  <p>Click to upload</p>
                </div>
              )}
            </label>
            {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-md font-semibold flex items-center justify-center gap-2"
            disabled={loading}
          >
            {loading ? <ButtonLoader /> : <>Add Product</>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
