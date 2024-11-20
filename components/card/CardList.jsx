import React from "react";
import { View, FlatList } from "react-native";
import Card from "./Card";
import { cardData } from "@/constants/data";

const CardList = () => {
  return (
    <View >
      <FlatList
        data={cardData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Card item={item} />}
        ItemSeparatorComponent={() => <View className="h-4  " />}
        contentContainerStyle={{ padding: 16, }}
      />
    </View>
  );
};

export default CardList;
