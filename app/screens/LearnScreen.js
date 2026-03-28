import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

export default function LearnScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Módulo de Aprendizaje</Text>
      <View style={styles.lessonCard}>
        <Text style={styles.lessonTitle}>Lección 1: Saludos Básicos</Text>
        <Text style={styles.description}>Aprende a decir Hola y Buenos Días en LSM.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F9FAFB', padding: 20 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#1A1A1B', marginBottom: 20 },
  lessonCard: { backgroundColor: '#FFF', padding: 20, borderRadius: 15, borderLeftWidth: 5, borderLeftColor: '#F06292' }
});