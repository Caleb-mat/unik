import React from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProps } from '../../types';
import CustomButton from '@/components/CustomButton';

const Suiv3 = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      {/* Texte "Sauter" cliquable */}
      <Pressable onPress={() => navigation.navigate('AuthScreen')}>
        <Text style={styles.skipText}>Sauter</Text>
      </Pressable>

      {/* Image de scan de QR code */}
      <Image 
        source={require('@/assets/images/scan 1.png')} // ✅ Place une image adaptée dans le dossier assets/images
        style={styles.image}
        resizeMode="contain"
      />

      <View style={styles.content}>
        <Text style={styles.title}>
          Accéder aux salles par un simple scan de profil
        </Text>
        <Text style={styles.description}>
          Pas besoin des bordereaux pour confirmer votre paiement, faites scanner votre profil par le surveillant, le tour est fait !
        </Text>

        {/* Bouton "Commencer" */}
        <CustomButton 
          title="Commencer" 
          onPress={() => navigation.navigate('AuthScreen')} 
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
  image: {
    width: '80%',
    height: 200,
    alignSelf: 'center',
    marginBottom: 20,
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

export default Suiv3;
