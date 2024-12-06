import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Simulator = () => {
  return (
    <View>
      <Link href={"/simulator/carSimulator"}>car simulator</Link>
      <Link href={"/simulator/grassSimulator"}>grass simulator</Link>
    </View>
  );
};

export default Simulator;
