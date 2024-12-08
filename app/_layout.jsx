import { View, Text } from "react-native";
import React, { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { Stack } from "expo-router";
import { useFonts } from "expo-font";
import { SoundProvider } from "../context/soundContext";

const RootLayout = () => {
  SplashScreen.preventAutoHideAsync();
  const [fontLoaded] = useFonts({
    PBlack: require("../assets/fonts/Poppins-Black.ttf"),
    PBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PSemi: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PRegular: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontLoaded]);

  if (!fontLoaded) return null;
  return (
    <SoundProvider>
      <Stack
        onLayout={onLayoutRootView}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </SoundProvider>
  );
};

export default RootLayout;
