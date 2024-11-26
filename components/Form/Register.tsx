import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  Alert,
  ActivityIndicator,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import CustomTextInput from "./CustomTextInput";

// Define the FormProps interface
interface FormProps {
  onNavigatetoLogin: () => void;
}

const Register: React.FC<FormProps> = ({ onNavigatetoLogin }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password: string) => {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
  };

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
      Alert.alert("Error", "Failed to check existing users. Please try again.");
      return false;
    }
  };

  const saveRegisterData = async () => {
    try {
      setLoading(true);

      const userExists = await checkExistingUser(email);
      if (userExists) {
        Alert.alert("Error", "User with this email already exists");
        setLoading(false);
        return false;
      }

      const existingUsers = await AsyncStorage.getItem("registeredUsers");
      const users = existingUsers ? JSON.parse(existingUsers) : [];
      users.push({ name, email, password });
      setSuccessMessage("Registration successful!");

      await AsyncStorage.setItem("registeredUsers", JSON.stringify(users));
      setLoading(false);
      setSuccessMessage("Registration successful!");
      return true;
    } catch (error) {
      console.error("Failed to save user data", error);
      setLoading(false);
      Alert.alert("Error", "Registration failed. Please try again.");
      return false;
    }
  };

  const handleSubmit = async () => {
    if (!name || !email || !password) {
      Alert.alert("Error", "Please fill all the required fields.");
      return;
    }

    if (!validateEmail(email)) {
      Alert.alert("Error", "Invalid email format.");
      return;
    }

    if (!validatePassword(password)) {
      Alert.alert(
        "Error",
        "Password must contain at least 8 characters, including letters and numbers."
      );
      return;
    }

    const registrationSuccessful = await saveRegisterData();
    if (registrationSuccessful) {
      Alert.alert("Success", "Registration successful!");
      onNavigatetoLogin();
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View className="flex-1 bg-tertiary px-4 py-3 text-secondary w-[90vw] max-h-[55vh] font-bold">
          <Text className="text-2xl font-bold text-center text-secondary mb-6">
            Register
          </Text>

          <CustomTextInput
            label="Name"
            placeholder="Enter your name"
            value={name}
            onChangeText={setName}
          />

          <CustomTextInput
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <CustomTextInput
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />

          <Pressable className="bg-highlight px-2 py-1 rounded-md self-start" onPress={handleSubmit}>
            <Text className="text-tertiary text-sm">Submit</Text>
          </Pressable>

          {loading && (
            <View className="flex justify-center items-center mt-4">
              <ActivityIndicator size="large" color="#0000ff" />
            </View>
          )}

          <View className="flex-row justify-center items-center mt-[1rem]">
            <Text className="text-base text-secondary font-bold">
              Already have an account?{" "}
            </Text>
            <Pressable
            accessibilityLabel="Login Button"
            accessibilityRole="button"
            onPress={onNavigatetoLogin}>
              <Text className="text-base text-highlight font-bold underline">
                Login
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Register;
