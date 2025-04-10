import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';

const ProfilScreen = () => {
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('john.doe@example.com');
  const [phone, setPhone] = useState('1234567890');
  const [isEditing, setIsEditing] = useState(false);

  // Fonction pour sauvegarder les modifications
  const handleSave = () => {
    if (!name || !email || !phone) {
      Alert.alert('Erreur', 'Tous les champs sont requis');
      return;
    }
    setIsEditing(false);
    Alert.alert('Succès', 'Profil mis à jour avec succès !');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Photo de profil */}
      <Image 
        source={require('@/assets/images/student 1.png')} 
        style={styles.profileImage}
      />
      
      {/* Champ Nom */}
      <Text style={styles.label}>Nom complet</Text>
      <TextInput 
        style={styles.input}
        value={name}
        onChangeText={setName}
        editable={isEditing}
      />

      {/* Champ Email */}
      <Text style={styles.label}>Email</Text>
      <TextInput 
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        editable={isEditing}
        keyboardType="email-address"
      />

      {/* Champ Téléphone */}
      <Text style={styles.label}>Téléphone</Text>
      <TextInput 
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        editable={isEditing}
        keyboardType="phone-pad"
      />

      {/* Bouton Modifier / Enregistrer */}
      <TouchableOpacity 
        style={styles.button} 
        onPress={isEditing ? handleSave : () => setIsEditing(true)}
      >
        <Text style={styles.buttonText}>
          {isEditing ? 'Enregistrer' : 'Modifier le profil'}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
    alignItems: 'center',
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  label: {
    alignSelf: 'flex-start',
    fontSize: 16,
    fontWeight: '500',
    color: '#555',
    marginBottom: 5,
  },
  input: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    backgroundColor: '#d78058',
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfilScreen;
