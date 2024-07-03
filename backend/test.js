require('dotenv').config();
const stripe = require('stripe')(process.env.SECRET_KEY);

// Replace 'pi_12345' with your actual Payment Intent ID
const paymentIntentId = 'pi_1PXOGKRtvgrHyHKjzn2tFOz0';

async function getPaymentIntentDetails(paymentIntentId) {
  try {
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    console.log('Payment Intent Details:', paymentIntent);
  } catch (error) {
    console.error('Error retrieving payment intent details:', error);
  }
}

getPaymentIntentDetails(paymentIntentId);
