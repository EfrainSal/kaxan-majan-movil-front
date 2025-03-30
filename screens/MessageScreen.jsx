import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MessageScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.header}>Kaxan Majan</Text>
      <View style={styles.messageContainer}>
        <Text style={styles.userName}>Luis</Text>
        <Text style={styles.message}>Hola, Recibit iu reservacion</Text>
      </View>
      <View style={styles.messageContainer}>
        <Text style={styles.userName}>Locos</Text>
        <Text style={styles.message}>Hola, Recibit iu reservacion</Text>
      </View>
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
  messageContainer: {
    marginBottom: 16,
    padding: 12,
    backgroundColor: "#ffffff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  message: {
    fontSize: 14,
    color: "#333333",
  },
});

export default MessageScreen;