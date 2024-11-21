import { cardData } from "@/constants/data";
import { Link, useLocalSearchParams } from "expo-router";
import { Text, View, Pressable, Image } from "react-native";
import { useState } from "react";
export default function EditScreen() {
  const { id } = useLocalSearchParams();

  const selectedCard = cardData.find((card) => card.id.toString() === id);

  const [readTime, setReadTime] = useState(
    Number((Math.random() * 5 + 2).toFixed(1))
  );

  return (
    <View className="flex flex-col gap-[1rem] ">
      {selectedCard && (
        <Text className=" text-3xl text-primary font-bold mt-[2rem]">
          {selectedCard.title}
        </Text>
      )}
      <Image className="w-full h-[15rem] " source={selectedCard.image} />
      <Text className="text-xl mx-3  text-highlight">{readTime} min read</Text>
      <Text className="text-secondary mx-3 font-normal text-justify">
        {selectedCard.fullDescription}
      </Text>

      <Pressable className="mx-3 px-4 py-2   rounded-md w-[18vw] bg-secondary">
        
        <Link className="text-tertiary text-xl" href={"/(tabs)"}>
          <Text>Back</Text>
        </Link>
      </Pressable>
    </View>
  );
}
