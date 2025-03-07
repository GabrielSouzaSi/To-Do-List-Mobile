import React from "react";
import { View, ActivityIndicator } from "react-native";
import theme from "../../styles/theme";

export function Loading() {
  return (
    <View style={{position: "absolute", justifyContent: "center", alignItems: "center", top: 0, right: 0, bottom: 0, left: 0, backgroundColor: theme.COLORS.GRAY[700]}} >
      <ActivityIndicator size="large" color={theme.COLORS.PURPLE_DARK} />
    </View>
  );
}