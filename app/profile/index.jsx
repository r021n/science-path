import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const ProfilePengembang = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ImageBackground
        source={require("../../assets/bg/blue_bg.png")}
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => router.back("/mainMenu/mainMenu")}
          style={{
            position: "absolute",
            left: 40,
            top: 15,
          }}
        >
          <View>
            <Image
              source={require("../../assets/icons/home_icon.png")}
              resizeMode="contain"
              style={{
                width: 50,
                height: 50,
              }}
            />
          </View>
        </TouchableOpacity>

        <View
          style={{
            flex: 1,
            // backgroundColor: "yellow",
            marginHorizontal: 120,
          }}
        >
          <ImageBackground
            source={require("../../assets/bg/pengembang_bg.png")}
            resizeMode="contain"
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          ></ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfilePengembang;
