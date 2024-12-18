import { View, Image, Text, StyleSheet } from "react-native";
import React from "react";

const Mahasiswa = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        // backgroundColor: "pink",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: 40,
          marginTop: 35,
        }}
      >
        <Image
          source={require("../../assets/images/mahasiswa.jpg")}
          resizeMode="contain"
          style={{ width: 100, height: 150 }}
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
