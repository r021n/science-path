import { View } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import CarLab from "../../components/simulator/carSimulator/carLab";
import CarIntro from "../../components/simulator/carSimulator/carIntro";

const CarSimulator = () => {
  const navigation = useNavigation();
  const [page, setPage] = React.useState(0);

  const listShow = [CarIntro, CarLab];
  const ShowLab = listShow[page];

  React.useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <ShowLab setPage={setPage} />
    </View>
  );
};

export default CarSimulator;
