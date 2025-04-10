import { useStripe } from "@stripe/stripe-react-native";
import { useState } from "react";
import { Button } from "react-native";
import * as Linking from "expo-linking"
import { Alert } from "react-native";


async function fetchPaymentSheetParams(amount: number): Promise<{
    clientSecret: string;
    ephemeralKey: string;
    customer : string;

}> {
    //"api/payment-sheet-api"
    return fetch("http://192.168.226.252:3333/payments/stripe/webhook", {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body: JSON.stringify({amount, currency:"eur", paymentMethodId: "pm_card_visa"})
    }).then((res)=>res.json())
}

export default function CheckoutForm({amount}: {amount: number}){
    const {initPaymentSheet, presentPaymentSheet} = useStripe();
    const [loading, setLoading]=useState(false);
    const initializePaymentSheet = async()=> {
        const { clientSecret, ephemeralKey, customer}= await fetchPaymentSheetParams(amount);
        const {error} = await initPaymentSheet({
            merchantDisplayName: "Expo, Inc.",
            customerId: customer,
            customerEphemeralKeySecret: ephemeralKey,
            paymentIntentClientSecret: clientSecret,
            allowsDelayedPaymentMethods: true,
            defaultBillingDetails:{
                name: "Eden",
                email: "eden@gmail.com",
                phone: "0605540860"
            },
            returnURL: Linking.createURL("stripe-redirect")
        });
        if(!error){
            setLoading(true)
            console.log("Variable environnement", process.env.STRIPE_PUBLISHABLE_KEY)
        }else{
            console.log("le Chargement echoue!");
        }
    };

    const openPaymentSheet = async()=>{
        const {error} = await presentPaymentSheet();
        if(error){
            console.log("Erreur ouverture feuille de paiement:", error);
            Alert.alert("Erreur", error.message);
        }else{
            Alert.alert("Réussi", "Votre paiment est confirmé")
        }
    }
    return(
        <>
        <Button title="Payer" onPress={()=>initializePaymentSheet()}/>
        <Button title="ouvrir UI paie" onPress={()=>openPaymentSheet()} disabled={!loading}/>
        </>
    )
}