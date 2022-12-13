import { NavigationContainer, StackActions } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import {  Text, SafeAreaView } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { Discover, HomeScreen, ItemScreen } from "./screens/";

export default function App() {
  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
          
        </Stack.Navigator>
      </NavigationContainer>
   </TailwindProvider>
  );
}

