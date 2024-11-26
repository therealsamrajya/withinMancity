import CustomTextInput from "./CustomTextInput";
import {
  Alert,
  Pressable,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";

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

    try {
      const usersData = await AsyncStorage.getItem("registeredUsers");
      const users = usersData ? JSON.parse(usersData) : [];

      const user = users.find(
        (u: { email: string; password: string }) => u.email === email
      );

      if (user) {
        if (user.password === password) {
          Alert.alert(`Login successful , Welcome back ${user.name}`);
        } else {
          Alert.alert("Error please try again");
        }
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
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

        <Pressable
          accessibilityLabel="Submit Button"
          accessibilityRole="button"
          className="bg-highlight px-2 py-1 self-start rounded-md"
          onPress={handleSubmit}
        >
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
    </KeyboardAvoidingView>
  );
}
