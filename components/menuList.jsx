import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

const MenuList = () => {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: "10%",
        marginVertical: "1%",
        // backgroundColor: "pink",
      }}
    >
      <View
        style={{
          display: "flex",
          flex: 1,
          flexDirection: "row",
          // height: "100%",
          justifyContent: "center",
          gap: 17,
          // backgroundColor: "lime",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <View style={{ flex: 1 }}>
          <TouchableOpacity onPress={() => router.push("/introduction")}>
            <Image
              source={require("../assets/images/pendahuluan_menu.png")}
              resizeMode="cover"
              style={{
                width: "100%",
                height: "100%",
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            // backgroundColor: "white",
            width: "60%",
            height: "100%",
            // flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            gap: 17,
          }}
        >
          <View
            style={{
              // backgroundColor: "blue",
              display: "flex",
              // maxWidth: "96.4%",
              // maxHeight: "50%",
              flex: 1,
              flexDirection: "row",
              justifyContent: "center",
              gap: 17,
            }}
          >
            <View
              style={{
                // backgroundColor: "purple",
                // maxWidth: "50%",
                // height: "100%",
                flex: 1,
              }}
            >
              <TouchableOpacity onPress={() => router.push("/materi")}>
                <Image
                  source={require("../assets/images/materi_menu.png")}
                  resizeMode="cover"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                // backgroundColor: "purple",
                // maxWidth: "50%",
                // height: "100%",
                flex: 1,
              }}
            >
              <TouchableOpacity onPress={() => router.push("/simulator")}>
                <Image
                  source={require("../assets/images/simulasi_menu.png")}
                  resizeMode="cover"
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: "yellow",
              // width: "50%",
              flex: 1,
            }}
          >
            <TouchableOpacity onPress={() => router.push("/soal")}>
              <Image
                source={require("../assets/images/soal_menu.png")}
                resizeMode="cover"
                style={{
                  width: "100%",
                  height: "100%",
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default MenuList;
