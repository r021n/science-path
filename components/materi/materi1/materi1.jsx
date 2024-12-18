import { View, Text } from "react-native";
import React from "react";
import Sub1 from "./subMateri/sub1";
import Sub2 from "./subMateri/sub2";
import Sub3 from "./subMateri/sub3";

const Materi1 = ({ page }) => {
  return <View>{page == 1 ? <Sub1 /> : page == 2 ? <Sub2 /> : <Sub3 />}</View>;
};

export default Materi1;
