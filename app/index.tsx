import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="p-4 bg-city-blue mx-auto flex-1 flex-col items-center justify-center">
      <Text className=" text-primary">Latest News</Text>
      <Text className="text-secondary">
        Stay updated with City
      </Text>
    </View>
  );
}
