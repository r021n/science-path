import { View } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import Header from "../../header";

const GrassLab = () => {
  return (
    <>
      <View>
        <Header />
      </View>
      <WebView
        style={{
          flex: 1,
        }}
        source={require("../../../assets/html/grass_lab.html")}
      />
    </>
  );
};

export default GrassLab;
