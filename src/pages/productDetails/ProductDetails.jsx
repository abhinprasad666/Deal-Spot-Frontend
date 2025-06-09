// src/pages/ProductDetails.jsx
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductCardDetail from "./productDetailsCard";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../redux/actions/singleProductActions";
import { useParams } from "react-router-dom";
import Loader from "../../components/common/Loader";

const ProductDetails = () => {

  const params=useParams()
   const { product,loading } = useSelector((state) => state.product);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getProduct(params.id));
    }, [dispatch,params.id]);

   
    const [quantity, setQuantity] = useState(1);
    const cartToastId = "cart-toast";
    const wishlistToastId = "wishlist-toast";

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
        if (!toast.isActive(cartToastId)) {
            toast.success(`Added ${quantity} item(s) to cart!`, {
                toastId: cartToastId,
                position: "top-right",
                autoClose: 2000,
            });
        }
    };

    const handleAddToWishlist = () => {
        if (!toast.isActive(wishlistToastId)) {
            toast.info("Added to wishlist ❤️", {
                toastId: wishlistToastId,
                position: "top-right",
                autoClose: 2000,
            });
        }
    };

    return (
        <div className="container mx-auto px-4 py-10 mt-20">
            <ToastContainer />
        {loading?<Loader/>:<ProductCardDetail
                product={product}
                quantity={quantity}
                onDecrement={handleDecrement}
                onIncrement={handleIncrement}
                onAddToCart={handleAddToCart}
                onAddToWishlist={handleAddToWishlist}
            />}
        </div>
    );
};

export default ProductDetails;
