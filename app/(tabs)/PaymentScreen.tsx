import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, StyleSheet, FlatList, ActivityIndicator, Alert } from 'react-native';
import api from '../api'
import { Payment } from '@/types';
import { useStripe } from '@stripe/stripe-react-native';
import Slider from '@react-native-community/slider';
import StripeProvider from '@/components/stripe-provider';
import CheckoutForm from '@/components/checkout-form';
import axios from 'axios';



const PaymentScreen = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<string | null>(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [payments, setPayments] = useState<Payment[]>([]);
  const [loading, setLoading] = useState(true)
  const { initPaymentSheet, presentPaymentSheet } = useStripe();
  const fetchPaymentIntent = async ()=>{
    const response = await fetch('http://192.168.226.252:3333/payments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        amount: 500,
        currency: '$',
        paymentMethodId: 'Carte Visa'
      })
    })

    const { clientSecret } = await response.json()
    const { error } = await initPaymentSheet({
      paymentIntentClientSecret: clientSecret,
      merchantDisplayName: 'Unikin store'

    })

    if(!error){
      const { error: paymentError } = await presentPaymentSheet();
      if(paymentError){
        Alert.alert(`Erreur: ${paymentError.message}`)
      }else{
        Alert.alert('paiement réussi !')
      }
    }
  } 

  useEffect(()=>{
    const fetchPayments = async ()=>{
      try {
        const response = await api.get('/payments');
        //const response = await axios.get('http://192.168.226.252:50627/payments');
        setPayments(response.data)
      } catch (error) {
        console.error('Erreur lors de la récupération des paiements :', error);
      }
      finally {
        setLoading(false);
      }

    }

    fetchPayments();

  }, []);

  if (loading) return <ActivityIndicator size="large" color="#0000ff" />;

  const handlePaymentMethod = (method: string) => {
    setSelectedPaymentMethod(method);
    setModalVisible(true);
  };

  const handleConfirmPayment = () => {
    console.log(`Paiement avec : ${selectedPaymentMethod}`);
    setModalVisible(false);
    // TODO: Faire l'appel à l'API ici après confirmation
    fetchPaymentIntent;
  };

  return (
    <StripeProvider>
    <View style={styles.container}>
      <Slider
         style={{width: 200, height: 40}}
         minimumValue={0}
         maximumValue={1}
          />
      <CheckoutForm amount={1000}/>
      {/* ✅ Titre */}
      <Text style={styles.title}>Moyen de paiement</Text>

      {/* ✅ Options de paiement */}

      <View style={styles.paymentMethods}>
        {['Orange Money', 'Mpesa', 'Airtel Money', 'Carte Visa', 'PayPal'].map((method) => (
          <TouchableOpacity
            key={method}
            style={styles.paymentOption}
            onPress={() => handlePaymentMethod(method)}
          >
            <Text style={styles.paymentText}>{method}</Text>
          </TouchableOpacity>
        ))}

    <View>
      <FlatList
        data={payments}
        keyExtractor={(item) => item.id.toString()}
        horizontal= {true}
        renderItem={({ item }) => (
          <View style={styles.container2}>
            <Text style={styles.title2}>Détails paiements</Text>
            <Text>Nom : {item.studentName}</Text>
            <Text>Montant : {item.amount} $</Text>
            <Text>Motif : {item.paymentReason}</Text>
            <Text>Moyen : {item.paymentMethod}</Text>
          </View>
         
        )}
      />
    </View>

      </View>

      {/* ✅ Modal de confirmation */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Confirmation de paiement</Text>

            {/* ✅ Infos paiement */}
            <Text>Nom étudiant : Jean Dupont</Text>
            <Text>Motif : Frais d'inscription</Text>
            <Text>Montant : 50 000 FCFA</Text>
            <Text>Numéro du bon : 123456789</Text>
            <Text>Source : {selectedPaymentMethod}</Text>

            {/* ✅ Numéro de téléphone (si Mobile Money) */}
            {(selectedPaymentMethod === 'Orange Money' || 
              selectedPaymentMethod === 'Mpesa' || 
              selectedPaymentMethod === 'Airtel Money') && (
              <TextInput
                style={styles.input}
                placeholder="Entrez votre numéro de téléphone"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
              />
            )}

            {/* ✅ Boutons de confirmation */}
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.cancelButton} onPress={() => setModalVisible(false)}>
                <Text style={styles.buttonText}>Annuler</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.confirmButton} onPress={handleConfirmPayment}>
                <Text style={styles.buttonText}>OK, Payer</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
    
    </StripeProvider>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#3A1BAA',
    textAlign: 'center',
  },
  paymentMethods: {
    marginTop: 20,
  },
  paymentOption: {
    backgroundColor: '#E0E0E0',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  paymentText: {
    fontSize: 18,
    color: '#3A1BAA',
    fontWeight: '500',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 20,
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#3A1BAA',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    backgroundColor: '#E57373',
    padding: 10,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  confirmButton: {
    backgroundColor: '#3A1BAA',
    padding: 10,
    borderRadius: 8,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  container2: {
    padding: 20,
 
  },
  
  title2: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default PaymentScreen;
