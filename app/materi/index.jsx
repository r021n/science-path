import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
} from "react-native";
import React from "react";
import Header from "../../components/header";
import { useRouter } from "expo-router";

const Materi = () => {
  const router = useRouter();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/bg/blue_bg.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <View style={{ flex: 1 }}>
          <Header />
          <View
            style={{
              flex: 1,
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/materi/intro/[id]",
                  params: {
                    id: 1,
                    title: "PENYEBAB DAN DAMPAK PEMANASAN GLOBAL",
                  },
                })
              }
            >
              <Image
                source={require("../../assets/images/penyebab_menu.png")}
                resizeMode="contain"
                style={{
                  width: 300,
                  height: 170,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/materi/intro/[id]",
                  params: {
                    id: 2,
                    title: "USAHA MENCEGAH PEMANASAN GLOBAL",
                  },
                })
              }
            >
              <Image
                source={require("../../assets/images/usaha_menu.png")}
                resizeMode="contain"
                style={{
                  width: 300,
                  height: 170,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Materi;
