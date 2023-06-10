import { Elements } from '@stripe/react-stripe-js';
import React from 'react';
import { CheckoutForm } from '../../../components/CheckOutForms/CheckoutForms';
import { loadStripe } from '@stripe/stripe-js';
import { useLoaderData } from 'react-router-dom';

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
  const data = useLoaderData();
  const cost = data.price
  const price = parseFloat(cost.toFixed(2));
  console.log(price)
  return (
    <div className='w-[500px]'>
       <Elements stripe={stripePromise}>
        <CheckoutForm classes={data} price={price}></CheckoutForm>
    </Elements>
    </div>
  );
};

export default Payment;