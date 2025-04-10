import { StripeProvider } from "@stripe/stripe-react-native";
import * as Linking from 'expo-linking'

export default function stripeProviderExpo(props:Omit<React.ComponentProps<typeof StripeProvider>,"publishableKey">){
    return (
    <StripeProvider
    publishableKey={process.env.STRIPE_PUBLISHABLE_KEY!}
    urlScheme={Linking.createURL("/")?.split(":")[0]}     
    {...props}
  
    />
);
}