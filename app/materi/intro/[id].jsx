import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import Materi1 from "../../../components/materi/materi1/materi1";
import Materi2 from "../../../components/materi/materi2/materi2";

const Intro = () => {
  const router = useRouter();
  const { id, title } = useLocalSearchParams();

  const [page, setPage] = useState(1);

  const prevPage = () => {
    if (page > 1) setPage((page) => page - 1);
  };

  const nextPage = () => {
    if (page < 3) setPage((page) => page + 1);
  };
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
              height: 360,
              width: 680,
              // backgroundColor: "lime",
            }}
          >
            <ScrollView
              style={{
                // backgroundColor: "yellow",
                // flex: 1,
                height: "10%",
                // alignItems: "center",
                paddingHorizontal: 40,
                marginVertical: 50,
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

              {id == 1 ? <Materi1 page={page} /> : <Materi2 />}
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
            <TouchableOpacity onPress={prevPage}>
              <Image
                source={require("../../../assets/icons/swipe_left.png")}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 50,
                  display: id == 1 ? (page > 1 ? "block" : "none") : "none",
                  // backgroundColor: "lime"
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={nextPage}>
              <Image
                source={require("../../../assets/icons/swipe_right.png")}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 50,
                  display: id == 1 ? (page < 3 ? "block" : "none") : "none",
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
