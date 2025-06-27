import axiosInstance from "../api/axiosInstance";

const PayButton = ({ amount,totalDiscount, shippingAddress,paymentMethod,cartIteams,setPayment}) => {

   
  const handlePayment = async () => {
    try {
      setPayment(true)
      // Create Razorpay Order from backend
      const { data } = await axiosInstance.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/payment/create-order`,
           {
          amount,totalDiscount,shippingAddress ,cartIteams,paymentMethod
         
        },
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
          color:"#0f172a",
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
       className="w-full mt-5 bg-green-600 hover:bg-green-700 text-white py-2 rounded transition"
    >
      Pay ₹{amount}
    </button>
  );
};

export default PayButton;
