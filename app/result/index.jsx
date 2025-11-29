import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { useRouter } from "expo-router";

const Result = () => {
  const { studentScore, totalTrue, type } = useLocalSearchParams();
  const router = useRouter();

  function onBackPress() {
    router.dismissTo("/mainMenu/mainMenu");
  }

  function toExplanation() {
    router.push({
      pathname: "/explanation",
      params: {
        type,
      },
    });
  }

  return (
    <View style={styles.mainView}>
      <ImageBackground
        source={require("../../assets/bg/white_bg.png")}
        style={styles.backgroundImg}
      >
        <View style={styles.viewWrap}>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.resultText}>Jumlah Benar: </Text>
            <Text style={styles.highlight}>{totalTrue}</Text>
          </View>
          <View style={{ display: "flex", flexDirection: "row" }}>
            <Text style={styles.resultText}>Nilai: </Text>
            <Text style={styles.highlight}>{studentScore}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            paddingHorizontal: 25,
            paddingVertical: 10,
            borderRadius: 30,
            marginTop: 30,
          }}
          onPress={onBackPress}
        >
          <Text style={{ color: "white", fontFamily: "PSemi", fontSize: 17 }}>
            Kembali ke Menu
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "black",
            paddingHorizontal: 25,
            paddingVertical: 10,
            borderRadius: 30,
            marginTop: 30,
          }}
          onPress={toExplanation}
        >
          <Text style={{ color: "white", fontFamily: "PSemi", fontSize: 17 }}>
            Lihat Pembahasan
          </Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

export default Result;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    justifyContent: "center",
  },
  backgroundImg: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  viewWrap: {
    width: "95%",
    display: "flex",
    flexDirection: "row",
    // backgroundColor: "yellow",
    justifyContent: "center",
    gap: 40,
  },
  resultText: {
    fontFamily: "PBold",
    fontSize: 23,
    padding: 10,
  },
  highlight: {
    fontFamily: "PBold",
    fontSize: 23,
    padding: 10,
    backgroundColor: "#00A9C1",
    color: "white",
    paddingHorizontal: 21,
    borderRadius: 50,
  },
});
