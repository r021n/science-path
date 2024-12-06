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
          justifyContent: "center",
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
        <View style={{ flex: 1, marginTop: 36 }}>
          <ImageBackground
            source={require("../../assets/bg/pengantar_bg.png")}
            resizeMode="contain"
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <ScrollView
              style={{
                paddingHorizontal: 200,
                // backgroundColor: "yellow",
                marginTop: 50,
                marginBottom: 40,
                height: "100%",
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
