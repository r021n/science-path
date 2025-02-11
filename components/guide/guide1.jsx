import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const guideList = [
  {
    title: "Pendahuluan",
    description:
      "berisi capaian pembelajaran serta tujuan pembelajaran yang akan dicapai",
  },
  {
    title: "Materi",
    description: "berisi materi-materi dari sub-bab pemanasan global",
  },
  {
    title: "Simulator",
    description: "berisi pilihan simulator terkait fenomena pemanasan global.",
  },
  {
    title: "Latihan Soal",
    description:
      "berisi soal pre-test dan post-test dalam bentuk pilihan ganda terkait sub-bab pemanasan global.",
  },
  {
    title: "Informasi",
    description:
      "berisikan informasi terkait cara pemakaian aplikasi dan profil pengembang aplikasi.",
  },
  {
    title: "Logo sound",
    description: "audio yang akan diputar Ketika logo sound di klik.",
  },
];

const Guide1 = () => {
  const chars = ["a", "b", "c", "d", "e", "f"];
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontFamily: "PBold", fontSize: 20, textAlign: "center" }}>
        Tampilan dan Menu Utama pada Aplikasi SciencePath
      </Text>
      <Image
        source={require("../../assets/images/guide_1.png")}
        resizeMode="contain"
        style={{
          width: 600,
          height: 350,
          //   backgroundColor: "yellow",
          marginVertical: 10,
          alignSelf: "center",
        }}
      />
      {guideList.map((item, index) => (
        <View
          key={index}
          style={{
            flexDirection: "row",
            marginVertical: 5,
            gap: 10,
          }}
        >
          <View>
            <Text style={styles.textStyle}>{chars[index] + "."}</Text>
          </View>
          <View style={{ width: "95%" }}>
            <Text style={styles.textStyle}>
              <Text style={styles.textBold}>{item.title}</Text>,{" "}
              {item.description}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
};

export default Guide1;

const styles = StyleSheet.create({
  textBold: { fontFamily: "PBold", fontSize: 15, textAlign: "justify" },
  textStyle: { fontFamily: "PMedium", fontSize: 15, textAlign: "justify" },
});
