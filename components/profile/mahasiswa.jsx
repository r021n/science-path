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
        paddingVertical: 35,
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: 40,
        }}
      >
        <Image
          source={require("../../assets/images/mahasiswa.jpg")}
          resizeMode="contain"
          style={{
            height: 120,
            width: 80,
            justifyContent: "center",
            backgroundColor: "skyblue",
          }}
        />
        <View>
          <Text
            style={styles.identity}
          >{`Nama                   : Novelina Andika Kusuma`}</Text>
          <Text
            style={styles.identity}
          >{`NIM                        : S812308005`}</Text>
          <Text
            style={styles.identity}
          >{`Program Studi  : S2 Teknologi Pendidikan`}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({ identity: { fontFamily: "PSemi" } });

export default Mahasiswa;
