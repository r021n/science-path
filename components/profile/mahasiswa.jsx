import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";

const Mahasiswa = () => {
  return (
    <View
      style={{
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        paddingVertical: 5,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 20,
        }}
      >
        <Image
          source={require("../../assets/images/mahasiswa.png")}
          resizeMode="contain"
          style={{
            height: 110,
            width: 80,
            justifyContent: "center",
            borderRadius: 7,
            // backgroundColor: "skyblue",
          }}
        />
        <View>
          <Text
            style={{ fontFamily: "PMedium", fontSize: 12, lineHeight: "17" }}
          >{`Pengembang`}</Text>
          <Text
            style={[styles.identity, { lineHeight: "17" }]}
          >{`Novelina Andika Kusuma, S.Pd.`}</Text>
          <Text
            style={[styles.identity, { lineHeight: "17" }]}
          >{`S2 Teknologi Pendidikan FKIP UNS`}</Text>
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        <Text
          style={{
            fontFamily: "PMedium",
            fontSize: 12,
            textAlign: "center",
            lineHeight: "17",
          }}
        >
          Dosen Pembimbing
        </Text>
        <Text
          style={[styles.identity, { textAlign: "center", lineHeight: "17" }]}
        >
          Prof. Dr. Sri Yamtinah, M.Pd.
        </Text>
        <Text
          style={[styles.identity, { textAlign: "center", lineHeight: "17" }]}
        >
          Dr. Fatma Sukmawati, M.Pd.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  identity: { fontFamily: "PSemi", fontSize: 13 },
});

export default Mahasiswa;
