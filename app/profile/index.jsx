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
  const [num, setNum] = useState(1);

  const nextProfile = () => {
    if (num < 2) setNum((num) => num + 1);
  };
  const prevProfile = () => {
    if (num > 1) setNum((num) => num - 1);
  };
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
              width: 600,
              height: 300,
              justifyContent: "center",
              // backgroundColor: "skyblue",
              alignSelf: "center",
            }}
          >
            <ScrollView
              style={{
                marginBottom: 36,
                marginTop: 70,
              }}
            >
              {num === 1 ? <Mahasiswa /> : <Dospem />}
            </ScrollView>
          </ImageBackground>
        </View>

        <View
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
            // backgroundColor: "yellow",
            width: "100%",
            justifyContent: "center",
            bottom: 35,
          }}
        >
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              //   backgroundColor: "pink",
              width: "100%",
              paddingHorizontal: 30,
            }}
          >
            <TouchableOpacity onPress={prevProfile}>
              <Image
                source={require("../../assets/icons/swipe_left.png")}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 50,
                  display: num > 1 ? "block" : "none",
                  // backgroundColor: "lime"
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={nextProfile}>
              <Image
                source={require("../../assets/icons/swipe_right.png")}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 50,
                  display: num < 2 ? "block" : "none",
                  //  backgroundColor: "lime"
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default ProfilePengembang;
