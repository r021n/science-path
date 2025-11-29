import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  ToastAndroid,
  Dimensions,
} from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { pretest } from "../../../data/soal/pretest";
import { postest } from "../../../data/soal/postest";
// import
import { useForm } from "../../../context/answerContext";

const Exercise = () => {
  const router = useRouter();
  const windowWidth = Dimensions.get("window").width;
  const imageWidth = windowWidth - 280;

  const { id } = useLocalSearchParams();
  const [currentNum, setCurrentNum] = useState(1);
  const [imageHeight, setImageHeight] = useState(0);

  const data =
    id === "pretest" ? pretest[currentNum - 1] : postest[currentNum - 1];
  const keyData = id === "pretest" ? pretest : postest;
  const choice = data.pilihan;

  const { userData, setUserData } = useForm();
  const selects = ["A", "B", "C", "D"];

  // const [userAnswers, setUserAnswers] = useState([]);
  const [choosen, setChoosen] = useState(null);

  useEffect(() => {
    setChoosen(userData.userAnswers[currentNum - 1]);
  }, [currentNum]);

  const keyAnswer = [];

  const getValue = () => {
    // pushUserAnswer(choosen);
    pushUserData(choosen);

    getAllKeyAnswer();
    router.push({
      pathname: "/modal",
      params: { keyAnswer: keyAnswer, type: id },
    });
  };

  const getAllKeyAnswer = () => {
    for (let i = 0; i <= keyData.length - 1; i++) {
      keyAnswer.push(keyData[i].kunci);
    }
  };

  const pushUserData = (value) => {
    const newData = [...userData.userAnswers];
    newData[currentNum - 1] = value;
    setUserData({
      ...userData,
      userAnswers: newData,
    });
  };

  const previous = () => {
    setCurrentNum((currentNum) => currentNum - 1);
  };

  const continou = () => {
    // pushUserAnswer(choosen);
    pushUserData(choosen);
    setCurrentNum((currentNum) => currentNum + 1);
  };

  // console.log(userAnswers);
  console.log(userData);

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
            {currentNum}
          </Text>
        </View>
        <ScrollView
          style={{
            flex: 1,
            marginHorizontal: 140,
            marginTop: 40,
            marginBottom: 70,
            // paddingBottom: 10,
            // backgroundColor: "pink",
            gap: 18,
          }}
        >
          {data.gambar ? (
            <View
              style={{
                width: "100%",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
                // marginVertical: 10,
              }}
            >
              <Image
                source={data.gambar}
                resizeMode="contain"
                onLoad={(event) => {
                  const { width, height } = event.nativeEvent.source;
                  const ratio = height / width;
                  setImageHeight(imageWidth * ratio);
                }}
                style={{
                  width: imageWidth,
                  height: imageHeight,
                  alignSelf: "center",
                }}
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
              marginTop: 0,
            }}
          >
            {data.soal}
          </Text>
          <View
            style={{
              marginTop: 16,
              paddingBottom: 30,
              // backgroundColor: "lime",
              // alignItems: "center",
            }}
          >
            {choice.map((item, key) => (
              <TouchableOpacity
                onPress={() => {
                  setChoosen(key);
                }}
                key={key}
                style={{
                  marginVertical: 6,
                  // backgroundColor: "yellow",
                  display: "flex",
                  flexDirection: "row",
                  width: "85%",
                }}
              >
                <Text
                  style={{
                    marginRight: 5,
                    borderWidth: 1,
                    paddingVertical: 10,
                    paddingHorizontal: 15,
                    borderRadius: 10,
                    backgroundColor: key === choosen ? "black" : "white",
                    color: key === choosen ? "white" : "black",
                  }}
                >
                  {selects[key]}
                </Text>
                <Text
                  style={{
                    fontFamily: "PMedium",
                    fontSize: 14,
                    color: key === choosen ? "white" : "black",
                    borderWidth: 1,
                    borderRadius: 10,
                    padding: 10,
                    backgroundColor: key === choosen ? "black" : "white",
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
              gap: "75%",
            }}
          >
            {currentNum < 2 ? (
              <View style={{ width: 100, height: 50 }}></View>
            ) : (
              <TouchableOpacity onPress={previous}>
                <Image
                  source={require("../../../assets/icons/swipe_left.png")}
                  resizeMode="contain"
                  style={{
                    width: 100,
                    height: 50,
                    display: currentNum >= 2 ? "block" : "none",
                    // backgroundColor: "lime",
                  }}
                />
              </TouchableOpacity>
            )}

            {currentNum < pretest.length ? (
              <TouchableOpacity onPress={continou}>
                <Image
                  source={require("../../../assets/icons/swipe_right.png")}
                  resizeMode="contain"
                  style={{
                    width: 100,
                    height: 50,
                    //  backgroundColor: "lime"
                  }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => {
                  getValue();
                }}
                style={{
                  backgroundColor: "#00A9C1",
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 20,
                }}
              >
                <Text
                  style={{
                    fontFamily: "PMedium",
                    fontSize: 13,
                    color: "white",
                  }}
                >
                  Selesaikan
                </Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Exercise;
