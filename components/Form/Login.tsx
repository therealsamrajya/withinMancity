import CustomTextInput from "./CustomTextInput"; // adjust the path as necessary
import { Alert, Pressable, Text, View } from "react-native";
import { useState } from "react";

interface FormProps {
  onNavigatetoRegister: () => void;
}

export default function Login({ onNavigatetoRegister }: FormProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (!email || !password) {
      Alert.alert("Please fill all the required fields");
      return;
    }

    Alert.alert("Logged in successfully!");
  };

  return (
    <View className="flex-1 bg-tertiary w-[90vw] max-h-[50vh] px-4 py-3 text-secondary font-bold">
      <Text className="text-2xl font-bold text-center text-secondary mb-6">
        Login
      </Text>

      <CustomTextInput
        label="Email"
        value={email}
        onChangeText={setEmail}
        placeholder="Enter your email"
        keyboardType="email-address"
      />

      <CustomTextInput
        label="Password"
        value={password}
        onChangeText={setPassword}
        placeholder="Enter your password"
        secureTextEntry={true}
      />

      <Pressable className="bg-highlight p-2 rounded-md" onPress={handleSubmit}>
        <Text className="text-tertiary">Submit</Text>
      </Pressable>

      <View className="flex-row justify-center items-center mt-[1rem]">
        <Text className="text-base text-secondary font-bold">
          Don’t have an account?{" "}
        </Text>
        <Pressable onPress={onNavigatetoRegister}>
          <Text className="text-base text-highlight font-bold underline">
            Register
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
