import React from 'react';
import SellerNavbar from '../../seller/navbar/SellerNavbar';
import SellerFooter from '../../seller/footer/SellerFooter';
import { Outlet } from 'react-router-dom';

const SellerMainLayout = () => {
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
