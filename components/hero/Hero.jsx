import { View, Text, Image } from "react-native";
import React from "react";

const Hero = () => {
  return (
    <View className="flex-row mt-[1rem] mb-[2rem] gap-[2rem] border-b border-primary ">
      <View className="flex-col items-center">
        <Image
          className="w-[14vw] h-[10vh]"
          source={require("@/assets/images/pl.png")}
        ></Image>
        <Text className="font-bold text-secondary text-2xl">10</Text>
      </View>

      <View className="flex-col items-center">
        <Image
          className="w-[14vw] h-[10vh]"
          source={require("@/assets/images/fa.png")}
        ></Image>
        <Text className="font-bold text-secondary text-2xl">7</Text>
      </View>

      <View className="flex-col items-center">
        <Image
          className="w-[14vw] h-[10vh]"
          source={require("@/assets/images/ucl.png")}
        ></Image>
        <Text className="font-bold text-secondary text-2xl">1</Text>
      </View>
    </View>
  );
};

export default Hero;
