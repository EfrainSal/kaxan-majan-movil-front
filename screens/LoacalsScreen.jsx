import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import MapView, { Marker, Circle } from "react-native-maps";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons, AntDesign } from "@expo/vector-icons";

const SalonLeona = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Botón de Retroceso */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="white" />
      </TouchableOpacity>

      {/* Imagen Principal */}
      <Image source={require("../assets/salonJunta.jpg")} style={styles.mainImage} />

      {/* Información del local */}
      <View style={styles.content}>
        <Text style={styles.title}>Salon Leona</Text>
        <Text style={styles.subtitle}>Calle Bacalar, colonia San Ignacio</Text>

        {/* Precio y botón */}
        <View style={styles.priceContainer}>
          <View>
            <Text style={styles.price}>$500</Text>
            <Text style={styles.capacity}>100 personas</Text>
          </View>
          <TouchableOpacity style={styles.reserveButton}>
            <Text style={styles.reserveText}>Reservar</Text>
          </TouchableOpacity>
        </View>

        {/* Características */}
        <View style={styles.features}>
          <View style={styles.featureItem}>
            <MaterialIcons name="location-on" size={20} color="gray" />
            <Text style={styles.featureText}>Av. Kabah y Portillo</Text>
          </View>
          <View style={styles.featureItem}>
            <MaterialIcons name="cancel" size={20} color="gray" />
            <Text style={styles.featureText}>Cancelación con tiempo anticipado</Text>
          </View>
        </View>

        {/* Descripción */}
        <Text style={styles.sectionTitle}>Salon Leona</Text>
        <Text style={styles.description}>
          Es un espacio muy bonito, perfecto para eventos de todo tipo. Cuenta con una capacidad de 100 personas y un con un precion muy 
          accesible. ¡Reserva ya!
        </Text>

        {/* Tipos de eventos */}
        <Text style={styles.sectionTitle}>Tipos de eventos para hacer</Text>
        <View style={styles.eventGrid}>
          {[
            "Reuniones",
            "Conferencias",
            "Fiestas",
            "Bodas",
            "Cumpleaños",
            "Asambleas",
            "Fiestas privadas",
            "Espectáculos",
            "Facilidades",
            "Conciertos",
            "Competencias",
          ].map((event, index) => (
            <View key={index} style={styles.checkboxContainer}>
              <View style={styles.checkbox} />
              <Text style={styles.checkboxLabel}>{event}</Text>
            </View>
          ))}
        </View>

        {/* Mapa */}
        <Text style={styles.sectionTitle}>Ubicación</Text>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 21.1619,
            longitude: -86.8515,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}
        >
          <Marker coordinate={{ latitude: 21.1619, longitude: -86.8515 }} />
          <Circle center={{ latitude: 21.1619, longitude: -86.8515 }} radius={500} fillColor="rgba(255, 0, 0, 0.2)" />
        </MapView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  backButton: {
    position: "absolute",
    top: 40,
    left: 16,
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 10,
    borderRadius: 20,
  },
  mainImage: { width: "100%", height: 200 },
  content: { padding: 16 },
  title: { fontSize: 22, fontWeight: "bold" },
  subtitle: { fontSize: 14, color: "gray", marginBottom: 10 },
  priceContainer: { flexDirection: "row", justifyContent: "space-between", alignItems: "center", marginBottom: 16 },
  price: { fontSize: 20, fontWeight: "bold" },
  capacity: { color: "gray" },
  reserveButton: { backgroundColor: "#E63946", padding: 10, borderRadius: 8 },
  reserveText: { color: "#fff", fontWeight: "bold" },
  features: { marginBottom: 16 },
  featureItem: { flexDirection: "row", alignItems: "center", marginBottom: 6 },
  featureText: { marginLeft: 6, color: "gray" },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#E63946", marginTop: 20, marginBottom: 8 },
  description: { color: "gray", fontSize: 14, marginBottom: 12 },
  eventGrid: { flexDirection: "row", flexWrap: "wrap", marginBottom: 20 },
  checkboxContainer: { flexDirection: "row", alignItems: "center", width: "50%", marginBottom: 6 },
  checkbox: { width: 16, height: 16, borderWidth: 1, borderColor: "gray", marginRight: 6, borderRadius: 3 },
  checkboxLabel: { color: "gray" },
  map: { width: "100%", height: 200, borderRadius: 10, marginTop: 10 },
});

export default SalonLeona;
