import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NavigationProps } from '../../types';
import CustomButton from '@/components/CustomButton';

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/images/student 1.png')} 
        style={styles.image} 
        resizeMode="cover"
      />
      <View style={styles.overLay}>
      <Text style={[styles.title, {fontSize: 34}]}>Student {'\n'} 
        PORTAL</Text>
      <View style={styles.Text1} >
      <Text style={[styles.title, {color: '#000000'}]}>Plusque facile maintenant de
      payer ses frais académiques</Text>
      <View> 
      <CustomButton title="Accéder à l'authentification" onPress={() => navigation.navigate('suiv1')} boutonStyle={styles.button} />
      </View>
      </View>
      </View>
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
  image: {
    display: 'flex',
    flex: 1,
    height: 800,
    width: 351,
    top: 50,
    left: 'auto',
    position: 'relative',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 150,
    color: '#ffffff',
  },
  button: {
    backgroundColor: 'rgba(58, 27, 170,1)',
    bottom: 100,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  overLay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(215, 128, 88, 0.8)',
    left: 0,
    top: 0,
    justifyContent: 'center', // Aligne verticalement vers le bas
    alignItems: 'center', 
    paddingBottom: -100
  },
  Text1: {
    //paddingTop: 50,
    flex: 1,
    alignItems: 'center', 
    backgroundColor: 'white', 
    position: 'absolute', 
    height: '45%',
    width: '100%',
    bottom: 0,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35
  },
});

export default HomeScreen;
