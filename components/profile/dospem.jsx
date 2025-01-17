import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";

const Dospem = () => {
  return (
    <View
      style={{
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        // marginBottom: 20,
      }}
    >
      <Text
        style={{
          textAlign: "center",
          fontFamily: "PBold",
          fontSize: 17,
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
          paddingVertical: 10,
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
    height: 120,
    width: 90,
  },
  name: { textAlign: "center", fontFamily: "PSemi" },
});

export default Dospem;
