import { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamList = {
  HomeScreen: undefined;
  AuthScreen: undefined;
  suiv1: undefined;
  suiv2: undefined;
  suiv3: undefined;
  BonDetailScreen: {id: Number | null | String };
  RecuDetailScreen : {id: String};
  ConnectedHomeScreen: undefined;
  ProfilScreen: undefined;
  Connected: undefined;
  CreateBonScreen: undefined;
  PaymentScreen : undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
export interface Payment {
  id: number;
  studentName: string;
  paymentReason: string;
  amount: number;
  payment_method: string;
  voucher_number: string;
  paymentMethod: string;
  phone_number: string;
  created_at?: string;
  updated_at?: string;
}

