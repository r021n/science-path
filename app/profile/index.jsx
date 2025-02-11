import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import Dospem from "../../components/profile/dospem";
import Mahasiswa from "../../components/profile/mahasiswa";

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
          onPress={() => router.replace("/mainMenu/mainMenu")}
          style={{
            position: "absolute",
            left: 40,
            top: 30,
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
            // alignItems: "center"
            justifyContent: "center",
            marginHorizontal: 100,
            // marginTop: ,
          }}
        >
          <ImageBackground
            source={require("../../assets/bg/pengembang_bg.png")}
            resizeMode="contain"
            style={{
              // flex: 1,
              width: 650,
              height: 300,
              justifyContent: "center",
              backgroundColor: "skyblue",
              alignSelf: "center",
            }}
          >
            <ScrollView
              style={{
                marginBottom: 36,
                marginTop: 70,
              }}
            >
              <Mahasiswa />
            </ScrollView>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfilePengembang;
