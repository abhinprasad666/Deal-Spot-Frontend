import axios from "axios";

const PayButton = ({ amount }) => {
  console.log("hello payment")
    amount=100
  const handlePayment = async () => {
    try {
      // Create Razorpay Order from backend
      const { data } = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/payment/create-order`,
           {
          amount,
          shippingAddress: {
            fullName: "Abhin",
            phone: 9072035666,
            address: "Shaiju Bhavan Palakkal",
            city: "Kadallal",
            pinCode: "691559",
            country: "India",
          },
          paymentMethod: "onlinePayment",
        }, // ₹500 => pass 500
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const order = data?.order;
      console.log("My Order", order);

      // Razorpay Options
      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID, // from .env
        amount: order.amount, // in paise
        currency: "INR",
        name: "Deal_Spot",
        description: "Order Payment - Deal Spot",
        order_id: order.id, // razorpay order ID
        callback_url: `${import.meta.env.VITE_API_BASE_URL}/api/v1/payment/verify`, // POST endpoint for verification
        prefill: {
          name: "Abhin",
          email: "abhin@example.com",
          contact: "9876543210",
        },  
        theme: {
          color: "#0f172a",
        },
      };

      //  Open Razorpay Checkout
      const rzp = new window.Razorpay(options);
      rzp.open();
    } catch (error) {
      console.error(" Payment error:", error);
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl shadow-md transition duration-300"
    >
      Pay ₹{amount}
    </button>
  );
};

export default PayButton;
