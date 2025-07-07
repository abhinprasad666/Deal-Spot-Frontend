import React, { useEffect } from 'react';
import SellerNavbar from '../../seller/navbar/SellerNavbar';
import SellerFooter from '../../seller/footer/SellerFooter';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../../../utils/toastUtils';
import { getSellerData } from '../../../redux/actions/seller/getSellerInfoActions';

const SellerMainLayout = () => {
const { loading,error,sellerData } = useSelector((state) => state.sellerData);
    const dispatch = useDispatch();
   useEffect(() => {
          if (error) {
              return showToast(` ${error}`, "error", "get seller data");
          }
          dispatch(getSellerData);
        
        
      }, [dispatch, error]);


  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navbar */}
      <SellerNavbar />

      {/* Page Content (fills remaining height) */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer stays at bottom */}
      <SellerFooter />
    </div>
  );
};

export default SellerMainLayout;
