import { View, Text } from "react-native";
import React from "react";
import WebView from "react-native-webview";
import { useNavigation } from "expo-router";

const CarSimulator = () => {
  const navigation = useNavigation();

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View
      style={{
        backgroundColor: "yellow",
        height: "100%",
      }}
    >
      <Text>Simulasi mobil</Text>
      <View
        style={{
          height: "100%",
        }}
      >
        <WebView
          style={{
            flex: 1,
          }}
          source={{
            html: '<div style="display: flex; justify-content: center;"> <iframe style="" src="https://scratch.mit.edu/projects/1105833881/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe> </div>',
          }}
        />
      </View>
    </View>
  );
};

export default CarSimulator;
