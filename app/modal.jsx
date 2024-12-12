import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { useForm } from "../context/answerContext";
import { doc, setDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../configs/firebaseConfig";

const Modal = () => {
  const router = useRouter();

  const { userData, setUserData } = useForm();
  const { keyAnswer, type } = useLocalSearchParams();

  let answerList = userData.userAnswers;
  const keyAnswerData = keyAnswer.split(",").map(Number);
  let score = null;
  let totalSame = 0;

  const getScore = async () => {
    for (let i = 0; i < answerList.length; i++) {
      if (answerList[i] == keyAnswerData[i]) {
        totalSame++;
      }
    }

    score = (totalSame / answerList.length) * 100;

    console.log(userData.name);
    console.log(keyAnswerData);
    console.log(answerList);
    console.log(totalSame);
    // console.log(score);

    answerList = [];

    // ==============> send data to firebase
    // userData.score = score;
    // await setDoc(doc(db, type, userData.name), userData);
    // await setUserData({});

    // ==============> read data from firebase
    // const querySnapshot = await getDocs(collection(db, type));
    // querySnapshot.forEach((doc) => {
    //   console.log(doc.id, " => ", doc.data().userAnswers[0]);
    // });

    // setUserData({});
    // router.dismissTo({ pathname: "/soal" });
  };

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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
          }}
        >
          <TouchableOpacity onPress={() => router.back()}>
            <Image
              source={require("../assets/icons/batal_btn.png")}
              style={{
                height: 30,
                width: 120,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          <TouchableOpacity onPress={getScore}>
            <Image
              source={require("../assets/icons/yakin_btn.png")}
              style={{
                height: 30,
                width: 120,
              }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

export default Modal;
