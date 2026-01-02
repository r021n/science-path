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
        source={{ uri: "https://r021n.github.io/labs/grass_lab.html" }}
      />
    </>
  );
};

export default GrassLab;
