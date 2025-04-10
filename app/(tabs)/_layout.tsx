import HomeScreen from './HomeScreen';
import AuthScreen from './AuthScreen';
import Suiv1 from './suiv1'
import Suiv2 from './suiv2'
import { RootStackParamList } from '../../types';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Suiv3 from './suiv3';
import BonDetailScreen from './BonDetailScreen';
import RecuDetailScreen from './RecuDetailScreen';
import ConnectedHomeScreen from './ConnectedHomeScreen';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';
import ProfilScreen from './ProfilScreen';
import { View } from 'react-native';
import ConnectedStack from './ConnectedStack';
import CreateBonScreen from './CreateBonScreen';
import PaymentScreen from './PaymentScreen';


const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();


export default function RootLayout() {
  return (
 
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="AuthScreen" component={AuthScreen} />
        <Stack.Screen name="suiv1" component={Suiv1} /> 
        <Stack.Screen name="suiv2" component={Suiv2} /> 
        <Stack.Screen name="suiv3" component={Suiv3} />
        <Stack.Screen name="BonDetailScreen" component={BonDetailScreen} /> 
        <Stack.Screen name="RecuDetailScreen" component={RecuDetailScreen} /> 
        <Stack.Screen name="ConnectedHomeScreen" component={ConnectedHomeScreen} /> 
        <Stack.Screen name="Connected" component={ConnectedStack} />
        <Stack.Screen name="CreateBonScreen" component={CreateBonScreen} />
        <Stack.Screen name="PaymentScreen" component={PaymentScreen} />
      </Stack.Navigator>
   )
}
