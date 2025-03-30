import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoadingScreen from "../screens/LoadingScreen";
import LoginScreen from "../screens/LoginScreen";
import BottomTabs from "./ButtonTabs";
import LocalsScreen from "../screens/LoacalsScreen";
import RegisterScreen from "../screens/RegisterScreen";
import RegisterLocalScreen from "../screens/RegisterLocalScreen";
import AdminLocal from "../screens/AdminLocal";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Loading" component={LoadingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="LocalsScreen" component={LocalsScreen} />
        <Stack.Screen name="RegisterLocal" component={RegisterLocalScreen} />
        <Stack.Screen name="LocalesAdmin" component={AdminLocal} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
