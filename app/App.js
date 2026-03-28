import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import { Camera as LucideCamera, BookOpen, Settings } from 'lucide-react-native';

// Importamos tus nuevas pantallas
import DictionaryScreen from './screens/DictionaryScreen'; 

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [currentScreen, setCurrentScreen] = useState('traductor'); // Estado para navegar

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  if (hasPermission === null) return <View style={styles.container} />;
  
  // Función para renderizar la pantalla actual
  const renderContent = () => {
    if (currentScreen === 'diccionario') {
      return <DictionaryScreen />;
    }
    
    return (
      <View style={styles.cameraContainer}>
        <Camera style={styles.camera} type={Camera.Constants.Type.front}>
          <View style={styles.overlay}>
            <Text style={styles.statusText}>Enfoca tu mano para traducir LSM</Text>
          </View>
        </Camera>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.logoText}>Leppe</Text>
      </View>

      {renderContent()}

      {/* Menú de Navegación con tus colores */}
      <View style={styles.navBar}>
        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setCurrentScreen('traductor')}
        >
          <LucideCamera color={currentScreen === 'traductor' ? "#F06292" : "#1A1A1B"} size={28} />
          <Text style={[styles.navText, currentScreen === 'traductor' && styles.navTextActive]}>Traductor</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.navItem} 
          onPress={() => setCurrentScreen('diccionario')}
        >
          <BookOpen color={currentScreen === 'diccionario' ? "#F06292" : "#1A1A1B"} size={28} />
          <Text style={[styles.navText, currentScreen === 'diccionario' && styles.navTextActive]}>Diccionario</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: { padding: 15, alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#EEE' },
  logoText: { fontSize: 24, fontWeight: 'bold', color: '#F06292' },
  cameraContainer: { flex: 1, margin: 10, borderRadius: 25, overflow: 'hidden' },
  camera: { flex: 1 },
  overlay: { flex: 1, justifyContent: 'flex-end', padding: 20 },
  statusText: { color: 'white', fontSize: 16, textAlign: 'center', backgroundColor: 'rgba(240, 98, 146, 0.7)', padding: 10, borderRadius: 15 },
  navBar: { flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 10, borderTopWidth: 1, borderTopColor: '#EEE' },
  navItem: { alignItems: 'center' },
  navText: { color: '#1A1A1B', fontSize: 10, marginTop: 4 },
  navTextActive: { color: '#F06292', fontWeight: 'bold' }
});