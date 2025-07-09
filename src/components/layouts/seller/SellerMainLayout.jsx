import React, { useEffect } from 'react';
import SellerNavbar from '../../seller/navbar/SellerNavbar';
import SellerFooter from '../../seller/footer/SellerFooter';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { showToast } from '../../../utils/toastUtils';
import { getSellerData } from '../../../redux/actions/seller/getSellerInfoActions';
import { clearGetSellerData } from '../../../redux/slices/seller/getSellerInfo';
import Loader from '../../common/Loader';

const SellerMainLayout = () => {
  const dispatch = useDispatch();
  const { loading, error, sellerData } = useSelector((state) => state.sellerData);

  // Fetch seller data only once on mount
  useEffect(() => {
    dispatch(getSellerData)
  }, [dispatch]);

  // Show toast only when error changes and clear the error state
  useEffect(() => {
    if (error) {
      showToast(`${error}`, 'error', 'get seller data');
      dispatch(clearGetSellerData());
    }
  }, [error, dispatch]);

  return (
    <div>
      {loading ? (
        <Loader message={'Loading...'} />
      ) : (
        <div className="flex flex-col min-h-screen">
          <SellerNavbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <SellerFooter />
        </div>
      )}
    </div>
  );
};

export default SellerMainLayout;
