import { View, Text } from "react-native";
import WebView from "react-native-webview";
import React from "react";
import Header from "../../header";

const CarLab = () => {
  return (
    <>
      <View>
        <Header />
      </View>
      <WebView
        style={{
          flex: 1,
        }}
        source={require("../../../assets/html/car_lab.html")}
      />
    </>
  );
};

export default CarLab;
