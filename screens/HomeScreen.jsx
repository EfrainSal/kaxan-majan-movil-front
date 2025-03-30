import React from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "1",
    name: "Salon de Eventos Los Abuelos",
    capacity: "100 Personas",
    categories: "Fiestas · Conferencias · Eventos",
    price: "$500",
    image: require("../assets/salonJunta.jpg"), 
  },
  {
    id: "2",
    name: "Casa de Playa Cancún",
    capacity: "200 Personas",
    categories: "Bodas · Eventos Privados",
    price: "$1,200",
    image: require("../assets/eventosNith.jpg"),
  },
];

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleCardPress = (item) => {
    navigation.navigate("LocalsScreen", { item });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Kaxan Majan</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleCardPress(item)}>
            <View style={styles.card}>
              <Image source={item.image} style={styles.image} />
              <View style={styles.info}>
                <Text style={styles.title}>{item.name}</Text>
                <Text style={styles.details}>{item.capacity}</Text>
                <Text style={styles.categories}>{item.categories}</Text>
                <Text style={styles.price}>{item.price}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 20,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
  },
  info: {
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
  details: {
    fontSize: 14,
    color: "#666",
  },
  categories: {
    fontSize: 12,
    color: "#888",
  },
  price: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default HomeScreen;