import { configureStore, combineReducers } from "@reduxjs/toolkit";
import products from "./slices/productSlices/productsSlice";
import product from "./slices/productSlices/singleProductSlice";
import categories from "./slices/productSlices/categoriesSlice";
import slides from "./slices/productSlices/sliderSlice";
import auth from "./slices/authSlice";
import password from "./slices/passwordSlice";
import userProfile from "./slices/userProfileSlice";
import review from "./slices/reviewsSlice";
import cart from "./slices/productSlices/cartSlice";
import order from "./slices/ordersSlice";

// seller
import status from "./slices/seller/sellerStatus";
import sellerProducts from "./slices/seller/sellerProductsSlice";
import sellerOrdersList from "./slices/seller/orderListSlice";
import usersList from "./slices/seller/getUsersSlice";
import sellerReviews from "./slices/seller/sellerReviewsSlice";
import sellerProfile from "./slices/seller/sellerProfileSlice";
import sellerData from "./slices/seller/getSellerInfo";
import sellerRegister from "./slices/seller/sellerRegisterSlice";
import categoryProducts from "./slices/productSlices/categoryProductsSlice"
// Combine all reducers
const appReducer = combineReducers({
  products,
  product,
  categories,
  categoryProducts,
  slides,
  auth,
  password,
  userProfile,
  review,
  cart,
  order,
  status,
  sellerProducts,
  sellerOrdersList,
  usersList,
  sellerReviews,
  sellerProfile,
  sellerData,
  sellerRegister,
   
});

// Special RESET action handling
const rootReducer = (state, action) => {
  if (action.type === "RESET_ALL_STATE") {
    state = undefined; // clears everything
  }
  return appReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
});
