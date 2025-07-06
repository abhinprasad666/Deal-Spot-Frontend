import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  loading: false,
 usersList:[],
  error:null
}

const usersListlice = createSlice({
  name: 'sellerusersList',
  initialState,
  reducers: {
     getusersListRequest: (state) => {
      state.loading = true
    },
    getusersListSuccess: (state, action) => {
      state.loading = false
      state.usersList=action.payload.users
     
    },
    getusersListFail: (state,action) => {
      state.loading = false
      state.error=action.payload
    },
  },
})

export const {getusersListRequest,getusersListSuccess,getusersListFail}=usersListlice.actions;

export default usersListlice.reducer