import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { Audio } from "expo-av";
import { useRouter } from "expo-router";

const Header = () => {
  const router = useRouter();

  const [soundOn, setSoundOn] = useState(false);
  const [sound, setSound] = useState();

  const loadingSound = async () => {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(
      require("../assets/music/sound_bg.mp3")
    );
    setSound(sound);
  };

  const playAudio = async () => {
    soundOn ? await sound.pauseAsync() : await sound.playAsync();
  };

  useEffect(() => {
    !sound ? loadingSound() : setSound(sound);
  }, [sound]);

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
        <TouchableOpacity onPress={() => router.push("/profile")}>
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
              Profil Pengembang
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setSoundOn((prev) => !prev);
            playAudio();
          }}
        >
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
    </View>
  );
};

export default Header;
