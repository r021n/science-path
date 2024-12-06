import { View, Text, FlatList } from "react-native";
import React from "react";

const TextList = ({ text, tujuan = false }) => {
  const data = text.content;
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        gap: 10,
        width: "100%",
      }}
    >
      <Text
        style={{
          //   backgroundColor: "pink",
          width: "20%",
          fontFamily: "PSemi",
          fontSize: 13,
        }}
      >
        {text.sub}
      </Text>
      <Text
        style={{
          //   backgroundColor: "yellow",
          width: "1%",
          fontFamily: "PSemi",
          fontSize: 13,
        }}
      >
        :
      </Text>
      {tujuan ? (
        <View
          style={{ display: "flex", flexDirection: "column", width: "75%" }}
        >
          {data.map((item, index) => (
            <View style={{ display: "flex", flexDirection: "row" }} key={index}>
              <Text
                numberOfLines={7}
                style={{ width: 15, fontFamily: "PSemi", fontSize: 13 }}
              >{`${index + 1}. `}</Text>
              <Text
                numberOfLines={7}
                style={{
                  textAlign: "justify",
                  paddingRight: 10,
                  fontFamily: "PSemi",
                  fontSize: 13,
                }}
              >{`${item}`}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text
          style={{
            // backgroundColor: "lime",
            maxWidth: "76.5%",
            textAlign: "justify",
            fontFamily: "PSemi",
            fontSize: 13,
          }}
        >
          {text.content}
        </Text>
      )}
    </View>
  );
};

export default TextList;
