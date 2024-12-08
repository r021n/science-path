import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../components/header";

const LatihanSoal = () => {
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/bg/blue_bg.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View style={{ flex: 1 }}>
          <Header />
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              gap: 70,
            }}
          >
            <Image
              source={require("../../assets/images/woman.png")}
              resizeMode="contain"
              style={{
                // backgroundColor: "lime",
                height: 500,
                width: 180,
              }}
            />
            <View
              style={{
                // backgroundColor: "yellow",
                justifyContent: "center",
                gap: 10,
              }}
            >
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/pretest.png")}
                  resizeMode="contain"
                  style={{
                    width: 280,
                    height: 125,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/postest.png")}
                  resizeMode="contain"
                  style={{
                    width: 280,
                    height: 125,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default LatihanSoal;
