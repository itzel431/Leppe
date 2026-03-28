import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>¡Bienvenido a Leppe!</Text>
      <Text style={styles.subtitle}>Innovación en Inclusión y Comunicación</Text>
      
      <TouchableOpacity style={styles.mainButton}>
        <Text style={styles.buttonText}>Comenzar Traducción</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20, backgroundColor: '#FFF' },
  welcome: { fontSize: 28, fontWeight: 'bold', color: '#F06292', marginBottom: 10 }, // Color Leppe
  subtitle: { fontSize: 16, color: '#666', textAlign: 'center', marginBottom: 30 },
  mainButton: { backgroundColor: '#F06292', padding: 15, borderRadius: 12, width: '100%', alignItems: 'center' },
  buttonText: { color: '#FFF', fontSize: 18, fontWeight: 'bold' }
});