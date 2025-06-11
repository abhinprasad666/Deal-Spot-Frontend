import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts } from '../../../redux/actions/product/productsActions';
import { showToast } from '../../../utils/toastUtils';
import { useDispatch, useSelector } from 'react-redux';
import ProductCard from './ProductCard';
import Loader from '../../common/Loader';



const ProductSearch = () => {

const {keyword}=useParams()
        const { products, loading, error } = useSelector((state) => state.products);

    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            return showToast(` ${error}`, "error", "api-error");
        }
        dispatch(getProducts(keyword));
     
    }, [dispatch, error,keyword]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 mt-10">
              <h2 className="text-xl md:text-2xl font-semibold mb-6">Search Products</h2>
     <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {loading ? <Loader /> : products?.map((product) => <ProductCard key={product._id} product={product} />)}
            </div>
    </div>
  )
}

export default ProductSearch
