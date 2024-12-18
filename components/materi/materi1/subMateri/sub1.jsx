import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Sub1 = () => {
  return (
    <View>
      <Text style={styles.textStyle}>
        Pemanasan global ialah suatu proses meningkatnya suhu rata-rata
        atmosfer, daratan, dan laut bumi. Pemanasan global terjadi akibat
        aktivitas manusia yang menghasilkan gas buangan seperti karbondioksida
        (CO2), nitrogen oksida (NO3), sulfur oksida (SO4) dan metana (CH4). Gas
        buangan ini dihasilkan dari berbagai aktivitas terutama pembakaran bahan
        bakar fosil dan industri. Gas-gas ini terakumulasi di atmosfer yang
        menyebabkan energi matahari terperangkap di bumi dan tidak dapat
        dipantulkan ke luar angkasa lagi. Akibatnya suhu bumi akan meningkat.
        Fenomena pemanasan global menyebabkan ketidakseimbangan pada ekosistem
        bumi yang ditandai dengan terjadinya peningkatan suhu rata-rata lapisan
        atmosfer bumi, daratan, dan lautan secara bertahap yang diakibatkan oleh
        aktivitas manusia. Kondisi ketidakseimbangan ini jika terjadi secara
        terus menerus akan berdampak pada ekosistem di bumi. Adapun
        dampak-dampak dari pemanasan global yang lain ialah : hilangnya gletser,
        punahnya berbagai jenis hewan, dan terpengaruhnya hasil pertanian, dll.{" "}
      </Text>
      <Text
        style={{
          color: "white",
          fontFamily: "PBold",
          fontSize: 14,
          textAlign: "center",
          marginTop: 10,
        }}
      >
        Proses Pemanasan Global
      </Text>
      <Image
        source={require("../../../../assets/images/proses_pemanasan.png")}
        resizeMode="contain"
        style={{
          width: 380,
          height: 190,
          justifyContent: "center",
          //   backgroundColor: "yellow",
          marginBottom: 10,
          marginHorizontal: "auto",
        }}
      />
      <Text style={styles.textStyle}>
        Sumber gas rumah kaca yang berkumpul di atmosfer berasal dari aktifitas
        kita sehari-hari, dari menggunakan kendaraan bermotor, AC, lemari
        pendingin. Sedangkan gas yang diserap oleh tumbuhan hanya CO2.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    color: "white",
    fontFamily: "PRegular",
    fontSize: 12,
    textAlign: "justify",
  },
});

export default Sub1;
