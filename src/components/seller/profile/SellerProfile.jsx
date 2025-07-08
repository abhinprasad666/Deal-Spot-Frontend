import React, { useEffect, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  uploadSellerCover,
  uploadSellerDp,
} from "../../../redux/actions/seller/sellerFrofileActions";
import { showToast } from "../../../utils/toastUtils";
import { clearSellerProfileState } from "../../../redux/slices/seller/sellerProfileSlice";
import { getSellerData } from "../../../redux/actions/seller/getSellerInfoActions";

const SellerProfile = () => {
 
  const dispatch = useDispatch();

  const { loadingDp, loadingCover, error, upoladCoverImg, uploadProfileDp } =
    useSelector((state) => state.sellerProfile);
  const { loading, seller } = useSelector((state) => state.sellerData);
console.log("seller loding",loading)
console.log('update profile...',)
  const sampleCoverImg =
    "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1000&q=80";
  const sampleDp =
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80";

  const [coverPreview, setCoverPreview] = useState(sampleCoverImg);
  const [profilePreview, setProfilePreview] = useState(sampleDp);
  const [coverFile, setCoverFile] = useState(null);
  const [profileFile, setProfileFile] = useState(null);

  const coverInputRef = useRef(null);
  const profileInputRef = useRef(null);

  // Set cover and profile previews when seller data is ready
  useEffect(() => {
    if (seller && seller.coverImage) {
      setCoverPreview(seller.coverImage);
    }
    if (seller && seller.profilePic) {
      setProfilePreview(seller.profilePic);
    }
  }, [seller]);

  const handleImageChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      const previewURL = URL.createObjectURL(file);
      if (type === "cover") {
        setCoverPreview(previewURL);
        setCoverFile(file);
      } else {
        setProfilePreview(previewURL);
        setProfileFile(file);
      }
    }
  };

  const handleUpload = (type) => {
    const formData = new FormData();
    if (type === "cover" && coverFile) {
      formData.append("image", coverFile);
      dispatch(uploadSellerCover(formData));
      setCoverFile(null);
    } else if (type === "profile" && profileFile) {
      formData.append("image", profileFile);
      dispatch(uploadSellerDp(formData));
      setProfileFile(null);
    }
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      // TODO: connect delete API
      console.log("Account deletion confirmed");
      showToast("Account deleted successfully", "success");
      // navigate("/");
    }
  };

  useEffect(() => {
    if (error) {
      showToast(`${error}`, "error", "api-error");
      dispatch(clearSellerProfileState());
    }
    if (upoladCoverImg) {
     dispatch(getSellerData);
      showToast(`${upoladCoverImg}`, "success", "api-error");
      dispatch(clearSellerProfileState());
    }
    if (uploadProfileDp) {
      dispatch(getSellerData);
      showToast(`${uploadProfileDp}`, "success", "api-error");
      dispatch(clearSellerProfileState());
    }
  }, [error, upoladCoverImg, dispatch, uploadProfileDp]);

  if (loading || !seller) {
    return <p className="text-center py-10">Loading seller profile...</p>;
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Cover Image */}
      <div className="relative mb-20">
        <img
          src={coverPreview}
          alt="Cover"
          className="w-full h-48 object-cover rounded-md"
        />
        <button
          onClick={() => coverInputRef.current.click()}
          className="absolute top-2 right-2 bg-white p-2 rounded-full shadow hover:bg-pink-100"
        >
          <FaCamera className="text-pink-500" />
        </button>
        <input
          type="file"
          accept="image/*"
          ref={coverInputRef}
          onChange={(e) => handleImageChange(e, "cover")}
          className="hidden"
        />
        {(coverFile || loadingCover) && (
          <div className="absolute right-4 bottom-[-42px] text-right">
            {coverFile && !loadingCover && (
              <button
                className="bg-pink-500 text-white px-4 py-1 rounded hover:bg-pink-600 text-sm"
                onClick={() => handleUpload("cover")}
              >
                Upload Cover
              </button>
            )}
            {loadingCover && (
              <p className="text-sm text-gray-600 mt-1">Uploading...</p>
            )}
          </div>
        )}

        {/* Profile Picture */}
        <div className="absolute -bottom-12 left-4">
          <div className="relative w-24 h-24">
            <img
              src={profilePreview}
              alt="Profile"
              className="w-24 h-24 rounded-full border-4 border-white object-cover shadow"
            />
            <div
              onClick={() => profileInputRef.current.click()}
              className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow-md hover:bg-pink-100 cursor-pointer"
              title="Change Profile"
            >
              <FaCamera className="text-pink-500 text-sm" />
            </div>
            <input
              type="file"
              accept="image/*"
              ref={profileInputRef}
              className="hidden"
              onChange={(e) => handleImageChange(e, "profile")}
            />
          </div>

          {(profileFile || loadingDp) && (
            <div className="mt-2 text-center">
              {profileFile && !loadingDp && (
                <button
                  className="bg-pink-500 text-white px-4 py-1 rounded hover:bg-pink-600 text-sm"
                  onClick={() => handleUpload("profile")}
                >
                  Upload DP
                </button>
              )}
              {loadingDp && (
                <p className="text-sm text-gray-600 mt-1">Uploading...</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Seller Info */}
      <div className="mt-16 bg-white rounded shadow p-4 dark:text-gray-700 dark:bg-gray-800 dark:border dark:border-gray-400  ">
        <h1 className="text-xl font-semibold dark:text-gray-300">{seller.shopName}</h1>
        <p className="text-gray-600 mt-1 dark:text-gray-300">{seller.bio}</p>
        <div className="mt-4 space-y-2">
          <p className="dark:text-gray-300">
            <strong>Address:</strong> {seller.address}
          </p>
          <p className="dark:text-gray-300">
            <strong>GST Number:</strong> {seller.gstNumber || "N/A"}
          </p>
          <p >
            <strong className="dark:text-gray-300">Status:</strong>{" "}
            <span className="text-green-600 dark:text-green-500">{seller.status}</span>
          </p>
          <p className="dark:text-gray-300">
            <strong>Verified:</strong> {seller.isVerified ? "Yes" : "No"}
          </p>
          <p className="dark:text-gray-300">
            <strong>Joined:</strong>{" "}
            {new Date(seller.createdAt).toLocaleDateString()}
          </p>
        </div>

        {/* Buttons */}
        <Link
          to={"/seller/update-profile"}
          className="inline-block mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 "
        >
          Edit Profile
        </Link>

        <button
       
          onClick={handleDeleteAccount}
          className="mt-2 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 block "
        >
          Delete Account
        </button>
      </div>
    </div>
  );
};

export default SellerProfile;
