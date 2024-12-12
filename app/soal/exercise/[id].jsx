import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { pretest } from "../../../data/soal/pretest";
import { postest } from "../../../data/soal/postest";
// import
import { useForm } from "../../../context/answerContext";
import { useIsFocused } from "@react-navigation/native";

const Exercise = () => {
  const router = useRouter();
  const isFocused = useIsFocused();

  const { id, type } = useLocalSearchParams();
  const nextId = parseInt(id) + 1;
  // const prevId = parseInt(id) - 1;

  const data =
    type === "pretest" ? pretest[parseInt(id) - 1] : postest[parseInt(id) - 1];
  const keyData = type === "pretest" ? pretest : postest;
  const choice = data.pilihan;

  const { userData, setUserData } = useForm();
  const choosenValue = userData[`${id}`] || null;
  const [choosen, setChoosen] = useState(choosenValue);

  const keyAnswer = [];

  const getValue = async () => {
    await setUserData({
      ...userData,
      userAnswers: [...(userData.userAnswers || []), choosen],
    });
    await getAllAnswer();
    router.push({
      pathname: "/modal",
      params: { keyAnswer: keyAnswer, type: type },
    });
  };

  const getAllAnswer = () => {
    for (let i = 0; i <= keyData.length - 1; i++) {
      keyAnswer.push(keyData[i].kunci);
    }
  };

  const previous = () => {
    if (isFocused) {
      router.back();
    }
  };

  const continou = () => {
    if (isFocused) {
      router.push({
        pathname: "/soal/exercise/[id]",
        params: {
          id: nextId,
          type: type,
        },
      });
      setUserData({
        ...userData,
        userAnswers: [...(userData.userAnswers || []), choosen],
      });
    }
  };

  isFocused && console.log(userData);

  // console.log(choosenValue);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../../assets/bg/white_bg.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
        }}
      >
        <View
          style={{
            display: "flex",
            width: 55,
            height: 55,
            backgroundColor: "black",
            position: "absolute",
            top: 30,
            left: 30,
            borderRadius: 50,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "PBold",
              fontSize: 25,
              textAlign: "center",
            }}
          >
            {data.id}
          </Text>
        </View>
        <ScrollView
          style={{
            flex: 1,
            marginHorizontal: 140,
            marginTop: 40,
            marginBottom: 70,
            // paddingBottom: 10,
            // backgroundColor: "yellow",
            gap: 18,
          }}
        >
          {data.gambar ? (
            <View style={{ flex: 1 }}>
              <Image
                source={data.gambar}
                resizeMode="contain"
                style={{ width: "100%", justifyContent: "center" }}
              />
            </View>
          ) : (
            ""
          )}
          {/* <Text>{type}</Text> */}
          <Text
            style={{
              fontFamily: "PMedium",
              fontSize: 14,
              textAlign: "justify",
              marginTop: 15,
            }}
          >
            {data.soal}
          </Text>
          <View
            style={{
              marginTop: 16,
              paddingBottom: 30,
              // backgroundColor: "lime",
              alignItems: "center",
            }}
          >
            {choice.map((item, key) => (
              <TouchableOpacity
                onPress={() => {
                  setChoosen(key);
                }}
                key={key}
                style={{
                  backgroundColor: key === choosen ? "black" : "white",
                  padding: 10,
                  marginVertical: 6,
                  borderWidth: 1,
                  borderColor: "black",
                  borderRadius: 10,
                }}
              >
                <Text
                  style={{
                    fontFamily: "PMedium",
                    fontSize: 14,
                    color: key === choosen ? "white" : "black",
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>

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
              alignItems: "center",
              // backgroundColor: "pink",
              width: "100%",
              paddingHorizontal: 30,
              gap: 300,
            }}
          >
            {parseInt(id) >= 2 && (
              <TouchableOpacity onPress={previous}>
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
            )}

            {parseInt(id) < pretest.length ? (
              <TouchableOpacity onPress={continou}>
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
            ) : (
              <TouchableOpacity
                onPress={() => {
                  getValue();
                }}
              >
                <Text>Selesaikan</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Exercise;
