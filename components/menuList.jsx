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
        paddingHorizontal: 120,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          //   height: "100%",
          justifyContent: "space-between",
          gap: 17,
          // backgroundColor: "lime",
          alignItems: "center",
          paddingVertical: 10,
        }}
      >
        <View style={{ maxWidth: "30%" }}>
          <TouchableOpacity onPress={() => router.push("/introduction")}>
            <Image
              source={require("../assets/images/pendahuluan_menu.png")}
              resizeMode="cover"
              style={{
                width: 200,
                height: 300,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            // backgroundColor: "white",
            maxWidth: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            gap: 17,
          }}
        >
          <View
            style={{
              // backgroundColor: "blue",
              display: "flex",
              maxWidth: "96.4%",
              maxHeight: "50%",
              flexDirection: "row",
              justifyContent: "space-between",
              gap: 17,
            }}
          >
            <View
              style={{
                // backgroundColor: "purple",
                maxWidth: "50%",
                height: "100%",
              }}
            >
              <TouchableOpacity onPress={() => router.push("/materi")}>
                <Image
                  source={require("../assets/images/materi_menu.png")}
                  resizeMode="cover"
                  style={{
                    width: 223,
                    height: 150,
                  }}
                />
              </TouchableOpacity>
            </View>
            <View
              style={{
                // backgroundColor: "purple",
                maxWidth: "50%",
                height: "100%",
              }}
            >
              <TouchableOpacity onPress={() => router.push("/simulator")}>
                <Image
                  source={require("../assets/images/simulasi_menu.png")}
                  resizeMode="cover"
                  style={{
                    width: 223,
                    height: 150,
                  }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              // backgroundColor: "yellow",
              width: "50%",
            }}
          >
            <TouchableOpacity onPress={() => router.push("/soal")}>
              <Image
                source={require("../assets/images/soal_menu.png")}
                resizeMode="cover"
                style={{
                  width: 463,
                  height: 135,
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
