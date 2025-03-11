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
        source={{
          uri: "https://scratch.mit.edu/projects/1112645660",
        }}
      />
    </>
  );
};

export default GrassLab;
