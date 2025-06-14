import axios from "axios";
import { uploadImageFail, uploadImageRequest, uploadImageSuccess } from "../../slices/userProfileSlice";
import { loadUser } from "../authActions/loadUser";

// Image Upload Action
// No default export needed if using named export
export const uploadProfileImage = (formData) => async (dispatch) => {
    try {
        dispatch(uploadImageRequest());

        const config = {
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const { data } = await axios.put(`${import.meta.env.VITE_API_BASE_URL}/api/v1/user/upload/dp`, formData, config);
            
        if(data){
            dispatch(loadUser())
        }
          
        dispatch(uploadImageSuccess({ message: data.message }));
    } catch (error) {
        dispatch(uploadImageFail(error.response?.data?.message || error.message || "Image upload failed"));
    }
};
