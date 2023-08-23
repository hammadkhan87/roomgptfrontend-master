import {CardElement, useElements, useStripe} from "@stripe/react-stripe-js";
import { useNavigate } from "react-router-dom";
import React, {useState} from "react";
import ApiService from "../api/api";


const CheckoutForm = ({priceId, credits}) => {
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(localStorage.getItem("email"));
  const stripe = useStripe();
  const elements = useElements();

  const navigateTo = useNavigate();
// Handle real-time validation errors from the CardElement.
const handleChange = (event) => {
  if (event.error) {
    setError(event.error.message);
  } else {
    setError(null);
  }
}
// Handle form submission.
const handleSubmit = async (event) => {
    event.preventDefault();
    
    const card = elements.getElement(CardElement);
   
   // add these lines
    const {paymentMethod, error} = await stripe.createPaymentMethod({
       type: 'card',
       card: card
  });

  ApiService.saveStripeInfo({
    email, priceId, credits, payment_method_id: paymentMethod.id})
  .then(response => {
    console.log(response.data);
    if (response.data.message=="Success"){
        navigateTo("/dream")
    }
    else{
      alert(response.data.data.details)
    }
  }).catch(error => {
    console.log(error)
  })
  };
  
return (
    <div className="flex justify-center items-center h-screen">
  <form onSubmit={handleSubmit} className="stripe-form max-w-md w-96 mx-auto p-4 bg-white rounded-lg shadow-lg">
  <div className="mb-4">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
    <input
      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
      id="email"
      name="email"
      type="email"
      placeholder="jenny.rosen@example.com"
      required
      value={email}
      disabled={true}
    />
  </div>
  <div className="mb-4">
    <label htmlFor="card-element" className="block text-sm font-medium text-gray-700">Credit or Debit Card</label>
    <div className="mt-1">
      <CardElement
        id="card-element"
        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
        onChange={handleChange}
      />
    </div>
    <div className="text-red-500 text-sm mt-1" role="alert">{error}</div>
  </div>
  <button
    type="submit"
    className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
  >
    Submit Payment
  </button>
</form>
</div>
 );
};
export default CheckoutForm;