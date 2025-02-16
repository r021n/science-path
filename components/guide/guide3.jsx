import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Guide3 = () => {
  return (
    <View>
      <Text style={styles.textBold}>
        Cara Penggunaan Simulator pada Aplikasi SciencePath
      </Text>
      <Text style={[styles.textBold, { fontSize: 25 }]}>Simulator A</Text>

      <Text style={[styles.textStyle, { marginVertical: 10 }]}>
        Tampilan ”Simulator A”, pada simulator ini disajikan simulasi terkait
        fenomena efek rumah kaca. Anda dapat mengamati setiap elemen yang
        berpengaruh pada fenomena tersebut. Klik simbol bendera hijau untuk
        memulai simulasinya
      </Text>
      <Image
        source={require("../../assets/images/simulator_A_1.png")}
        resizeMode="contain"
        style={{
          width: 550,
          height: 270,
          // backgroundColor: "yellow",
          alignSelf: "center",
        }}
      />

      <Text style={[styles.textStyle, { marginVertical: 10 }]}>
        Kemudian akan muncul pilihan variasi presentase rumput yang menutupi
        permukaan tanah.
      </Text>
      <Image
        source={require("../../assets/images/simulator_A_2.png")}
        resizeMode="contain"
        style={{
          width: 550,
          height: 270,
          //   backgroundColor: "yellow",
          alignSelf: "center",
        }}
      />
      <Text style={[styles.textStyle, { marginVertical: 10 }]}>
        Anda dapat membandingkan pengaruh setiap elemen dalam fenomena tersebut
        pada tanah yang tertutup rumput dan tanah yang tidak tertutup rumput.
      </Text>
      <Image
        source={require("../../assets/images/simulator_A_3.png")}
        resizeMode="contain"
        style={{
          width: 550,
          height: 270,
          //   backgroundColor: "yellow",
          alignSelf: "center",
        }}
      />

      {/* information for the picture */}
      <View style={{ marginTop: 10 }}>
        <Text style={styles.textStyle}>Keterangan</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 7,
          }}
        >
          <Image
            source={require("../../assets/images/sun_light.png")}
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
            source={require("../../assets/images/heat.png")}
            resizeMode="contain"
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.textStyle}>
            {"\t:\tEnergi panas yang dipancarkan sebagai pancaran infra merah"}
          </Text>
        </View>
      </View>

      <Text style={[styles.textStyle, { marginVertical: 20 }]}>
        Untuk mengakhiri simulasi klik simbol lingkarang merah.
      </Text>
    </View>
  );
};

export default Guide3;

const styles = StyleSheet.create({
  textBold: { fontFamily: "PBold", fontSize: 20, textAlign: "center" },
  textStyle: { fontFamily: "PMedium", fontSize: 15, textAlign: "justify" },
});
