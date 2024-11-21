import React,{useState} from 'react';
import { View, Text, Image ,Pressable} from 'react-native';
import { useRouter } from 'expo-router';
const Card = ({ item = {} }) => {
  const { 
    title = "Untitled", 
    description = "No description available.", 
    fulldescription = "", 
    image = null // Local image reference
  } = item;

  const router = useRouter();

  const handlePress = (id) => {
    router.push(`/news/${id}`)
  }
  return (
    <View className=" flex-1  justify-center  p-4 rounded-md mb-4">
      <Pressable
        onPress={()=> handlePress(item.id)}>
      {image ? (
        <Image
          source={image}
          className="w-[85vw] h-[15rem]   rounded-md"
          resizeMode="cover" // Adjusts how the image fits within the dimensions
        />
      ) : (
        <View className="w-full h-40 bg-gray-200 rounded-md flex items-center justify-center">
          <Text className="text-gray-500">No Image</Text>
        </View>
      )}
      <Text className="text-primary font-bold text-lg mt-4">{title}</Text>
      <Text className="text-secondary mt-2">{description}</Text>
      {fulldescription && <Text className="text-gray-500 mt-2">{fulldescription}</Text>}
      </Pressable>
    </View>
  );
};

export default Card;
