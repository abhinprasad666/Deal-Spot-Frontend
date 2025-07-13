import React from "react";
import { FaEdit, FaCloudUploadAlt } from "react-icons/fa";
import ButtonLoader from "../../common/ButtonLoader";

const ProductForm = ({
  handleImageChange,
  currentImage,
  preview,
  handleSubmit,
  register,
  errors,
  categories,
  loading,
  onSubmit,
}) => {
  return (
    <div className="w-full md:w-2/3 max-w-3xl bg-white dark:bg-gray-900 rounded-2xl shadow-md p-6">
      <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-6 flex items-center justify-center gap-2">
        <FaEdit /> Update Product
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* Title */}
        <div>
          <label className="text-sm font-medium">Title</label>
          <input
            type="text"
            {...register("title")}
            className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border text-gray-800 dark:text-white"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium">Description</label>
          <textarea
            rows={3}
            {...register("description")}
            className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border text-gray-800 dark:text-white"
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
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
            {errors.price && (
              <p className="text-red-500 text-sm mt-1">
                {errors.price.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium">Discount</label>
            <input
              type="number"
              {...register("discount")}
              className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border"
            />
            {errors.discount && (
              <p className="text-red-500 text-sm mt-1">
                {errors.discount.message}
              </p>
            )}
          </div>
          <div>
            <label className="text-sm font-medium">Stock</label>
            <input
              type="number"
              {...register("stock")}
              className="mt-1 w-full p-2.5 rounded-md bg-gray-100 dark:bg-gray-800 border"
            />
            {errors.stock && (
              <p className="text-red-500 text-sm mt-1">
                {errors.stock.message}
              </p>
            )}
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
          {errors.category && (
            <p className="text-red-500 text-sm mt-1">
              {errors.category.message}
            </p>
          )}
        </div>

        {/* Image Upload */}
        <div>
          <label className="text-sm font-medium">Product Image</label>
          <div className="mt-2 flex items-center gap-4">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-20 h-20 object-cover rounded-md border"
              />
            ) : currentImage ? (
              <img
                src={currentImage}
                alt="Current"
                className="w-20 h-20 object-cover rounded-md border"
              />
            ) : null}
            <label className="flex items-center gap-2 text-blue-600 cursor-pointer">
              <FaCloudUploadAlt />
              <span className="text-sm">Upload New</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </label>
          </div>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-200"
        >
          {loading ? <ButtonLoader /> : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default ProductForm;
