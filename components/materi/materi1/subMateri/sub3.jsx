import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";

const Sub3 = () => {
  const data = [
    {
      id: "a. ",
      content: "Gunung es mencair karena semakin meningkatnya suhu bumi.",
    },
    {
      id: "b. ",
      content:
        "Curah hujan meningkat dan sering terjadi badai, sehingga menyebabkan banjir.",
    },
    {
      id: "c. ",
      content:
        "Angin akan bertiup lebih kencang dengan pola yang berbeda-beda. Bahkan bisa membentuk angin puting beliung.",
    },
    {
      id: "d. ",
      content:
        "Air tanah akan cepat menguap karena suhu bumi meningkat. Hal ini akan menyebabkan tanah menjadi kering dan tandus.",
    },
    {
      id: "e. ",
      content:
        "Cuaca menjadi sulit untuk di prediksi dan bahkan akan jauh lebih ekstrim. Entah itu hujan atau kekeringan.",
    },
    {
      id: "f. ",
      content:
        "Kenaikan permukaan laut yang sangat banyak berpotensi menyebabkan terjadinya tsunami, banjir, dan pulau-pulau kecil akan tenggelam.",
    },
    {
      id: "g. ",
      content: "Menyebabkan kekeringan yang berkepanjangan.",
    },
  ];
  return (
    <View>
      <Text style={styles.textStyle}>2. Dampak</Text>
      <Image
        source={require("../../../../assets/images/dampak.jpg")}
        resizeMode="contain"
        style={{
          width: 550,
          height: 370,
          marginTop: 10,
          // backgroundColor: "yellow",
          marginHorizontal: "auto",
        }}
      />
      <View style={{ marginTop: 10, paddingLeft: 10 }}>
        {data.map((item, id) => (
          <View key={id}>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                gap: 2,
              }}
            >
              <Text style={styles.textStyle}>{item.id}</Text>
              <Text style={styles.textStyle}>{item.content}</Text>
            </View>
          </View>
        ))}
      </View>
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

export default Sub3;
