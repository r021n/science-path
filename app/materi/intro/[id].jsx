import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

const Intro = () => {
  const router = useRouter();
  const { id, title, content } = useLocalSearchParams();
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../../assets/bg/blue_bg.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
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
              source={require("../../../assets/icons/home_icon.png")}
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
            // flex: 1,
            height: "100%",
            marginHorizontal: 120,
            justifyContent: "center",
            alignItems: "center",
            // backgroundColor: "pink",
            width: "67%",
            // marginTop: ,
          }}
        >
          <ImageBackground
            source={require("../../../assets/bg/blackboard.png")}
            resizeMode="contain"
            style={{
              justifyContent: "center",
              height: "100%",
              width: "100%",
              // backgroundColor: "lime",
            }}
          >
            <ScrollView
              style={{
                // backgroundColor: "yellow",
                // flex: 1,
                height: "10%",
                // alignItems: "center",
                paddingHorizontal: 35,
                marginVertical: 110,
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: "PSemi",
                  fontSize: 15,
                  textAlign: "center",
                }}
              >
                {title}
              </Text>
              <Text
                style={{
                  color: "white",
                  fontFamily: "PRegular",
                  fontSize: 12,
                  marginTop: 20,
                  textAlign: "justify",
                }}
              >
                {content}
              </Text>
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
            <TouchableOpacity>
              <Image
                source={require("../../../assets/icons/swipe_left.png")}
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
                source={require("../../../assets/icons/swipe_right.png")}
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

export default Intro;
