import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const guideList = [
  `Klik menu “Simulator” pada menu utama yang tersedia.`,
  `Kemudian akan muncul tampilan pilihan simulator yang dapat Anda pilih. ”Simulator A” akan menampilkan terkait fenomena efek rumah kaca dan ”Simulator B” akan menampilkan terkait pengaruh Gas Rumah Kaca (GRK) pada fenomena pemanasan global.`,
];

const Guide2 = () => {
  const chars = ["a", "b"];
  return (
    <View style={{ flex: 1 }}>
      <Text style={{ fontFamily: "PBold", fontSize: 20, textAlign: "center" }}>
        Tampilan Menu “Simulator” pada Aplikasi SciencePath
      </Text>
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
            <Text style={styles.textStyle}>{item}</Text>
          </View>
        </View>
      ))}
      <Image
        source={require("../../assets/images/guide_2.png")}
        resizeMode="contain"
        style={{
          width: 600,
          height: 350,
          //   backgroundColor: "yellow",
          marginVertical: 10,
          alignSelf: "center",
        }}
      />
    </View>
  );
};

export default Guide2;

const styles = StyleSheet.create({
  textBold: { fontFamily: "PBold", fontSize: 15, textAlign: "justify" },
  textStyle: { fontFamily: "PMedium", fontSize: 15, textAlign: "justify" },
});
