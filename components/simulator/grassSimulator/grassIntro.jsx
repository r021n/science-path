import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
  StyleSheet,
} from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const GrassIntro = ({ setPage }) => {
  const router = useRouter();
  return (
    <>
      <ImageBackground
        source={require("../../../assets/bg/white_bg.png")}
        resizeMode="cover"
        style={{
          flex: 1,
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
            // backgroundColor: "yellow",
            marginVertical: "auto",
            marginHorizontal: "13%",
          }}
        >
          <Image
            source={require("../../../assets/images/simulator_a.png")}
            resizeMode="contain"
            style={{
              width: 240,
              height: 55,
              alignSelf: "center",
              // backgroundColor: "yellow",
            }}
          />
          <Text
            style={[styles.textStyle, { textAlign: "center", marginTop: 20 }]}
          >
            Perhatikan perintah pengamatan berikut!
          </Text>
          <Text style={styles.textStyle}>
            Perhatikan gerak pantul energi panas yang dihasilkan sinar matahari
            yang terjadi ketika mesin mobil dinyalakan dan dimatikan!
          </Text>
          <View style={{ alignSelf: "center", maxWidth: "90%" }}>
            <Text
              style={[styles.textStyle, { textAlign: "center", marginTop: 10 }]}
            >
              Keterangan simbol:
            </Text>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 7,
              }}
            >
              <Image
                source={require("../../../assets/images/sun_light.png")}
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
              />
              <Text style={styles.textStyle}>{"\t:\tSinar Matahari"}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                marginTop: 7,
              }}
            >
              <Image
                source={require("../../../assets/images/heat.png")}
                resizeMode="contain"
                style={{ width: 25, height: 25 }}
              />
              <Text style={styles.textStyle}>
                {
                  "\t:\tEnergi panas yang dipancarkan sebagai pancaran infra merah"
                }
              </Text>
            </View>
          </View>
          <TouchableOpacity
            onPress={() => setPage(1)}
            style={{
              backgroundColor: "#00709F",
              paddingHorizontal: 48,
              borderRadius: 20,
              paddingVertical: 2,
              alignSelf: "center",
              marginTop: 20,
            }}
          >
            <Text style={{ color: "white", fontFamily: "PBold", fontSize: 20 }}>
              Start
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => router.back()}
          style={{ position: "absolute", left: 40, bottom: 40 }}
        >
          <Image
            source={require("../../../assets/icons/swipe_left.png")}
            resizeMode="contain"
            style={{
              width: 100,
              height: 50,
              // display: "none",
              // backgroundColor: "lime"
            }}
          />
        </TouchableOpacity>
      </ImageBackground>
    </>
  );
};

export default GrassIntro;

const styles = StyleSheet.create({
  textStyle: { fontFamily: "PMedium", fontSize: 15 },
});
