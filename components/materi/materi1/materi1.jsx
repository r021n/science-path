import { View, Text } from "react-native";
import React from "react";
import Sub1 from "./subMateri/sub1";
import Sub2 from "./subMateri/sub2";
import Sub3 from "./subMateri/sub3";

const Materi1 = ({ page }) => {
  const materiList = [Sub1, Sub2, Sub3];
  const Materi = materiList[page - 1];
  return (
    <View>
      <Materi />
    </View>
  );
};

export default Materi1;
