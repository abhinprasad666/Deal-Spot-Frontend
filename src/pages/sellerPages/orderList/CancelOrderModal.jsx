import React from "react";
import { useForm } from "react-hook-form";

const CancelOrderModal = ({ orderId, onClose, onSubmit }) => {
  const { register, handleSubmit, reset } = useForm();

  const handleFormSubmit = (data) => {
    onSubmit(orderId, data.reason);
    reset();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-[#1e1e1e] rounded-xl shadow-lg w-full max-w-md p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
          Cancel Order
        </h3>
        <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
          <textarea
            {...register("reason", { required: true })}
            placeholder="Enter cancellation reason..."
            rows={4}
            className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-[#2a2a2a] text-gray-800 dark:text-white focus:outline-none"
          />
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={() => {
                reset();
                onClose();
              }}
              className="px-4 py-2 text-sm bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-white rounded hover:bg-gray-300 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm bg-red-600 text-white rounded hover:bg-red-700"
            >
              Submit Reason
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CancelOrderModal;
