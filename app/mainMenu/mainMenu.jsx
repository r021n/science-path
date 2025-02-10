import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  Alert,
  BackHandler,
} from "react-native";
import { useEffect, useState } from "react";
import Header from "../../components/header";
import MenuList from "../../components/menuList";
import { useIsFocused } from "@react-navigation/native";

const MainMenu = () => {
  const isFocused = useIsFocused();

  useEffect(() => {
    if (isFocused) {
      const backAction = () => {
        Alert.alert(
          "Notifikasi",
          "Apakah kamu ingin keluar dari aplikasi ini?",
          [
            {
              text: "Batal",
              onPress: () => null,
              style: "cancel",
            },
            { text: "Ya", onPress: () => BackHandler.exitApp() },
          ]
        );
        return true;
      };

      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );

      return () => backHandler.remove();
    }
  }, [isFocused]);
  return (
    <SafeAreaView
      style={{
        // backgroundColor: "yellow",
        // height: "100%",
        flex: 1,
      }}
    >
      <StatusBar hidden={true} />
      <ImageBackground
        source={require("../../assets/bg/blue_bg.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "space-between",
          // alignItems: "center",
        }}
      >
        <Header />
        <MenuList />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MainMenu;
