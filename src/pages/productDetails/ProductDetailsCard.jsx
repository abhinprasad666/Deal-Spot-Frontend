import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";

const ProductCardDetail = ({
  product,
  quantity,
  onDecrement,
  onIncrement,
  onAddToCart,
  onAddToWishlist,
}) => {
   //  Discount Price Calculation
  const offerPrice = product?.price - product?.discount;

  return (
    <div className="grid md:grid-cols-2 gap-8 items-start">
      {/* Product Image */}
      <div className="w-full">
        <img
          src={product.image}
          alt={product.title}
          className="w-full max-h-[450px] object-contain rounded-xl shadow-md"
        />
      </div>

      {/* Product Info */}
      <div>
        <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
        <p className="text-gray-600 text-sm mb-4">{product.brand}</p>

        {/* Rating */}
        <div className="flex items-center mb-4">
        
        {/* Rating + Reviews */}
        <p className="text-yellow-500 text-sm mt-1">
          ⭐ {product?.rating || 0} / 5
         
        </p>
          <span className="ml-2 text-sm text-gray-500">
            {product.numOfReviews} reviews
          </span>
        </div>

        {/* Price */}
        <div className="mb-4">
          <span className="text-2xl font-semibold text-green-600">₹{offerPrice}</span>
          {product.discount > 0 && (
            <>
              <span className="ml-2 line-through text-gray-400">₹{product.price.toFixed(2)}</span>
              <span className="ml-2 text-red-500">({product.discount} OFF)</span>
            </>
          )}
        </div>

        {/* Description */}
        <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

        {/* Stock */}
        <p
          className={`font-medium mb-4 ${
            product.stock > 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {product.stock > 0
            ? `In Stock (${product.stock} left)`
            : "Out of Stock"}
        </p>

        {/* Quantity Selector */}
        <div className="flex items-center gap-4 mb-6">
          <span className="font-semibold">Quantity:</span>
          <div className="flex items-center border rounded-full overflow-hidden">
            <button
              onClick={onDecrement}
              className="px-4 py-1 text-lg font-bold bg-gray-200 hover:bg-gray-300"
            >
              -
            </button>
            <span className="px-5 py-1 font-medium">{quantity}</span>
            <button
              onClick={onIncrement}
              className="px-4 py-1 text-lg font-bold bg-gray-200 hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <button
            className="w-full bg-pink-600 text-white px-6 py-3 rounded-full shadow hover:bg-pink-700 transition disabled:opacity-50"
            disabled={product.stock === 0}
            onClick={onAddToCart}
          >
            {product.stock > 0 ? `Add ${quantity} to Cart` : "Out of Stock"}
          </button>

          <button
            className="w-full flex items-center justify-center gap-2 border border-red-500 text-red-500 px-6 py-3 rounded-full hover:bg-red-500 hover:text-white transition"
            onClick={onAddToWishlist}
          >
            <FaHeart className="text-lg" />
            Add to Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardDetail;
