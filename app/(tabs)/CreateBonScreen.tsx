import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Modal } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList} from '@/types';


const categories = [
  { id: 1, montant: '10 000 FCFA', motif: 'Frais d’inscription' },
  { id: 2, montant: '20 000 FCFA', motif: 'Frais de scolarité' },
  { id: 3, montant: '15 000 FCFA', motif: 'Frais de bibliothèque' },
  { id: 4, montant: '5 000 FCFA', motif: 'Autres frais' },
];

const CreateBonScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<number | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  // Fonction pour gérer la sélection de catégorie
  const handleSelectCategory = (id: number) => {
    setSelectedCategory(id);
  };

  // Fonction pour gérer la validation du bon
  const handleCreateBon = () => {
    if (selectedCategory === null) {
      Alert.alert('Erreur', 'Veuillez sélectionner une catégorie');
      return;
    }
    setModalVisible(true);
  };

  // Fonction pour confirmer le bon
  const handleConfirmBon = () => {
    setModalVisible(false);
    Alert.alert('Succès', 'Bon créé avec succès !');
    navigation.navigate('BonDetailScreen', { id: selectedCategory });
  };

  return (
    <View style={styles.container}>
      {/* Titre */}
      <Text style={styles.title}>Générer un bon</Text>

      {/* Description */}
      <Text style={styles.subtitle}>
        <Text style={styles.boldText}>Créer un nouveau bon d'autorisation de paiement</Text>
      </Text>
      <Text style={styles.description}>
        Pour créer un nouveau bon, veuillez sélectionner le montant à payer.
      </Text>

      {/* Liste des catégories */}
      {categories.map((item) => (
        <TouchableOpacity
          key={item.id}
          style={[
            styles.categoryBox,
            selectedCategory === item.id && styles.selectedCategoryBox,
          ]}
          onPress={() => handleSelectCategory(item.id)}
        >
          <Text style={styles.montant}>{item.montant}</Text>
          <Text style={styles.motif}>{item.motif}</Text>
        </TouchableOpacity>
      ))}

      {/* Bouton Créer */}
      <TouchableOpacity
        style={[
          styles.button,
          selectedCategory === null && styles.disabledButton,
        ]}
        onPress={handleCreateBon}
        disabled={selectedCategory === null}
      >
        <Text style={styles.buttonText}>Créer le bon</Text>
      </TouchableOpacity>

      {/* Modal de confirmation */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirmation</Text>
            <Text style={styles.modalText}>
              Êtes-vous sûr de vouloir créer ce bon ?
            </Text>
            <TouchableOpacity
              style={styles.modalButton}
              onPress={handleConfirmBon}
            >
              <Text style={styles.modalButtonText}>Confirmer le bon</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#444',
    marginBottom: 5,
  },
  boldText: {
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
  },
  categoryBox: {
    padding: 15,
    backgroundColor: '#e0e0e0',
    borderRadius: 8,
    marginBottom: 10,
  },
  selectedCategoryBox: {
    backgroundColor: '#d78058',
  },
  montant: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  motif: {
    fontSize: 16,
    color: '#555',
  },
  button: {
    backgroundColor: '#d78058',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    width: '80%',
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  modalText: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#d78058',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
  },
  modalButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CreateBonScreen;
