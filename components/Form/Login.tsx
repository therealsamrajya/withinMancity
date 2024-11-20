import React from "react";
import { View, Text, TextInput, Pressable } from "react-native";

interface FormProps {
  onNavigate: () => void;
}

export default function Login({ onNavigate }: FormProps) {
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
          keyboardType="email-address"
        />
      </View>

      {/* Password Field */}
      <View className="mb-6">
        <Text className="text-lg text-secondary-700 mb-2">Password</Text>
        <TextInput
          className="border border-secondary rounded-lg p-3 text-base bg-white"
          placeholder="Enter your password"
          secureTextEntry
        />
      </View>

      {/* Submit Button */}
      <Pressable
        className="bg-highlight p-2 rounded-md"
        onPress={() => alert("Logged In!")}
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
