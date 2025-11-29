import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams } from "expo-router";

const Explanation = () => {
  const { type } = useLocalSearchParams();
  const [currentNum, setCurrentNum] = useState(1);
  const [totalNum, setTotalNum] = useState(10);

  const nextNum = () => {
    setCurrentNum((num) => num + 1);
  };

  const prevNum = () => {
    setCurrentNum((num) => num - 1);
  };
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
        <View
          style={{
            display: "flex",
            width: 55,
            height: 55,
            backgroundColor: "black",
            position: "absolute",
            top: 30,
            left: 30,
            borderRadius: 50,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "PBold",
              fontSize: 25,
              textAlign: "center",
            }}
          >
            {currentNum}
          </Text>
        </View>
        <View
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            width: "100%",
            justifyContent: "center",
            bottom: 35,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              paddingHorizontal: 30,
              gap: "75%",
            }}
          >
            {currentNum < 2 ? (
              <View style={{ width: 100, height: 50 }}></View>
            ) : (
              <TouchableOpacity onPress={prevNum}>
                <Image
                  source={require("../../assets/icons/swipe_left.png")}
                  resizeMode="contain"
                  style={{
                    width: 100,
                    height: 50,
                    display: currentNum >= 2 ? "block" : "none",
                    // backgroundColor: "lime",
                  }}
                />
              </TouchableOpacity>
            )}

            {currentNum < totalNum ? (
              <TouchableOpacity onPress={nextNum}>
                <Image
                  source={require("../../assets/icons/swipe_right.png")}
                  resizeMode="contain"
                  style={{
                    width: 100,
                    height: 50,
                  }}
                />
              </TouchableOpacity>
            ) : (
              <View style={{ width: 100, height: 50 }}></View>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Explanation;
