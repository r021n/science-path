import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Dospem = () => {
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
      <Text
        style={{
          textAlign: "center",
          marginTop: 75,
          fontFamily: "PBold",
          fontSize: 20,
        }}
      >
        Dosen Pembimbing
      </Text>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 100,
          marginTop: -50,
        }}
      >
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/dospem1.jpg")}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.name}>Dr. Fatma Sukmawati, M.Pd</Text>
        </View>
        <View
          style={{
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Image
            source={require("../../assets/images/dospem2.jpg")}
            resizeMode="contain"
            style={styles.image}
          />
          <Text style={styles.name}>Dr. Sri Yamtinah, M.Pd.</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 145,
    width: 100,
  },
  name: { textAlign: "center", fontFamily: "PSemi" },
});

export default Dospem;
