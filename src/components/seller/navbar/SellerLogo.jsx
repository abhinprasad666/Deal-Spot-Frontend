import React from "react";

const SellerLogo = () => {
  const seller = {
    name: "SmartShop Seller",
    logo: "https://via.placeholder.com/40",
  };

  return (
    <div className="flex items-center gap-3">
      <img
        src={seller.logo}
        alt="Seller Logo"
        className="w-10 h-10 rounded-full object-cover"
      />
      <span className="text-lg font-bold text-gray-800 hidden sm:inline">
        {seller.name}
      </span>
    </div>
  );
};

export default SellerLogo;
