import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import Header from "../../components/header";
import { useRouter } from "expo-router";

const LatihanSoal = () => {
  const router = useRouter();
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
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: "/soal/intro/[id]",
                    params: {
                      id: "pretest",
                      image: require("../../assets/images/pretest_header.png"),
                    },
                  })
                }
              >
                <Image
                  source={require("../../assets/images/pretest.png")}
                  resizeMode="contain"
                  style={{
                    width: 280,
                    height: 125,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  router.push({
                    pathname: "/soal/intro/[id]",
                    params: {
                      id: "postest",
                      image: require("../../assets/images/postest_header.png"),
                    },
                  })
                }
              >
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
