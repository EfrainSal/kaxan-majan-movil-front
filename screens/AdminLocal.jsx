import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const locales = [
  { id: '1', name: 'Salon Leona', description: 'Un salon para todo tipo de fiestas y reuniones', image: require('../assets/salonJunta.jpg') },
  { id: '2', name: 'Salon Leona', description: 'Un salon para todo tipo de fiestas y reuniones', image: require('../assets/eventosNith.jpg') },
];

const AdminLocal = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Locales</Text>
      <TouchableOpacity style={styles.publishButton}>
        <Ionicons name="home-outline" size={16} color="white" />
        <Text style={styles.publishText}> Publicar</Text>
      </TouchableOpacity>
      <Text style={styles.subtitle}>Administra Tus Locales</Text>
      <FlatList
        data={locales}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={require('../assets/salonJunta.jpg')} style={styles.image} />
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardDescription} numberOfLines={2}>{item.description}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff', paddingTop: 50 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  publishButton: {
    flexDirection: 'row',
    backgroundColor: '#E91E63',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  publishText: { color: 'white', fontSize: 14, fontWeight: 'bold' },
  card: {
    backgroundColor: 'white',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  image: { width: '100%', height: 150 },
  cardContent: { padding: 10 },
  cardTitle: { fontSize: 18, fontWeight: 'bold' },
  cardDescription: { fontSize: 14, color: 'gray' },
});

export default AdminLocal;
