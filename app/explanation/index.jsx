import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  ScrollView,
  Dimensions,
} from "react-native";
import { pretest } from "../../data/soal/pretest";
import { postest } from "../../data/soal/postest";
import React, { useState, useEffect } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

const Explanation = () => {
  const { type } = useLocalSearchParams();
  const router = useRouter();
  const [currentNum, setCurrentNum] = useState(1);
  const [totalNum, setTotalNum] = useState(10);
  const [questionData, setQuestionData] = useState([]);
  const [imageHeight, setImageHeight] = useState(0);
  const letter = ["A", "B", "C", "D"];

  const windowWidth = Dimensions.get("window").width;
  const imageWidth = windowWidth - 280;

  useEffect(() => {
    if (!type) return;
    const data = type === "pretest" ? pretest : postest;
    setQuestionData(data);
    setTotalNum(data.length);
    setCurrentNum(1);
  }, [type]);

  const currentQuestion = questionData[currentNum - 1];
  if (!currentQuestion) {
    return null;
  }

  const nextNum = () => {
    setCurrentNum((num) => num + 1);
  };

  const prevNum = () => {
    setCurrentNum((num) => num - 1);
  };
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/bg/white_bg.png")}
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
            gap: 18,
          }}
        >
          {questionData[currentNum - 1].gambar ? (
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
                source={questionData[currentNum - 1].gambar}
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
            {questionData[currentNum - 1].soal}
          </Text>
          <View
            style={{
              marginTop: 16,
              paddingBottom: 30,
            }}
          >
            <View
              style={{
                backgroundColor: "#F9D976",
                borderRadius: 14,
                paddingVertical: 16,
                paddingHorizontal: 18,
                shadowColor: "#B87333",
                shadowOffset: { width: 0, height: 6 },
                shadowOpacity: 0.35,
                shadowRadius: 8,
                elevation: 6,
                marginBottom: 16,
                borderWidth: 1.4,
                borderColor: "#FFE8A3",
              }}
            >
              <Text
                style={{
                  fontFamily: "PBold",
                  fontSize: 15,
                  color: "#5C3A00",
                  textAlign: "center",
                }}
              >
                {`${letter[questionData[currentNum - 1].kunci]}. ${
                  questionData[currentNum - 1].pilihan[
                    questionData[currentNum - 1].kunci
                  ]
                }`}
              </Text>
            </View>
            <Text
              style={{
                fontFamily: "PBold",
                fontSize: 17,
                textDecorationLine: "underline",
                textAlign: "justify",
                marginTop: 0,
              }}
            >
              Pembahasan
            </Text>
            <Text
              style={{
                fontFamily: "PMedium",
                fontSize: 14,
                textAlign: "justify",
                marginTop: 0,
              }}
            >
              {questionData[currentNum - 1].pembahasan}
            </Text>
          </View>
        </ScrollView>
        <View
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "row",
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
              width: "100%",
              paddingHorizontal: 30,
              gap: "75%",
            }}
          >
            {currentNum < 2 ? (
              <TouchableOpacity onPress={() => router.dismiss()}>
                <Image
                  source={require("../../assets/icons/swipe_left.png")}
                  resizeMode="contain"
                  style={{
                    width: 100,
                    height: 50,
                    display: "block",
                    // backgroundColor: "lime",
                  }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={prevNum}>
                <Image
                  source={require("../../assets/icons/swipe_left.png")}
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

            {currentNum < totalNum ? (
              <TouchableOpacity onPress={nextNum}>
                <Image
                  source={require("../../assets/icons/swipe_right.png")}
                  resizeMode="contain"
                  style={{
                    width: 100,
                    height: 50,
                  }}
                />
              </TouchableOpacity>
            ) : (
              <View style={{ width: 100, height: 50 }}></View>
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Explanation;
