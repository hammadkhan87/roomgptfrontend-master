import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from "@stripe/stripe-js/pure";
import CheckoutForm from '../components/Stripe';
import { useParams } from 'react-router-dom';
import { PRO_PRICE_ID, ULTRA_PRICE_ID } from '../constants/cosntants';


function Payment() {
  const stripePromise = loadStripe("pk_test_51NdvU7CZVDbuWjpWbrkRXBM6dn16Z0EXlf62CJYPYWEADpL6ulP4jABoS1L8t4KfzH0sCIabKO8A1CD3xzGbMPvd00vl80qejb")
  const pro = useParams().mode=="pro" ? PRO_PRICE_ID: ULTRA_PRICE_ID
  const credits = useParams().mode=="pro"? 50: 150
  return (
    <>
    <Elements stripe={stripePromise}>
    <CheckoutForm priceId={pro} credits={credits} />
  </Elements>
    </>
  )
}

export default Payment