import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Guide4 = () => {
  return (
    <View>
      <Text style={styles.textBold}>
        Cara Penggunaan Simulator pada Aplikasi SciencePath
      </Text>
      <Text style={[styles.textBold, { fontSize: 25 }]}>Simulator B</Text>

      <Text style={[styles.textStyle, { marginVertical: 10 }]}>
        Tampilan ”Simulator B”, pada simulator ini disajikan simulasi terkait
        pengaruh Gas Rumah Kaca (GRK) terhadap fenomena pemanasan global. Anda
        dapat mengamati setiap elemen yang berpengaruh pada fenomena tersebut.
        Klik simbol bendera hijau untuk memulai simulasinya.
      </Text>
      <Image
        source={require("../../assets/images/simulator_B_1.png")}
        resizeMode="contain"
        style={{
          width: 600,
          height: 300,
          //   backgroundColor: "yellow",
          alignSelf: "center",
        }}
      />

      <Text style={[styles.textStyle, { marginVertical: 10 }]}>
        Klik ”start engine” untuk menyalakan mesin mobil dan Anda dapat
        memperhatikan perubahan yang terjadi.
      </Text>
      <Image
        source={require("../../assets/images/simulator_B_2.png")}
        resizeMode="contain"
        style={{
          width: 600,
          height: 300,
          //   backgroundColor: "yellow",
          alignSelf: "center",
        }}
      />
      <Text style={[styles.textStyle, { marginVertical: 10 }]}>
        Anda dapat membandingkan kondisi ketika mesin mobil dinyalakan dan tidak
        dinyalakan.
      </Text>
      <Image
        source={require("../../assets/images/simulator_B_3.png")}
        resizeMode="contain"
        style={{
          width: 600,
          height: 300,
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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginTop: 7,
          }}
        >
          <Image
            source={require("../../assets/images/gas.png")}
            resizeMode="contain"
            style={{ width: 25, height: 25 }}
          />
          <Text style={styles.textStyle}>
            {"\t:\tGas Rumah Kaca yang dihasilkan kendaraan bermotor (CO2)"}
          </Text>
        </View>
      </View>

      <Text style={[styles.textStyle, { marginVertical: 20 }]}>
        Untuk mengakhiri simulasi klik simbol lingkarang merah.
      </Text>
    </View>
  );
};

export default Guide4;

const styles = StyleSheet.create({
  textBold: { fontFamily: "PBold", fontSize: 20, textAlign: "center" },
  textStyle: { fontFamily: "PMedium", fontSize: 15, textAlign: "justify" },
});
