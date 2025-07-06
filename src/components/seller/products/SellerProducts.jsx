import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, getSellerProducts } from "../../../redux/actions/seller/sellerProductsActions";
import { Link } from "react-router-dom";
import { FaEdit, FaTrash, FaStar, FaBoxOpen } from "react-icons/fa";
import Loader from "../../common/Loader";
import { showToast } from "../../../utils/toastUtils";
import { clearProductMessage } from "../../../redux/slices/seller/sellerProductsSlice";

const SellerProducts = () => {
  const dispatch = useDispatch();
  
  const { sellerProducts, loading, error,productMessage,deleteMessage} = useSelector((state) => state.sellerProducts);

  useEffect(() => {
    dispatch(getSellerProducts);
    if(deleteMessage){
       showToast(`${productMessage} Deleted Successfully`, "success", "product-toast");
        dispatch(clearProductMessage());
    }
       if(error){
       showToast(error, "error", "product-toast");
        dispatch(clearProductMessage());
    }
  }, [dispatch,deleteMessage,productMessage,error]);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
        My Products
      </h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <p className="text-red-500 text-center">{error}</p>
      ) : sellerProducts.length === 0 ? (
        <div className="text-center py-16">
          <FaBoxOpen className="mx-auto text-5xl text-gray-400 dark:text-gray-600 mb-4" />
          <p className="text-lg text-gray-600 dark:text-gray-300 font-semibold">
            You haven’t added any products yet.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Once you add products, they'll show up here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {sellerProducts.map((product) => (
            <div
              key={product._id}
              className="flex items-center justify-between border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm bg-white dark:bg-gray-900 px-4 py-3 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-20 h-20 object-contain rounded"
                />
                <div>
                  <h2 className="font-semibold text-gray-800 dark:text-white text-sm">
                    {product.title.length > 50
                      ? `${product.title.slice(0, 50)}...`
                      : product.title}
                  </h2>
                  <p
                    className={`text-xs font-medium mt-1 ${
                      product.stock === 0 ? "text-red-500" : "text-green-600"
                    }`}
                  >
                    {product.stock === 0
                      ? "Out of Stock"
                      : `Stock: ${product.stock}`}
                  </p>
                  <div className="flex items-center gap-1 text-yellow-500 text-sm mt-1">
                    <FaStar className="text-xs" />
                    <span className="text-gray-700 dark:text-gray-300">
                      {product.rating ?? 0} / 5
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <Link
                  to={`/seller/edit-product/${product._id}`}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  <FaEdit /> Edit
                </Link>
                <button
                onClick={()=>dispatch(deleteProduct(product._id))}
                  className="flex items-center gap-1 px-3 py-1 text-sm bg-red-600 text-white rounded hover:bg-red-700 transition"
                >
                  <FaTrash /> Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SellerProducts;
