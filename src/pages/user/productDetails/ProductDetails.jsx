import React, { useEffect, useState } from "react";
import ProductCardDetail from "./productDetailsCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProduct } from "../../../redux/actions/productActions/singleProductActions";
import Loader from "../../../components/common/Loader";
import { showToast } from "../../../utils/toastUtils";
import Reviews from "../../../components/reviews/Reviews";

const ProductDetails = () => {
    const params = useParams();
    const dispatch = useDispatch();

    const { product, loading, error } = useSelector((state) => state.product);

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to top when page loads
        if (error) {
            return showToast(`${error}`, "red", "error-toast");
        }
        dispatch(getProduct(params.id));
    }, [dispatch, params.id, error]);

    const [quantity, setQuantity] = useState(1);

    const handleDecrement = () => {
        if (quantity > 1) {
            setQuantity((prev) => prev - 1);
        }
    };

    const handleIncrement = () => {
        if (quantity < product.stock) {
            setQuantity((prev) => prev + 1);
        }
    };

    const handleAddToCart = () => {
        showToast(`Added ${quantity} item(s) to cart!`, "success", "cart-toast");
    };

    const handleAddToWishlist = () => {
        showToast("Added to wishlist", "info", "wishlist-toast");
    };

    const handleWhatsAppShare = () => {
        const shareText = `${product.title} - Check this out on Deal-Spot!\n${window.location.href}`;
        const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
        window.open(whatsappUrl, "_blank");
    };

    const handleCopyLink = () => {
        navigator.clipboard.writeText(window.location.href);
        showToast("Product link copied to clipboard", "success", "copy-toast");
    };

    return (
        <div className="container mx-auto px-4 py-10 mt-20">
            {loading ? (
                <Loader />
            ) : (
                <ProductCardDetail
                    product={product}
                    quantity={quantity}
                    onDecrement={handleDecrement}
                    onIncrement={handleIncrement}
                    onAddToCart={handleAddToCart}
                    onAddToWishlist={handleAddToWishlist}
                    handleWhatsAppShare={handleWhatsAppShare}
                    handleCopyLink={handleCopyLink}
                />
            )}

            <div className="bg-gray-50 pt-12">
                <Reviews />
            </div>
        </div>
    );
};

export default ProductDetails;
