import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { CheckoutForm } from '../../../components/CheckOutForms/CheckoutForms';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
  return (
    <div className='w-[500px]'>
       <Elements stripe={stripePromise}>
        <CheckoutForm></CheckoutForm>
    </Elements>
    </div>
  );
};

export default Payment;