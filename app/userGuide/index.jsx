import { View, Text, ImageBackground, ScrollView } from "react-native";
import React from "react";
import Guide1 from "../../components/guide/guide1";

const UserGuide = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/bg/white_bg.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <ScrollView style={{ marginVertical: 25, marginHorizontal: "10%" }}>
          <View style={{ alignItems: "center" }}>
            <Guide1 />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default UserGuide;
