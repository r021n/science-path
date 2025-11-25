import { View, Text, Image, StyleSheet, Animated } from "react-native";
import React from "react";
import {
  PinchGestureHandler,
  State,
  GestureHandlerRootView,
} from "react-native-gesture-handler";

const Sub1 = () => {
  const scale = React.useRef(new Animated.Value(1)).current;
  const baseScale = React.useRef(new Animated.Value(1)).current;

  const onPinchGestureEvent = Animated.event(
    [{ nativeEvent: { scale: scale } }],
    { useNativeDriver: true }
  );

  const onPinchHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      baseScale.setValue(scale._value);
      scale.setValue(1);
    }
  };
  return (
    <GestureHandlerRootView>
      <View>
        <Image
          source={require("../../../../assets/images/intro_materi.jpg")}
          resizeMode="contain"
          style={{
            width: "100%",
            height: 295,
            flex: 1,
            justifyContent: "center",
            marginBottom: 10,
            marginHorizontal: "auto",
          }}
        />
        <Image
          source={require("../../../../assets/images/quote.png")}
          resizeMode="contain"
          style={{
            width: "100%",
            height: 170,
            flex: 1,
            justifyContent: "center",
            marginHorizontal: "auto",
            marginBottom: 10,
          }}
        />
        <Text style={styles.textStyle}>
          Perbedaan suhu ini erat kaitannya dengan fenomena pemanasan global,
          yaitu suatu proses meningkatnya suhu rata-rata atmosfer, daratan, dan
          lautan bumi akibat aktivitas manusia. Pemanasan global terjadi karena
          gas buangan seperti karbondioksida (CO₂), nitrogen oksida (NO₃),
          sulfur oksida (SO₄), dan metana (CH₄) yang dihasilkan dari pembakaran
          bahan bakar fosil dan industri, terakumulasi di atmosfer sehingga
          menyebabkan energi matahari terperangkap dan tidak dapat dipantulkan
          kembali ke luar angkasa. Akibatnya, suhu bumi meningkat secara
          bertahap, menciptakan ketidakseimbangan ekosistem.{" "}
        </Text>
        <Text style={[styles.textStyle, { marginVertical: 10 }]}>
          Di perkotaan, jumlah kendaraan bermotor dan bangunan tinggi
          memperburuk efek ini karena minimnya tumbuhan yang mampu menyerap CO₂
          dan memberikan efek pendinginan melalui proses evapotranspirasi.
          Sebaliknya, di daerah yang dipenuhi tumbuhan, suhu lebih rendah karena
          tumbuhan berperan dalam menyerap gas rumah kaca serta mengurangi panas
          dengan melepaskan uap air ke udara. Jika kondisi pemanasan global
          terus berlanjut, dampaknya dapat meluas, seperti mencairnya gletser,
          kepunahan berbagai spesies hewan, dan penurunan hasil pertanian, yang
          semakin memperburuk ketidakseimbangan ekosistem bumi.{" "}
        </Text>
        <Text
          style={{
            color: "white",
            fontFamily: "PBold",
            fontSize: 14,
            textAlign: "center",
          }}
        >
          Proses Pemanasan Global
        </Text>
        <PinchGestureHandler
          onGestureEvent={onPinchGestureEvent}
          onHandlerStateChange={onPinchHandlerStateChange}
        >
          <Animated.Image
            source={require("../../../../assets/images/proses_pemanasan.png")}
            resizeMode="contain"
            style={{
              width: "100%",
              height: 260,
              flex: 1,
              justifyContent: "center",
              marginBottom: 10,
              marginHorizontal: "auto",
              transform: [{ scale: Animated.multiply(scale, baseScale) }],
            }}
          />
        </PinchGestureHandler>
        {/* <Image
        source={require("../../../../assets/images/proses_pemanasan.png")}
        resizeMode="contain"
        style={{
          width: "100%",
          height: 260,
          flex: 1,
          justifyContent: "center",
          // backgroundColor: "yellow",
          marginBottom: 10,
          marginHorizontal: "auto",
        }}
      /> */}
        <Text style={styles.textStyle}>
          Sumber gas rumah kaca yang berkumpul di atmosfer berasal dari
          aktifitas kita sehari-hari, dari menggunakan kendaraan bermotor, AC,
          lemari pendingin. Sedangkan gas yang diserap oleh tumbuhan hanya CO₂.
        </Text>
      </View>
    </GestureHandlerRootView>
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

export default Sub1;
