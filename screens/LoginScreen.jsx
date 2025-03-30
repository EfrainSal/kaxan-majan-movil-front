import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

export default function LoginScreen() {
  const [showPassword, setShowPassword] = React.useState(false);
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { isValid, errors } } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: ""
    }
  });

  // Función para manejar el inicio de sesión
  const onSubmit = (data) => {
    // Aquí podrías agregar autenticación, etc.
    console.log(data);
    navigation.navigate("Home");
  };

  // Función para ir a la pantalla de registro
  const handleRegister = () => {
    navigation.navigate("Register");
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

      {/* Botón de Iniciar Sesión */}
      <TouchableOpacity 
        style={[styles.registerButton, !isValid && styles.disabledButton]} 
        onPress={handleSubmit(onSubmit)}
        disabled={!isValid}
      >
        <Text style={styles.registerButtonText}>Iniciar sesión</Text>
      </TouchableOpacity>

      {/* Enlaces de ayuda */}
      <View style={styles.helpLinksContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("ForgotPassword")}>
          <Text style={styles.contactLink}>¿Olvidaste tu contraseña?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleRegister}>
          <Text style={styles.loginLink}>Regístrate</Text>
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
  contactLink: {
    color: "#666",
    fontSize: 14,
  },
  loginLink: {
    color: "#4B89DC",
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