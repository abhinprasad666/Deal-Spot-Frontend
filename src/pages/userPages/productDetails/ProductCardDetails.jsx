import React from "react";
import { FaHeart, FaWhatsapp, FaCopy } from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../../../components/common/loaders/Loader";

const ProductCardDetail = ({ product, onAddToCart, onAddToWishlist, handleCopyLink, handleWhatsAppShare, cartLoading }) => {
    const offerPrice = product?.price - product?.discount;
    const shippingCharge = product?.shippingCharge || 0;

    return (
        <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Product Image */}
            <div className="w-full">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full max-h-[580px] object-contain rounded-xl shadow-md"
                />
            </div>

            {/* Product Info */}
            <div>
                <h2 className="text-3xl font-bold mb-2">{product.title}</h2>
                <p className="text-gray-600 text-sm mb-4 dark:text-gray-100">{product.brand}</p>

                {/* Rating */}
                <div className="flex items-center mb-4">
                    <p className="text-yellow-500 text-sm mt-1 dark:text-green-300">⭐ {product?.rating || 0} / 5</p>
                    <span className="ml-2 text-sm text-gray-500 dark:text-gray-100">{product.numOfReviews} reviews</span>
                </div>

                {/* Price */}
                <div className="mb-4">
                    <span className="text-2xl font-semibold text-green-600 dark:text-green-400">₹{offerPrice}</span>
                    {product.discount > 0 && (
                        <>
                            <span className="ml-2 line-through text-gray-400 dark:text-gray-100">₹{product.price.toFixed(2)}</span>
                            <span className="ml-2 text-red-500">({product.discount} OFF)</span>
                        </>
                    )}
                </div>

                {/* Description */}
                <div className="mb-4">
                    <h4 className="font-semibold mb-1">Description:</h4>
                    <p className="text-gray-700 leading-relaxed dark:text-gray-100">{product.description}</p>
                </div>

                {/* Stock */}
                <p className={`font-medium mb-2 ${product.stock > 0 ? "text-green-500" : "text-red-500"}`}>
                    {product.stock > 0 ? `In Stock (${product.stock} left)` : "Out of Stock"}
                </p>

                {/* Shipping Info */}
                <p className="text-sm text-gray-600 mb-6 dark:text-gray-200">
                    <span className="font-semibold dark:text-gray-100">Shipping:</span>{" "}
                    {shippingCharge === 0 ? "Free Shipping" : `₹${shippingCharge}`}
                </p>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                    <button
                        className="w-full h-12 bg-pink-600 text-white rounded-full shadow hover:bg-pink-700 transition disabled:opacity-50 flex items-center justify-center"
                        disabled={product.stock === 0 || cartLoading}
                        onClick={onAddToCart}
                    >
                        {cartLoading ? (
                            <Loader className="h-5 w-5" />
                        ) : product.stock > 0 ? (
                            product.isAddCart
                        ) : (
                            "Out of Stock"
                        )}
                    </button>

                    <button
                        className="w-full h-12 border border-red-500 text-red-500 rounded-full hover:bg-red-500 hover:text-white transition flex items-center justify-center gap-2"
                        onClick={onAddToWishlist}
                    >
                        <FaHeart />
                        Add to Wishlist
                    </button>
                </div>

                {/* Share Buttons with Full Width */}
                <div className="flex flex-col md:flex-row gap-4 mt-6">
                    <button
                        className="w-full flex items-center justify-center gap-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition text-sm"
                        onClick={handleWhatsAppShare}
                    >
                        <FaWhatsapp />
                        Share via WhatsApp
                    </button>

                    <button
                        className="w-full flex items-center justify-center gap-2 bg-gray-300 text-gray-800 px-6 py-3 rounded-full hover:bg-gray-400 transition text-sm"
                        onClick={handleCopyLink}
                    >
                        <FaCopy />
                        Copy Product Link
                    </button>
                </div>
            </div>

            {/* Toast Message */}
            <ToastContainer position="top-center" />
        </div>
    );
};

export default ProductCardDetail;
