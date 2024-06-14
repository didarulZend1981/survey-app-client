import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";



const Payment = () => {
  
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

  return (
    <div>

<h2 className="h-[100px]"></h2>
  

             <div className="w-[500px] text-center">
             
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
                
            </div>
        </div>
  );
};

export default Payment;