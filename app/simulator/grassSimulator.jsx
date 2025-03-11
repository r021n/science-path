import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "expo-router";
import GrassLab from "../../components/simulator/grassSimulator/grassLab";
import GrassIntro from "../../components/simulator/grassSimulator/grassIntro";

const GrassSimulator = () => {
  const navigation = useNavigation();
  const [page, setPage] = React.useState(0);

  const listShow = [GrassIntro, GrassLab];
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

export default GrassSimulator;
