import { View, Text, StyleSheet } from "react-native";
import React from "react";

const Sub2 = () => {
  const data = [
    {
      id: "a.",
      title: "Efek Rumah Kaca",
      content:
        "Efek rumah kaca merupakan proses atmosfer untuk menghangatkan planet. Efek rumah kaca terjadi akibat panas yang dipantulkan oleh permukaan bumi yang kemudian terperangkap oleh gas-gas yang berada di atmosfer. Sehingga panas tersebut tidak dapat diteruskan ke luar angkasa, melainkan dipantulkan kembali ke permukaan bumi. Efek rumah kaca ini mempunyai manfaat bagi makhluk hidup, akan tetapi jika terlalu berlebihan akan membahayakan kehidupan yang ada di bumi karena efek rumah kaca mampu merubah iklim dan cuaca yang ada di bumi.",
    },
    {
      id: "b.",
      title: "Meningkatnya Gas Rumah Kaca (GRK)",
      content:
        "Gas yang mempunyai sifat yang merangkap panas, sehingga panas yang terpantul oleh permukaan bumi tidak dapat diteruskan ke luar angkasa. Gas tersebut adalah gas rumah kaca, Gas yang paling berperan dan berpengaruh adalah gas karbondioksida (CO2). Penyebab meningkatnya gas ini adalah dikarenakan pembakaran bahan bakar batu bara, pembakaran minyak bumi, dan pembakaran gas alam.",
    },
    {
      id: "c.",
      title: "Penggunaan CFC yang Tidak Terkontrol",
      content:
        "CFC atau Cloro Flour Carbon merupakan salah satu bahan kimia yang digabungkan menjadi sebuah bahan untuk memproduksi peralatan, terkhusus digunakan untuk membuat peralatan rumah tangga. CFC terdapat pada alat pendingin seperti kulkas dan AC.",
    },
    {
      id: "d.",
      title: "Polusi Kendaraan",
      content:
        "Polusi yang dihasilkan oleh kendaraan yang menggunakan bahan bakar bensin ini seperti motor, mobil, dan kendaraan yang lainnya dimana dari hasil pembakaran tersebut akan menghasilkan gas yang bernama karbondioksida (CO2). Gas karbondioksida ini merupakan salah satu penyebab utama karena gas ini merupakan gas yang merangkap panas sehingga panas tidak bisa diteruskan ke luar angkasa.",
    },
    {
      id: "e.",
      title: "Polusi Gas Metana",
      content:
        "Gas metana adalah suatu gas yang menempati urutan kedua sebagai salah satu penyebab utama terjadinya global warming. Gas metana ini berasal dari bahan-bahan organik yang kekurangan oksigen dari hasil pemecahan bakteri. Misalnya di persawahan, sedangkan pada peternakan, seperti usus hewan ternak, meningkatnya produksi hewan ternak maka akan meningkatkan gas metana yang dilepaskan ke permukaan bumi.",
    },
    {
      id: "f.",
      title: "Pengundulan Hutan",
      content:
        "Hutan sanagt mempunyai fungsi sebagai penyerap karbondioksida (CO2) dan mengeluarkan oksigen. Jika hutan rusak akibat dari penebangan liar yang tidak bertanggung jawab, maka akan terjadilah peningkatan jumlah karbondioksida di atmosfer bumi. Hal inilah yang menyebabkan terjadinya pemanasan global.",
    },
    {
      id: "g.",
      title: "Penggunaan Energi Listrik secara berlebihan",
      content:
        "Energi listrik merupakan salah satu kebutuhan dasar manusia. Tanpa listrik, maka aktifitas kita akan terganggu. Pembangkit tenaga listrik membutuhkan batu bara dan minyak bumi untuk tetap berfungsi. Dari hasil pembakaran batu bara dan minyak bumi itulah yang dapat menghasilkan karbondioksida.",
    },
  ];
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.textStyle}>1. Penyebab</Text>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 10,
        }}
      >
        {data.map((item, id) => (
          <View
            key={id}
            style={{
              flexDirection: "row",
              justifyContent: "center",
              gap: 6,
              paddingLeft: 10,
            }}
          >
            <View style={{}}>
              <Text style={styles.textStyle}>{item.id}</Text>
            </View>
            <View style={{}}>
              <Text style={styles.textStyle}>{item.title}</Text>
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

export default Sub2;
