import { Image, Text, View, StyleSheet, Platform, Pressable } from 'react-native';
import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
    <View style={styles.Container}>
         <Image
          source={require('@/assets/images/student 1.png')}
          style={styles.reactLogo}
        />
          <Text>Unikin App</Text>
          <View style={styles.overLay}/>
          <View style={styles.text3}>
            <Text style={{fontSize: 50, color: 'white'}}>Student</Text>
            <Text style={{fontSize: 50, color: 'white'}}>PORTAL</Text>
          </View>
        </View>
        <View style={styles.Text1}>
          <Text style={styles.text2}>Plusque facile maintenant de </Text>
          <Text style={styles.text2}>Payer ses frais académiques </Text>
          <Pressable style={styles.bouton}>
            <Text>Commencer</Text>
          </Pressable>
        </View>
        
        </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 0,
    top: -50,
    left: 'auto',
    overflow: 'hidden',
    height: 200,
    
    
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    display: 'flex',
    flex: 1,
    height: 800,
    width: 351,
    top: 50,
    left: 'auto',
    position: 'relative',
   
    
    
    
  },
  overLay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(215, 128, 88, 0.8)',
    top: 0,
    left: 0
  },

  Text1: {
    paddingTop: 50,
    flex: 1,
    alignItems: 'center', 
    backgroundColor: 'white', 
    position: 'absolute', 
    height: '35%',
    width: '100%',
    bottom: 0,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35
  },
  text2: {
    fontSize: 25
  },
  bouton: {borderRadius: 10,
        width: '80%',
        height: '20%',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor : 'rgba(53, 26, 208, 0.5)',
        color: 'white',
        bottom: -100,

      }, 
      text3: {
        flex: 1,
        flexDirection: 'column',
        position: 'absolute',
        height: '50%',
        top: 450,
        
      },


});
