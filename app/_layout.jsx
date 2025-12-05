import React, { useEffect } from "react";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { SoundProvider } from "../context/soundContext";
import { AnswerProvider } from "../context/answerContext";

SplashScreen.preventAutoHideAsync().catch(() => {});

const RootLayout = () => {
  const [fontsLoaded, fontError] = useFonts({
    PBlack: require("../assets/fonts/Poppins-Black.ttf"),
    PBold: require("../assets/fonts/Poppins-Bold.ttf"),
    PSemi: require("../assets/fonts/Poppins-SemiBold.ttf"),
    PMedium: require("../assets/fonts/Poppins-Medium.ttf"),
    PRegular: require("../assets/fonts/Poppins-Regular.ttf"),
  });

  useEffect(() => {
    if (fontError) {
      console.warn("Error loading fonts:", fontError);
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontError]);

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().catch(() => {});
    }
  }, [fontsLoaded]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SoundProvider>
      <AnswerProvider>
        <Stack
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen
            name="modal"
            options={{
              presentation: "modal",
            }}
          />
        </Stack>
      </AnswerProvider>
    </SoundProvider>
  );
};

export default RootLayout;
