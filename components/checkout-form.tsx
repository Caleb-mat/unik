import { useState } from "react";
import { Button } from "react-native";
import { Alert } from "react-native";
import { router } from "expo-router";

async function openPaymentModal(amount:number): Promise<void> {
    const { url } = await fetch("/api/hosted-checkout-session", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        custom_donation: amount.toString(),
      },
    }).then((res) => res.json());
  
    router.push(url);
  }

export default function CheckoutForm({amount}: {amount: number}){
    
    return(
        <>
        <Button title="Payer" onPress={()=>{openPaymentModal(amount)}}/>
        </>
    )
}