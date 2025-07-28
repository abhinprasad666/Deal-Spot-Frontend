// src/pages/BlockedUserPage.jsx
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

const BlockedUserPage = () => {
  const { user } = useSelector((state) => state.auth);
  const userName = user?.name || "User";
  const userRole = user?.role || "user";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-100 to-white px-4">
      <motion.div
        className="max-w-xl w-full bg-white p-8 rounded-2xl shadow-xl text-center border border-red-200"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <motion.div
          className="flex justify-center mb-4 text-red-500"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
        >
          <ShieldAlert size={48} />
        </motion.div>

        <motion.h1
          className="text-2xl font-semibold text-red-600 mb-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          Hello {userName},
        </motion.h1>

        <motion.p
          className="text-gray-700 mb-4 text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Your {userRole} account has been{" "}
          <span className="text-red-600 font-semibold">blocked</span>.
        </motion.p>

        <motion.div
          className="bg-red-100 p-4 rounded-lg text-sm text-left text-red-700 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p className="mb-2 font-medium">Possible reasons include:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Violation of platform guidelines</li>
            <li>Suspicious activity detected</li>
            <li>Multiple complaints or reports</li>
            <li>Admin action</li>
          </ul>
        </motion.div>

        <motion.p
          className="text-gray-600 mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          If you believe this is a mistake, please contact support to resolve the issue.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8 }}
        >
          <Link
            to="/"
            className="inline-block mt-4 px-6 py-2 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition"
          >
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default BlockedUserPage;
