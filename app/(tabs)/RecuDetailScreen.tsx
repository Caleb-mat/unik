import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '@/components/CustomButton';

const RecuDetailScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Détail du bon</Text>
      <Text>Montant: 50,000 XOF</Text>
      <Text>Université: XYZ</Text>
      <Text>Nom: John Doe</Text>
      <Text>Matricule: 12345678</Text>
      <Text>Département: Informatique</Text>
      <Text>Faculté: Sciences</Text>

      {/* Bouton Supprimer */}
      <Pressable onPress={() => {}} style={styles.deleteButton}>
        <Text style={styles.deleteText}>Supprimer bon</Text>
      </Pressable>

      {/* Bouton Payer */}
      <CustomButton title="Payer le bon" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  deleteButton: {
    marginTop: 20,
    alignItems: 'center',
  },
  deleteText: {
    color: '#d78058',
    fontSize: 16,
  }
});

export default RecuDetailScreen;
