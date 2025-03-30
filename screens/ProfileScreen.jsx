import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome5";

const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Nombre del usuario */}
      <Text style={styles.userName}>John Lamar Mendez</Text>

      {/* Configuración */}
      <Text style={styles.sectionTitle}>Configuración</Text>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("LocalesAdmin")}>
        <View style={styles.optionContent}>
          <Icon name="user-circle" size={20} color="black" />
          <Text style={styles.optionText}>Personal information</Text>
        </View>
        <Icon name="chevron-right" size={14} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("RegisterLocal")}>
        <Text style={styles.optionText}>Administración de locales</Text>
        <Icon name="chevron-right" size={14} color="gray" />
      </TouchableOpacity>

      {/* Legal */}
      <Text style={styles.sectionTitle}>Legal</Text>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("TerminosServicios")}>
        <View style={styles.optionContent}>
          <Icon name="book" size={20} color="black" />
          <Text style={styles.optionText}>Términos de servicios</Text>
        </View>
        <Icon name="chevron-right" size={14} color="gray" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.option} onPress={() => navigation.navigate("TerminosSeguridad")}>
        <View style={styles.optionContent}>
          <Icon name="book" size={20} color="black" />
          <Text style={styles.optionText}>Términos de seguridad</Text>
        </View>
        <Icon name="chevron-right" size={14} color="gray" />
      </TouchableOpacity>

      {/* Botón de cerrar sesión */}
      <TouchableOpacity style={styles.logoutButton} onPress={() => Component(LoginScreen)}>
        <Text style={styles.logoutText}>Cerrar la sesión</Text>
      </TouchableOpacity>
    </View>
  );
};

// 🎨 Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 16,
    paddingTop: 50,
  },
  userName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
  },
  option: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    marginLeft: 10,
  },
  logoutButton: {
    backgroundColor: "#D7263D",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 30,
  },
  logoutText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default ProfileScreen;
