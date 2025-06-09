import  axios  from 'axios';
import { productFail, productRequest, productSuccess } from '../slices/productsSlice';



export const getProducts=async(dispatch)=>{

      dispatch(productRequest())
    try {
          const {data}=await axios.get( `${import.meta.env.VITE_API_BASE_URL}/api/v1/product`)
          dispatch(productSuccess(data))
        
    } catch (error) {
        console.log("error in getProduct",error)
        dispatch(productFail(error.response.data))
    }
 
}