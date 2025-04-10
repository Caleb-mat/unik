import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import ConnectedHomeScreen from './ConnectedHomeScreen';
import BonDetailScreen from './BonDetailScreen';
import RecuDetailScreen from './RecuDetailScreen';
import ProfilScreen from './ProfilScreen';
import CreateBonScreen from './CreateBonScreen';
import { useNavigation } from '@react-navigation/native';
import { NavigationProps } from '@/types';

const Tab = createBottomTabNavigator();



const ConnectedStack = () => {
const navigation = useNavigation<NavigationProps>();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3A1BAA',
        tabBarInactiveTintColor: '#B0B0B0',
        tabBarStyle: {
          backgroundColor: '#F5F5F5',
          height: 60,
          paddingBottom: 5,
        },
      }}
    >
      {/* ✅ Onglet Accueil */}
      <Tab.Screen 
        name="Accueil" 
        component={ConnectedHomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
        }}
      />
      
      {/* ✅ Onglet Bons */}
      <Tab.Screen 
        name="Bons" 
        component={BonDetailScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="document-text-outline" size={size} color={color} />
          ),
        }}
      />

      {/* ✅ Bouton central "+" */}
      <Tab.Screen 
        name="Add" 
        component={CreateBonScreen} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="add-circle-outline" size={size} color={color} />
          ),
          tabBarButton: (props) => (
            <Ionicons 
              name="add-circle" 
              size={60} 
              color="#3A1BAA" 
              style={{ marginBottom: 20 }} 
              onPress={() => navigation.navigate('CreateBonScreen')}
            />
          ),
        }}
      />

      {/* ✅ Onglet Reçus */}
      <Tab.Screen 
        name="Reçus" 
        component={RecuDetailScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="receipt-outline" size={size} color={color} />
          ),
        }}
      />

      {/* ✅ Onglet Profil */}
      <Tab.Screen 
        name="Profil" 
        component={ProfilScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default ConnectedStack;
