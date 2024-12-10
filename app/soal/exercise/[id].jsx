import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { pretest } from "../../../soal/pretest";
// import
import { useForm } from "../../../context/answerContext";

const Exercise = () => {
  const router = useRouter();

  const { id, type } = useLocalSearchParams();
  const nextId = parseInt(id) + 1;

  const data = pretest[parseInt(id) - 1];
  const choice = data.pilihan;

  const { userData, setUserData } = useForm();
  const choosenValue = userData[`${id}`] || null;
  const [choosen, setChoosen] = useState(choosenValue);

  const answerList = [];
  const keyAnswer = [];
  let totalSame = 0;

  const getAllAnswer = () => {
    const answerLength = Object.getOwnPropertyNames(userData);

    for (let i = 1; i <= answerLength.length - 1; i++) {
      answerList.push(userData[`${i}`]);
    }

    for (let i = 0; i <= pretest.length - 1; i++) {
      keyAnswer.push(pretest[i].kunci);
    }

    for (let i = 0; i < answerList.length; i++) {
      if (answerList[i] === keyAnswer[i]) {
        totalSame++;
      }
    }

    console.log(totalSame);

    // console.log(answerList);
    // console.log(keyAnswer);
  };

  // console.log(userData);
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
                onPress={() => setChoosen(key)}
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
              <TouchableOpacity onPress={() => router.back()}>
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
              <TouchableOpacity
                onPress={() => {
                  router.push({
                    pathname: "/soal/exercise/[id]",
                    params: {
                      id: nextId,
                      type: type,
                    },
                  });
                  setUserData({ ...userData, [id]: choosen });
                }}
              >
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
                  setUserData({ ...userData, [id]: choosen });
                  getAllAnswer();
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
