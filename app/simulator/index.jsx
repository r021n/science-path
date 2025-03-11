import {
  View,
  Text,
  ImageBackground,
  Image,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";
import Header from "../../components/header";

const Simulator = () => {
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        height: "100%",
      }}
    >
      <StatusBar hidden={true} />
      <ImageBackground
        source={require("../../assets/bg/blue_bg.png")}
        resizeMode="cover"
        style={{ flex: 1, justifyContent: "center" }}
      >
        <Header />
        <TouchableOpacity
          onPress={() => router.back("/mainMenu/mainMenu")}
          style={{
            position: "absolute",
            left: 40,
            top: 75,
            // backgroundColor: "yellow",
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
        <View
          style={{
            flex: 1,
          }}
        >
          <View
            style={{
              // backgroundColor: "yellow",
              flex: 1,
              justifyContent: "center",
            }}
          >
            {/* <Text
              style={{
                marginTop: -20,
                fontFamily: "PBold",
                fontSize: 30,
                color: "white",
                textAlign: "center",
              }}
            >
              Our Menu
            </Text> */}
            <View
              style={{
                marginTop: 30,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <TouchableOpacity
                onPress={() => router.push("/simulator/grassSimulator")}
              >
                <Image
                  source={require("../../assets/images/pasar_gede.png")}
                  resizeMode="contain"
                  style={{
                    width: 310,
                    height: 170,
                    // backgroundColor: "lime",
                  }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: "PBold",
                    fontSize: 17,
                    marginTop: 10,
                  }}
                >
                  Simulasi A
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/simulator/carSimulator")}
              >
                <Image
                  source={require("../../assets/images/mobil_monument.png")}
                  resizeMode="contain"
                  style={{
                    width: 310,
                    height: 170,
                    // backgroundColor: "lime",
                  }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    color: "white",
                    fontFamily: "PBold",
                    fontSize: 17,
                    marginTop: 10,
                  }}
                >
                  Simulasi B
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* <Link href={"/simulator/carSimulator"}>car simulator</Link>
          <Link href={"/simulator/grassSimulator"}>grass simulator</Link> */}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Simulator;
