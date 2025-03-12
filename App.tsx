import React from "react";
import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import Home from './src/screens/Home';
import { Loading } from "./src/components/loading";
import { StatusBar, View } from "react-native";

export default function App() {
  const [fontLoaded] = useFonts({
    Inter_400Regular,
    Inter_700Bold
  });

  if (!fontLoaded) {
    return <Loading />
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar backgroundColor="#0D0D0D" barStyle="light-content" />
      <Home />
    </View>
  )
}