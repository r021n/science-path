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
            marginHorizontal: 100,
            // marginTop: ,
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
            <TouchableOpacity>
              <Image
                source={require("../../assets/icons/swipe_left.png")}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 30,
                  // backgroundColor: "lime"
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require("../../assets/icons/swipe_right.png")}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 30,
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
