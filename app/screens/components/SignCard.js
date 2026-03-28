import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SignCard({ nombre, tipo }) {
  return (
    <View style={styles.card}>
      <View>
        <Text style={styles.name}>{nombre}</Text>
        <Text style={styles.type}>{tipo}</Text>
      </View>
      <View style={styles.circle} /> 
    </View>
  );
}

const styles = StyleSheet.create({
  card: { backgroundColor: '#FFF', padding: 15, borderRadius: 12, marginBottom: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', elevation: 2 },
  name: { fontSize: 18, fontWeight: '600', color: '#1A1A1B' },
  type: { fontSize: 14, color: '#F06292' }, // Color Leppe
  circle: { width: 40, height: 40, borderRadius: 20, backgroundColor: '#FEEBEE' }
});