import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Alert } from "react-native";

interface FormProps {
  onNavigate: () => void;
}

export default function Register({ onNavigate }: FormProps) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const checkExistingUser = async (userEmail: string) => {
    try {
      const existingUsers = await AsyncStorage.getItem("registeredUsers");
      if (existingUsers) {
        const users = JSON.parse(existingUsers);
        return users.some(
          (user: { email: string }) => user.email === userEmail
        );
      }
      return false;
    } catch (error) {
      console.error("Failed to fetch the users", error);
      return false;
    }
  };

  const saveRegisterData = async () => {
    try {
      const userExists = await checkExistingUser(email);

      if (userExists) {
        Alert.alert("Error", "User with this email already exists");
        return false;
      }

      const existingUsers = await AsyncStorage.getItem("registeredUsers");
      const users = existingUsers ? JSON.parse(existingUsers) : [];
      users.push({ name, email, password });

      await AsyncStorage.setItem("registeredUsers", JSON.stringify(users));
      return true;
    } catch (error) {
      console.error("Failed to fetch Data", error);
    }
  };

  const handleSubmit = async () => {
    if (!name || !email || !password) {
      Alert.alert("Pleaase fill all the required filled");
      return;
    }

    if (password.length < 8) {
      Alert.alert("Length should be greater than 8");
      return;
    }

    const registrationSuccessful = await saveRegisterData();

    if (registrationSuccessful) {
      Alert.alert("Registration success");
      onNavigate();
    }
  };

  return (
    <View className="flex-1 bg-tertiary px-4 py-3 text-secondary w-[90vw] max-h-[55vh] font-bold">
      <Text className="text-2xl font-bold text-center text-secondary mb-6">
        Register
      </Text>

      {/* Name Field */}
      <View className="mb-4">
        <Text className="text-lg text-secondary-700 mb-2">Name</Text>
        <TextInput
          className="border border-secondary rounded-lg p-3 text-base bg-white"
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
      </View>

      {/* Email Field */}
      <View className="mb-4">
        <Text className="text-lg text-secondary-700 mb-2">Email</Text>
        <TextInput
          className="border border-secondary rounded-lg p-3 text-base bg-white"
          placeholder="Enter your email"
          keyboardType="email-address"
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
      <Pressable className="bg-highlight p-2 rounded-md" onPress={handleSubmit}>
        <Text className="text-tertiary">Submit</Text>
      </Pressable>

      {/* Navigate to Login */}
      <View className="flex-row justify-center items-center mt-[1rem]">
        <Text className="text-base text-secondary font-bold">
          Already have an account?{" "}
        </Text>
        <Pressable onPress={onNavigate}>
          <Text className="text-base text-highlight font-bold underline">
            Login
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
