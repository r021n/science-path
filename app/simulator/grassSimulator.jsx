import { View, Text } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import { useNavigation } from "expo-router";
import Header from "../../components/header";

const GrassSimulator = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
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
    </View>
  );
};

export default GrassSimulator;
