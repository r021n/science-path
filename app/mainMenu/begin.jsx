import { View, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const begin = () => {
  const router = useRouter();
  return (
    <View
      style={{
        height: "100%",
        display: "flex",
        paddingHorizontal: 70,
      }}
    >
      <StatusBar hidden={true} />
      <View
        style={{
          marginTop: 10,
        }}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          resizeMode="contain"
          style={{
            height: 30,
            width: 120,
          }}
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          // backgroundColor: "yellow",
          height: "80%",
          //   alignItems: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            // backgroundColor: "lime",
          }}
        >
          <View>
            <Text
              style={{
                fontFamily: "PBlack",
                fontSize: 40,
                marginRight: 400,
                lineHeight: 43,
                marginTop: 30,
              }}
            >
              PEMANASAN GLOBAL
            </Text>
            <Text
              style={{
                marginRight: 400,
                fontFamily: "PSemi",
                textAlign: "justify",
              }}
            >
              Selamat datang di Aplikasi Simulator Pemanasan Global! Aplikasi
              ini dirancang untuk memberikan pemahaman mendalam tentang dampak
              perubahan iklim dan pemanasan global melalui simulasi interaktif
            </Text>
            <TouchableOpacity
              onPress={() => router.replace("/mainMenu/mainMenu")}
              style={{
                paddingHorizontal: 30,
                paddingVertical: 10,
                backgroundColor: "#03A4BE",
                marginRight: 620,
                marginTop: 20,
                borderRadius: 50,
              }}
            >
              <Text
                style={{
                  fontFamily: "PMedium",
                  textAlign: "center",
                  color: "white",
                }}
              >
                Get Start
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              right: 280,
            }}
          >
            <Image
              source={require("../../assets/images/earth_melt.png")}
              resizeMode="contain"
              style={{
                width: 290,
                height: 290,
              }}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default begin;
