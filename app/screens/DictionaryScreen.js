import React from 'react';
import { View, Text, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import signsData from '../data/signs.json'; // Importamos las señas

export default function DictionaryScreen() {
  const todasLasSeñas = Object.values(signsData.categorias).flat();

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Diccionario LSM</Text>
      <FlatList
        data={todasLasSeñas}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.signName}>{item.nombre}</Text>
            <Text style={styles.signType}>{item.tipo}</Text>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#F06292', marginBottom: 20 },
  card: { 
    padding: 15, 
    borderBottomWidth: 1, 
    borderBottomColor: '#EEE',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  signName: { fontSize: 18, color: '#1A1A1B' },
  signType: { color: '#888', fontStyle: 'italic' }
});