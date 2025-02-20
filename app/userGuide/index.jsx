import {
  View,
  Text,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import Guide1 from "../../components/guide/guide1";
import Guide2 from "../../components/guide/guide2";
import Guide3 from "../../components/guide/guide3";
import Guide4 from "../../components/guide/guide4";

const UserGuide = () => {
  const router = useRouter();

  const [page, setPage] = useState(1);
  const guides = [Guide1, Guide2, Guide3, Guide4];
  const CurrentGuide = guides[page - 1];

  const prevPage = () => {
    if (page > 1) setPage((page) => page - 1);
  };

  const nextPage = () => {
    if (page < 4) setPage((page) => page + 1);
  };

  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity
        onPress={() => router.replace("/mainMenu/mainMenu")}
        style={{
          position: "absolute",
          left: "3%",
          top: 30,
          zIndex: 1,
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
      <ImageBackground
        source={require("../../assets/bg/white_bg.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <ScrollView style={{ marginVertical: 25, paddingHorizontal: "15%" }}>
          <View style={{ alignItems: "center" }}>
            <CurrentGuide />
          </View>
        </ScrollView>
      </ImageBackground>
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
            justifyContent: "center",
            // backgroundColor: "pink",
            width: "100%",
            paddingHorizontal: 30,
            gap: "80%",
          }}
        >
          {page < 2 ? (
            <View style={{ width: 100, height: 50 }}></View>
          ) : (
            <TouchableOpacity onPress={prevPage}>
              <Image
                source={require("../../assets/icons/swipe_left.png")}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 50,
                  display: page > 1 ? "block" : "none",
                  // backgroundColor: "lime"
                }}
              />
            </TouchableOpacity>
          )}

          {page > 3 ? (
            <View style={{ width: 100, height: 50 }}></View>
          ) : (
            <TouchableOpacity onPress={nextPage}>
              <Image
                source={require("../../assets/icons/swipe_right.png")}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 50,
                  display: page < 4 ? "block" : "none",
                  //  backgroundColor: "lime"
                }}
              />
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  );
};

export default UserGuide;
