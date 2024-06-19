import { loadStripe } from "@stripe/stripe-js";

import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";



const Payment = () => {
  
  const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

  return (
    <div>

<h2 className="h-[100px]"></h2>
  

             <div className="rounded-lg mt-[50px] w-[300px] text-center bordder-2 h-[100px] mx-auto my-auto border-2 p-5">
             
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
                
            </div>
        </div>
  );
};

export default Payment;