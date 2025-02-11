import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { useAudio } from "../context/soundContext";
import { useRouter } from "expo-router";
import { SoundProvider } from "../context/soundContext";

const Header = () => {
  const router = useRouter();
  const [dropDownBar, setDropDownBar] = useState(false);

  const { soundOn, playPauseAudio } = useAudio();

  // const [soundOn, setSoundOn] = useState(false);
  // const [sound, setSound] = useState();

  // const loadingSound = async () => {
  //   console.log("Loading Sound");
  //   const { sound } = await Audio.Sound.createAsync(
  //     require("../assets/music/sound_bg.mp3"),
  //     { shouldPlay: false, isLooping: true }
  //   );
  //   setSound(sound);
  // };

  // const playAudio = async () => {
  //   soundOn ? await sound.pauseAsync() : await sound.playAsync();
  // };

  // useEffect(() => {
  //   !sound ? loadingSound() : setSound(sound);
  // }, [sound]);

  return (
    <View
      style={{
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 50,
        paddingVertical: 9,
      }}
    >
      <Image
        source={require("../assets/images/logo.png")}
        resizeMode="contain"
        style={{
          width: 130,
          height: 30,
        }}
      />
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 30,
        }}
      >
        {/* <TouchableOpacity onPress={() => router.push("/profile")}> */}
        <TouchableOpacity onPress={() => setDropDownBar(!dropDownBar)}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={require("../assets/icons/information.png")}
              resizeMode="contain"
              style={{
                width: 23,
                height: 23,
              }}
            />
            <Text
              style={{
                fontFamily: "PSemi",
                fontSize: 13,
              }}
            >
              Informasi
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={playPauseAudio}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
            }}
          >
            <Image
              source={
                soundOn
                  ? require("../assets/icons/sound_on.png")
                  : require("../assets/icons/sound_off.png")
              }
              resizeMode="contain"
              style={{
                width: 23,
                height: 23,
              }}
            />
            <Text
              style={{
                fontFamily: "PSemi",
                fontSize: 13,
              }}
            >
              {soundOn ? "Music: on" : "Music: off"}
            </Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* For dropdown component */}
      <View
        style={{
          display: dropDownBar ? "flex" : "none",
          position: "absolute",
          backgroundColor: "white",
          padding: 10,
          borderRadius: 5,
          top: "180%",
          left: "78%",
          zIndex: 2,
        }}
      >
        <View>
          <TouchableOpacity
            onPress={() => {
              setDropDownBar(false);
              router.push("/userGuide");
            }}
          >
            <Text style={styles.textDrop}>Petunjuk Penggunaan</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: "gray",
            paddingVertical: 0.3,
            marginTop: 10,
          }}
        ></View>
        <View style={{ marginTop: 10 }}>
          <TouchableOpacity
            onPress={() => {
              setDropDownBar(false);
              router.push("/profile");
            }}
          >
            <Text style={styles.textDrop}>Profile Pengembang</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Component for hide dropdown */}
      <TouchableOpacity
        style={{
          display: dropDownBar ? "flex" : "none",
          position: "absolute",
          width: "200%",
          height: "10000%",
          backgroundColor: "rgba(0,0,0,0.5)",
          zIndex: 1,
        }}
        onPress={() => setDropDownBar(false)}
      >
        <View></View>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  textDrop: { fontFamily: "PSemi", fontSize: 13, textAlign: "left" },
});
