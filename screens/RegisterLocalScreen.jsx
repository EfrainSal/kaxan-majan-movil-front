import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

const RegisterLocalScreen = () => {
  const [name, setName] = useState('');
  const [capacity, setCapacity] = useState('');
  const [price, setPrice] = useState('');
  const [address, setAddress] = useState('');
  const [description, setDescription] = useState('');
  const [marker, setMarker] = useState(null);

  const handleMapPress = (event) => {
    setMarker(event.nativeEvent.coordinate);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Agregar un Local</Text>

      <Text style={styles.label}>Nombre del local</Text>
      <TextInput style={styles.input} placeholder="Agrega el nombre de tu local" value={name} onChangeText={setName} />

      <View style={styles.row}>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Capacidad</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={capacity} onChangeText={setCapacity} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Precio</Text>
          <TextInput style={styles.input} keyboardType="numeric" value={price} onChangeText={setPrice} />
        </View>
      </View>

      <Text style={styles.label}>Ubicación del Local</Text>
      <MapView style={styles.map} initialRegion={{ latitude: -86.85069375282978 , longitude: 21.16329025221034, latitudeDelta: 0.05, longitudeDelta: 0.05 }} onPress={handleMapPress}>
        {marker && <Marker coordinate={marker} />}
      </MapView>

      <Text style={styles.label}>Dirección del Local</Text>
      <TextInput style={styles.input} placeholder="Agrega la dirección de tu local" value={address} onChangeText={setAddress} />

      <Text style={styles.label}>Describe tu Local</Text>
      <TextInput style={[styles.input, styles.textArea]} multiline value={description} onChangeText={setDescription} />

      <Text style={styles.label}>Introduce fotos del Local</Text>
      <View style={styles.imageContainer}>
        <Image source={require('../assets/playa.jpg')} style={styles.image} />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Publicar</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, paddingTop: 50 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 10 },
  label: { fontSize: 16, marginTop: 10 },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginTop: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  inputContainer: { flex: 1, marginRight: 10 },
  map: { width: '100%', height: 200, borderRadius: 5, marginTop: 10 },
  textArea: { height: 80 },
  imageContainer: { justifyContent: 'center', alignItems: 'center', height: 100, backgroundColor: '#eee', borderRadius: 5, marginTop: 10 },
  image: { width: 50, height: 50 },
  button: { backgroundColor: '#E91E63', padding: 15, borderRadius: 5, alignItems: 'center', marginTop: 20 },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});

export default RegisterLocalScreen;
