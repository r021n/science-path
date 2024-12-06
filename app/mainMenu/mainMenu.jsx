import {
  View,
  Text,
  ImageBackground,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";
import Header from "../../components/header";
import MenuList from "../../components/menuList";

const MainMenu = () => {
  return (
    <SafeAreaView
      style={{
        // backgroundColor: "yellow",
        height: "100%",
      }}
    >
      <StatusBar hidden={true} />
      <ImageBackground
        source={require("../../assets/bg/blue_bg.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <Header />
        <MenuList />
      </ImageBackground>
    </SafeAreaView>
  );
};

export default MainMenu;
