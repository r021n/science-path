import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Materi2 = () => {
  const data = [
    {
      id: "1.",
      content:
        "Melakukan penghematan listrik dengan mematikan lampu, kipas angin, atau alat elektronik saat tidak digunakan.",
    },
    {
      id: "2.",
      content:
        "Melakukan kegiatan penghijauan di sekolah atau lingkungan sekitar, karena pohon mampu menyerap CO₂ dan menghasilkan oksigen.",
    },
    {
      id: "3.",
      content:
        "Menggunakan energi alternatif seperti memanfaatkan cahaya matahari untuk menghasilkan listrik melalui panel surya, menggunakan aliran air sungai atau bendungan untuk menghasilkan listrik, dll.",
    },
    {
      id: "4.",
      content:
        "Mengurangi penggunaan alat elektronik maupun produk yang menghasilkan CFC seperti AC, kulkas, semprotan aerosol, dll.",
    },
    {
      id: "5.",
      content:
        "Memilih berjalan kaki, naik sepeda, atau menggunakan transportasi umum agar mengurangi penggunaan kendaraan berbahan bakar fosil.",
    },
    {
      id: "6.",
      content: "Melakukan 3R yaitu reduce, reuse, dan recycle.",
    },
    {
      id: "7.",
      content:
        "Memberitahu teman dan keluarga tentang pentingnya mencegah pemanasan global.",
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
