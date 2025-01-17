import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

const QuestionIntro = () => {
  const router = useRouter();
  const { id, image } = useLocalSearchParams();

  const contents = [
    "Isilah data diri kalian pada kolom yang sudah disediakan.",
    "Bacalah setiap soal dengan cermat sebelum memilih jawaban.",
    "Klik pada pilihan jawaban yang Anda anggap paling tetap.",
    "Pastikan setiap soal terjawab sebelum melanjutkan ke soal berikutnya.",
    "Sebelum menekan tombol 'Yakin', periksa kembali jawaban Anda.",
    "Klik tombol 'Yakin' setelah memastikan semua soal telah dijawab dengan benar.",
  ];

  return (
    <View
      style={{
        flex: 1,
        // backgroundColor: "pink",
      }}
    >
      <ImageBackground
        source={require("../../../assets/bg/white_bg.png")}
        resizeMode="cover"
        style={{
          flex: 1,
          justifyContent: "center",
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
            flex: 1,
            marginHorizontal: 90,
            marginVertical: 50,
            justifyContent: "center",
            alignItems: "center",
            // marginTop: ,
            // backgroundColor: "yellow",
            gap: 18,
          }}
        >
          <Image
            source={image}
            resizeMode="contain"
            style={{
              //   backgroundColor: "lime",
              width: 170,
              height: 40,
            }}
          />
          <ScrollView>
            {contents.map((item, key) => (
              <View key={key} style={{ display: "flex", flexDirection: "row" }}>
                <Text
                  style={{
                    textAlign: "justify",
                    fontFamily: "PMedium",
                    fontSize: 15,
                    marginRight: 5,
                  }}
                >
                  {key + 1}.
                </Text>
                <Text
                  style={{
                    textAlign: "justify",
                    fontFamily: "PMedium",
                    fontSize: 15,
                  }}
                >
                  {item}
                </Text>
              </View>
            ))}
          </ScrollView>
        </View>

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
              justifyContent: "space-between",
              //   backgroundColor: "pink",
              width: "100%",
              paddingHorizontal: 30,
            }}
          >
            <TouchableOpacity onPress={() => router.back()}>
              <Image
                source={require("../../../assets/icons/swipe_left.png")}
                resizeMode="contain"
                style={{
                  width: 100,
                  height: 30,
                  display: "none",
                  // backgroundColor: "lime"
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                router.push({
                  pathname: "/soal/exercise/rename",
                  params: {
                    type: id,
                  },
                })
              }
            >
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
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default QuestionIntro;
