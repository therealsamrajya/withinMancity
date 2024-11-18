import { Text, View } from "react-native";

export default function Home() {
  return (
    <View className="p-4 bg-primary w-full mx-auto flex-1 flex-col items-center justify-center">
      <Text className=" text-primary">Latest News</Text>
      <Text className="text-highlight">
        Stay updated with City
      </Text>
    </View>
  );
}
