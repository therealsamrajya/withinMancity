import { Text, View ,Image} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import CardItem from "@/components/CardItem";
// import {cardData} from "../constants/data"
// import Carousel from "react-native-snap-carousel"
// import { useRouter } from "expo-router";
// import { Stack } from "tamagui";
import CardList from "@/components/CardList"
export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-tertiary" >
   <View className="flex-1 flex-col items-center mt-[1rem] ">
    <View className="flex gap-[1rem] flex-row items-center">
    <Image
      source={require("@/assets/images/mancity.png")}
      className="w-[12vw] h-[6vh]"></Image>
      <Text className="
      text-secondary text-2xl font-bold">Within City</Text>
    </View>
     
     
      <View className="flex-1 flex-col w-fit mb-[1rem]">
      <Text className="text-secondary text-xl font-bold mt-6 ml-8">Latest News</Text>
      <CardList />
          
        </View>

   </View>
   </SafeAreaView>
  );
}
