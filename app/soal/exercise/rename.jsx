import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from "react-native";
import { useState } from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { AnswerProvider, useForm } from "../../../context/answerContext";

const Rename = () => {
  const [nama, setNama] = useState("");
  const [kelas, setKelas] = useState("");
  const [sekolah, setSekolah] = useState("");

  const router = useRouter();
  const { type } = useLocalSearchParams();
  const { userData, setUserData } = useForm();

  return (
    <AnswerProvider>
      <View
        style={{
          flex: 1,
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
              marginHorizontal: 140,
              marginVertical: 50,
              justifyContent: "center",
              alignItems: "center",
              // marginTop: ,
              // backgroundColor: "yellow",
              gap: 18,
            }}
          >
            <View style={{ width: "70%" }}>
              <Text style={styles.nama}>Nama</Text>
              <TextInput
                value={nama}
                onChangeText={setNama}
                placeholder="tulis nama kamu"
                style={styles.input}
              />
            </View>
            <View style={{ width: "70%" }}>
              <Text style={styles.nama}>Kelas</Text>
              <TextInput
                value={kelas}
                onChangeText={setKelas}
                placeholder="tulis kelas kamu"
                style={styles.input}
              />
            </View>
            <View style={{ width: "70%" }}>
              <Text style={styles.nama}>Sekolah</Text>
              <TextInput
                value={sekolah}
                onChangeText={setSekolah}
                placeholder="tulis asal sekolah kamu"
                style={styles.input}
              />
            </View>
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
                    height: 50,
                    // backgroundColor: "lime"
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  router.push({
                    pathname: "/soal/exercise/[id]",
                    params: {
                      id: type,
                    },
                  });
                  setUserData({
                    ...userData,
                    name: nama,
                    class: kelas,
                    school: sekolah,
                  });
                }}
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
    </AnswerProvider>
  );
};

const styles = StyleSheet.create({
  nama: { fontFamily: "PMedium", fontSize: 16 },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 20,
    fontFamily: "PRegular",
    fontSize: 13,
    backgroundColor: "white",
  },
});

export default Rename;
