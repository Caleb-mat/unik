import { stripe } from "@/stripe-server";

export default async function POST(req:Request){
    const { amount } = await req.json()
    const customer = await stripe.customers.create();
    const ephemeralKey = await stripe.ephemeralKeys.create({
        customer: customer.id
    },{
        apiVersion: "2025-03-31.basil"
    }
);
const paymentIntent = stripe.paymentIntents.create({
    amount: amount? Math.floor(amount*100): 10000,
    currency: "eur",
    customer: customer.id,
    automatic_payment_methods: {
        enabled: true
    }
});
 return Response.json({
    paymentIntent: (await paymentIntent).client_secret,
    ephemeralKey: ephemeralKey.secret,
    customer: customer.id,
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY
 })

}