import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Materi2 = () => {
  const data = [
    { id: "1.", content: "Melakukan penghematan listrik." },
    { id: "2.", content: "Menanam pohon dan reboisasi." },
    { id: "3.", content: "Melakukan tebang pilih." },
    { id: "4.", content: "Menggunakan energi alternatif." },
    {
      id: "5.",
      content: "Mengurangi penggunaan alat elektronik yang menghasilkan CFC.",
    },
    {
      id: "6.",
      content: "Mengurangi penggunaan kendaraan berbahan bakar fosil.",
    },
    {
      id: "7.",
      content: "Melakukan 3R yaitu reduce, reuse, dan recycle.",
    },
  ];
  return (
    <View
      style={{
        display: "flex",
        marginTop: 10,
      }}
    >
      {data.map((item, id) => (
        <View
          key={id}
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <Text style={[styles.textStyle, { maxWidth: "5%" }]}>{item.id}</Text>
          <Text style={styles.textStyle}>{item.content}</Text>
        </View>
      ))}
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

export default Materi2;
