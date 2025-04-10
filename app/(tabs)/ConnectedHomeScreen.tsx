import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProps } from '../../types';
import CustomButton from '@/components/CustomButton';
import { Ionicons } from '@expo/vector-icons';

const bons = [
  { id: '1', title: 'Bon 1', montant: '50,000 XOF' },
  { id: '2', title: 'Bon 2', montant: '75,000 XOF' }
];

const recus = [
  { id: '1', title: 'Reçu 1', montant: '50,000 XOF' },
  { id: '2', title: 'Reçu 2', montant: '75,000 XOF' }
];

const ConnectedHomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  const renderBon = ({ item }: any) => (
    <Pressable style={styles.card} onPress={() => navigation.navigate('BonDetailScreen', { id: item.id })}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardAmount}>{item.montant}</Text>
    </Pressable>
  );

  const renderRecu = ({ item }: any) => (
    <Pressable style={styles.card} onPress={() => navigation.navigate('RecuDetailScreen', { id: item.id })}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardAmount}>{item.montant}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image 
          source={require('@/assets/images/student 1.png')} 
          style={styles.profileImage}
        />
        <Text style={styles.userName}>John Doe</Text>
        <Ionicons name="notifications-outline" size={24} color="black" style={styles.notificationIcon} />
      </View>

      {/* Image principale */}
      <Image 
        source={require('@/assets/images/student 1.png')} 
        style={styles.bannerImage}
        resizeMode="cover"
      />

      {/* Section Vos Bons */}
      <Text style={styles.sectionTitle}>Vos Bons</Text>
      <FlatList 
        data={bons}
        renderItem={renderBon}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
      />

      {/* Section Vos Reçus */}
      <Text style={styles.sectionTitle}>Vos Reçus</Text>
      <FlatList 
        data={recus}
        renderItem={renderRecu}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    paddingTop: 50,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    flex: 1,
  },
  notificationIcon: {
    marginLeft: 'auto',
  },
  bannerImage: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    marginBottom: 10,
  },
  flatList: {
    paddingHorizontal: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginRight: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  cardAmount: {
    fontSize: 14,
    color: '#555',
  }
});

export default ConnectedHomeScreen;
