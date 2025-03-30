import React, { useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

const LoadingScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.replace("Login");
    }, 2000); // Simula carga de datos
  }, []);

  return (
    <View style={styles.container}>
        <Image source={require("../assets/logo.png")} style={styles.image}/>
      <Text style={styles.text}>kaxan majan</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D42F4D", // Cambia el color de fondo
  },
  text: {
    fontSize: 24, // Tamaño de la fuente
    color: "#FFFFFF", // Color del texto (blanco)
    fontWeight: "bold", // Texto en negrita
  },
  image: {
    width: "60%",
    height: 200,
  },
});

export default LoadingScreen;