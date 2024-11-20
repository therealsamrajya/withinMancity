import React,{useState} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { View, Text, TextInput, Pressable, Alert } from "react-native";

interface FormProps {
  onNavigate: () => void;
}

export default function Login({ onNavigate }: FormProps) {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const saveLoginData = async () => {
    try {
      await AsyncStorage.setItem("userCredential",JSON.stringify({email,password}))
      Alert.alert("Success","Login Info saved !!")
      console.log(email,password);
      
      
    } catch (error) {
      console.error("Error saving data",error);
      
    }
  }

  const getLoginData = async () => {
    try {
     const jsonValue= await AsyncStorage.getItem("userCredential")
     if(jsonValue != null){
      const loginData = JSON.parse(jsonValue);
      return loginData;
     }
      
    } catch (error) {
      console.error("Error retrieving data",error);
      
    }
  }

  const handleSubmit = async () => {
    if (!email || !password){
      Alert.alert("Pleaase fill all the required filled")
      return
    }
    await saveLoginData();
  
    
    Alert.alert("Logged in successfully !")
  }

  return (
    <View className="flex-1 bg-tertiary w-[90vw] max-h-[50vh] px-4 py-3 text-secondary font-bold">
      <Text className="text-2xl font-bold text-center text-secondary mb-6">
        Login
      </Text>

      {/* Email Field */}
      <View className="mb-4">
        <Text className="text-lg text-secondary-700 mb-2">Email</Text>
        <TextInput
          className="border border-secondary rounded-lg p-3 text-base bg-white"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      {/* Password Field */}
      <View className="mb-6">
        <Text className="text-lg text-secondary-700 mb-2">Password</Text>
        <TextInput
          className="border border-secondary rounded-lg p-3 text-base bg-white"
          placeholder="Enter your password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
      </View>

      {/* Submit Button */}
      <Pressable
        className="bg-highlight p-2 rounded-md"
        onPress={handleSubmit}
      >
        <Text className="text-tertiary">Submit</Text>
      </Pressable>

      <View className="flex-row justify-center items-center mt-[1rem]">
          <Text className="text-base text-secondary font-bold">Don’t have an account? </Text>
          <Pressable onPress={onNavigate}>
            <Text className="text-base text-highlight font-bold underline">Register</Text>
          </Pressable>
        </View>
    </View>
  );
}
