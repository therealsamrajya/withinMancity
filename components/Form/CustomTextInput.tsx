// CustomTextInput.tsx
import React from "react";
import { TextInput, View, Text } from "react-native";

interface CustomTextInputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
}) => {
  return (
    <View className="mb-4">
      <Text className="text-lg text-secondary-700 mb-2">{label}</Text>
      <TextInput
        className="border border-secondary rounded-lg p-3 text-base bg-white"
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        accessible={true}
        accessibilityLabel={label}
      />
    </View>
  );
};

export default CustomTextInput;
