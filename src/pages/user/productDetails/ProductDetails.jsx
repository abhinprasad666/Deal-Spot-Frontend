import React, { useEffect } from "react";
import ProductCardDetail from "./ProductCardDetails";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { getProduct } from "../../../redux/actions/productActions/singleProductActions";
import { showToast } from "../../../utils/toastUtils";
import Reviews from "../../../components/reviews/Reviews";
import { addToCart, getCart } from "../../../redux/actions/productActions/cartActions";
import ButtonLoader from "../../../components/common/ButtonLoader";

const ProductDetails = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const { product, loading, error } = useSelector((state) => state.product);
    const { cartLoading, cartError } = useSelector((state) => state.cart);
    const { isAuthenticated } = useSelector((state) => state.auth);

    useEffect(() => {
        window.scrollTo(0, 0);
        if (error) {
            showToast(`${error}`, "red", "error-toast");
        }

        dispatch(getProduct(params.id));
    }, [dispatch, params.id, error]);

    const handleAddToCart = async () => {
        if (!isAuthenticated) {
            navigate("/login", {
                state: { redirect: location.pathname }, // path to redirect after login
            });
        }

        await Promise.resolve(dispatch(addToCart({ productId: params.id, quantity: 1 })));
        dispatch(getProduct(params.id));
        dispatch(getCart);
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
        <div>
            {loading ? (
                <ButtonLoader
                    message="Getting all the details ready for you..."
                    bottomMessage="Hang tight! We’re fetching everything about this product."
                    fullPage={true}
                />
            ) : (
                <div className="container mx-auto px-4 py-10 mt-20">
                    <ProductCardDetail
                        product={product}
                        onAddToCart={handleAddToCart}
                        onAddToWishlist={handleAddToWishlist}
                        handleWhatsAppShare={handleWhatsAppShare}
                        handleCopyLink={handleCopyLink}
                        cartLoading={cartLoading}
                        cartError={cartError}
                    />

                    <div className="bg-gray-50 pt-12 dark:bg-gray-900 ">
                        <Reviews productId={params.id} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductDetails;
