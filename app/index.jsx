import { View, Text, Image, StatusBar } from "react-native";
import React, { useEffect, useState } from "react";
import { Link } from "expo-router";
import * as ScreenOrientation from "expo-screen-orientation";
import * as NavigationBar from "expo-navigation-bar";

const Index = () => {
  const [opacity, setOpacity] = useState(1);

  const changeOrientation = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
    );
  };

  const navigationConfig = async () => {
    NavigationBar.setVisibilityAsync("hidden");
  };

  useEffect(() => {
    changeOrientation();
    navigationConfig();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setOpacity((prev) => (prev === 1 ? 0 : 1));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <View
      style={{
        height: "100%",
      }}
    >
      <StatusBar hidden={true} />
      <Link href={"/mainMenu/begin"} replace>
        <Image
          source={require("../assets/bg/start_page.png")}
          resizeMode="cover"
        />
      </Link>
      <View
        style={{
          position: "absolute",
          bottom: 30,
          width: "100%",
        }}
      >
        <Text
          style={{
            opacity: opacity,
            textAlign: "center",
            transition: "opacity 1s",
            fontFamily: "PMedium",
          }}
        >
          Klik untuk melanjutkan
        </Text>
      </View>
    </View>
  );
};

export default Index;
