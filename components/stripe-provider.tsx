import { StripeProvider } from "@stripe/stripe-react-native";
import * as Linking from 'expo-linking'

export default function stripeProviderExpo(props:Omit<React.ComponentProps<typeof StripeProvider>,"publishableKey">){
    return (
    <StripeProvider
    publishableKey="pk_test_51R54doQ84ePjGXcfh0Eajf57qmcO75PxOCtyPTRqclmaOzScnaI3WwGcZ6ytdRU63WPZSW57SQbr1VvrbymHi3bj00OCBFblSr"
    urlScheme={Linking.createURL("/")?.split(":")[0]}     
    {...props}
  
    />
);
}