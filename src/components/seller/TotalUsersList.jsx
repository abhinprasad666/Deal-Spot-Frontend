import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsersList } from "../../redux/actions/seller/usersListActions";
import { User, Fingerprint } from "lucide-react"; // 👈 make sure this is installed
import Loader from "../common/Loader";


const TotalUsersList = () => {
  const dispatch = useDispatch();
  const { usersList, loading, error } = useSelector((state) => state.usersList);

  useEffect(() => {
    dispatch(getUsersList);
  }, [dispatch]);

  if (loading) {
    return <Loader message={"Loading users..."}/>;
  }

  return (
    <div className="p-4 sm:p-6">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
        👥 Total Users
      </h2>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
        Total Registered Users:{" "}
        <span className="font-semibold">{usersList.length}</span>
      </p>

      {usersList.length === 0 ? (
        <div className="bg-white dark:bg-[#1f1f1f] rounded-xl shadow p-4 text-center text-gray-500 dark:text-gray-400">
          No users found.
        </div>
      ) : (
        <div className="bg-white dark:bg-[#1f1f1f] rounded-xl shadow p-4">
          <ul className="space-y-3">
            {usersList.map((user) => (
              <li
                key={user._id}
                className="flex justify-between items-center border-b border-gray-200 dark:border-gray-700 pb-2"
              >
                <div className="flex items-center gap-2 text-gray-800 dark:text-white font-medium">
                  <User className="w-4 h-4 text-blue-500" />
                  {user.name}
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Fingerprint className="w-4 h-4 text-green-400" />
              {user._id}
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TotalUsersList;
