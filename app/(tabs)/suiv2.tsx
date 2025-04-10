import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProps } from '../../types';
import CustomButton from '@/components/CustomButton';
import Suiv3 from './suiv3';

const Suiv2 = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      {/* Texte "Sauter" cliquable */}
      <Pressable onPress={() => navigation.navigate('suiv3')}>
        <Text style={styles.skipText}>Sauter</Text>
      </Pressable>

      <View style={styles.content}>
        <Text style={styles.title}>Payez vos frais sans vous déplacer</Text>
        <Text style={styles.description}>
          Avec votre carte Visa ou MasterCard ou par mobile Money, payez vos frais académiques.
        </Text>

        {/* Bouton "Suivant" */}
        <CustomButton 
          title="Suivant" 
          onPress={() => navigation.navigate('suiv3')} 
          boutonStyle={styles.button} 
          textStyle={styles.buttonText}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
    justifyContent: 'center',
  },
  skipText: {
    fontSize: 16,
    color: '#d78058',
    textAlign: 'right',
    marginBottom: 20,
    fontWeight: '500',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    color: '#555',
    textAlign: 'center',
    marginBottom: 30,
    lineHeight: 24,
  },
  button: {
    backgroundColor: '#d78058',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default Suiv2;
