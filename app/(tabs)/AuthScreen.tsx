import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomButton from '@/components/CustomButton';
import type { NavigationProps } from '@/types';
import { useNavigation } from '@react-navigation/native';
import ConnectedHomeScreen from './ConnectedHomeScreen';


const AuthScreen = () => {
  const navigation = useNavigation<NavigationProps>();
  const [matricule, setMatricule] = useState('');
  const [universite, setUniversite] = useState('');

  const handleLogin = () => {
    if (!matricule || !universite) {
      alert('Veuillez entrer vos informations !');
      return;
    }
    // TODO : Ajouter la logique de vérification des identifiants
    alert('Connexion réussie !');
    //navigation.navigate('ConnectedHomeScreen');
    navigation.navigate('Connected');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Authentification</Text>
      <TextInput 
        style={styles.input}
        placeholder="Numéro Matricule"
        onChangeText={setMatricule}
        value={matricule}
      />
      <TextInput 
        style={styles.input}
        placeholder="Nom de l'université"
        onChangeText={setUniversite}
        value={universite}
      />
      <CustomButton title="Se connecter" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
});

export default AuthScreen;
