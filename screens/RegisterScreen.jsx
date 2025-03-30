import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

export default function RegisterScreen() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const [termsAccepted, setTermsAccepted] = React.useState(false);
  const navigation = useNavigation();

  const { control, handleSubmit, watch, formState: { errors, isValid } } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const password = watch("password");

  const onSubmit = (data) => {
    console.log("Datos del formulario:", data);
    // Aquí podrías agregar la lógica para enviar los datos al servidor
    Alert.alert("Registro exitoso", "Tu cuenta ha sido creada correctamente");
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/LogoBlack.png")}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Nombre completo */}
      <View style={styles.inputContainer}>
        <View style={[styles.input, errors.fullName && styles.inputError]}>
          <Ionicons name="user" size={20} color="#999" style={styles.inputIcon} />
          <Controller
            control={control}
            rules={{
              required: "Nombre completo es requerido",
              minLength: {
                value: 3,
                message: "Mínimo 3 caracteres"
              }
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputText}
                placeholder="Nombre Completo"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholderTextColor="#777"
              />
            )}
            name="fullName"
          />
        </View>
        {errors.fullName && <Text style={styles.errorText}>{errors.fullName.message}</Text>}
      </View>

      {/* Correo electrónico */}
      <View style={styles.inputContainer}>
        <View style={[styles.input, errors.email && styles.inputError]}>
          <Ionicons name="mail-outline" size={20} color="#999" style={styles.inputIcon} />
          <Controller
            control={control}
            rules={{
              required: "El correo es requerido",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Correo electrónico inválido"
              }
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputText}
                placeholder="Correo electrónico"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholderTextColor="#777"
                keyboardType="email-address"
                autoCapitalize="none"
              />
            )}
            name="email"
          />
        </View>
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
      </View>

      {/* Contraseña */}
      <View style={styles.inputContainer}>
        <View style={[styles.input, errors.password && styles.inputError]}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.inputIcon} />
          <Controller
            control={control}
            rules={{
              required: "La contraseña es requerida",
              minLength: {
                value: 6,
                message: "Mínimo 6 caracteres"
              }
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputText}
                placeholder="Contraseña"
                secureTextEntry={!showPassword}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholderTextColor="#777"
              />
            )}
            name="password"
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={20} color="#999" />
          </TouchableOpacity>
        </View>
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
      </View>

      {/* Confirmar contraseña */}
      <View style={styles.inputContainer}>
        <View style={[styles.input, errors.confirmPassword && styles.inputError]}>
          <Ionicons name="lock-closed-outline" size={20} color="#999" style={styles.inputIcon} />
          <Controller
            control={control}
            rules={{
              required: "Confirma tu contraseña",
              validate: value => value === password || "Las contraseñas no coinciden"
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.inputText}
                placeholder="Confirmar contraseña"
                secureTextEntry={!showConfirmPassword}
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                placeholderTextColor="#777"
              />
            )}
            name="confirmPassword"
          />
          <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
            <Ionicons name={showConfirmPassword ? "eye-outline" : "eye-off-outline"} size={20} color="#999" />
          </TouchableOpacity>
        </View>
        {errors.confirmPassword && <Text style={styles.errorText}>{errors.confirmPassword.message}</Text>}
      </View>

      {/* Botón de registrarse */}
      <TouchableOpacity 
        style={[styles.registerButton, !isValid && styles.disabledButton]} 
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      >
        <Text style={styles.registerButtonText}>Regístrate</Text>
      </TouchableOpacity>

      {/* Enlaces de ayuda */}
      <View style={styles.helpLinksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={styles.loginLink}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  logoContainer: {
    marginBottom: 20,
    alignItems: "center",
  },
  logo: {
    width: 220,
    height: 80,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 12,
  },
  input: {
    backgroundColor: "#F5F5F5",
    padding: 15,
    borderRadius: 12,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#DDD",
  },
  inputError: {
    borderColor: "#D42F4D",
  },
  inputIcon: {
    marginRight: 10,
    color: "#777",
  },
  inputText: {
    flex: 1,
    color: "#333",
  },
  registerButton: {
    marginTop: 20,
    backgroundColor: "#D42F4D",
    paddingVertical: 15,
    borderRadius: 25,
    width: "100%",
    alignItems: "center",
  },
  disabledButton: {
    opacity: 0.6,
  },
  registerButtonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  helpLinksContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop: 20,
    paddingHorizontal: 10,
  },
  loginLink: {
    color: "#D42F4D",
    fontSize: 14,
    fontWeight: "bold",
  },
  errorText: {
    color: "#D42F4D",
    fontSize: 12,
    marginTop: 4,
    marginLeft: 10,
  },
});