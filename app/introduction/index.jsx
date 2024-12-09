import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import TextList from "../../components/introduction/textList";
import { textData } from "../../data/text/textData";

const Introduction = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/bg/blue_bg.png")}
        style={{
          flex: 1,
          justifyContent: "flex-end",
        }}
      >
        <TouchableOpacity
          onPress={() => router.back("/mainMenu/mainMenu")}
          style={{
            position: "absolute",
            left: 40,
            top: 15,
            // backgroundColor: "yellow",
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
            // flex: 1,
            marginTop: 36,
            // backgroundColor: "pink",
            height: "83%",
          }}
        >
          <ImageBackground
            source={require("../../assets/bg/pengantar_bg.png")}
            resizeMode="contain"
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ScrollView
              style={{
                paddingHorizontal: "15%",
                // backgroundColor: "yellow",
                marginTop: 50,
                marginBottom: 20,
                height: "100%",
                width: "87%",
              }}
            >
              {textData.map((item, key) => (
                <TextList text={item} tujuan={item.shown} key={key} />
              ))}
            </ScrollView>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Introduction;
