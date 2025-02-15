import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "../context/answerContext";

const Modal = () => {
  const router = useRouter();
  const { reset } = router;

  const { userData, setUserData } = useForm();
  const { keyAnswer, type } = useLocalSearchParams();
  const [loading, setLoading] = useState(false);

  let answerList = userData.userAnswers;
  const keyAnswerData = keyAnswer.split(",").map(Number);
  let score = null;
  let totalSame = 0;

  const convertNum = (num) => {
    switch (num) {
      case 0:
        return "A";
        break;
      case 1:
        return "B";
        break;
      case 2:
        return "C";
        break;
      case 3:
        return "D";
        break;

      default:
        break;
    }
  };

  const getScore = async () => {
    setLoading(true);

    for (let i = 0; i < answerList.length; i++) {
      if (answerList[i] == keyAnswerData[i]) {
        totalSame++;
      }
    }

    score = (totalSame / keyAnswerData.length) * 100;

    // ==============> Store data to spreedsheet

    const postestScript = "";
    const pretestScript = "";

    const url = type == "pretest" ? pretestScript : postestScript;
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body:
        `Nama=${userData.name}&Kelas=${userData.class}&Sekolah=${userData.school}` +
        answerList
          .map((answer, index) => `&Jawaban_${index + 1}=${convertNum(answer)}`)
          .join("") +
        `&Total_benar=${totalSame}&Nilai=${score}`,
    })
      .then((res) => res.text())
      .then((data) => {
        setUserData({ name: "", class: "", userAnswers: [] });
        ToastAndroid.show("Jawabanmu sudah terkirim", ToastAndroid.LONG);
        router.push({
          pathname: "/result",
          params: {
            studentScore: score,
            totalTrue: totalSame,
          },
        });
      })
      .catch((error) => console.log(error));
  };

  const ButtonWithImage = ({ onPress, imageSource }) => (
    <TouchableOpacity onPress={onPress}>
      <Image
        source={imageSource}
        style={{
          height: 30,
          width: 120,
        }}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );

  console.log(userData);
  console.log(keyAnswerData);
  console.log(userData.userAnswers);

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../assets/bg/white_bg.png")}
        style={{ flex: 1, justifyContent: "center" }}
        resizeMode="cover"
      >
        <View style={{ marginBottom: 20 }}>
          <Text
            style={{ textAlign: "center", fontFamily: "PSemi", fontSize: 23 }}
          >
            Yakin ingin menyelesaikan {type} ini?
          </Text>
        </View>

        {loading ? (
          <ActivityIndicator size={40} />
        ) : (
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
              gap: 20,
            }}
          >
            <ButtonWithImage
              onPress={() => router.back()}
              imageSource={require("../assets/icons/batal_btn.png")}
            />
            <ButtonWithImage
              onPress={getScore}
              imageSource={require("../assets/icons/yakin_btn.png")}
            />
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default Modal;
