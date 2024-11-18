import { Tabs } from "expo-router";
import "../global.css";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { ThemeProvider } from "../context/ThemeContext";
import { Image } from "react-native";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <Tabs screenOptions={{ headerShown: false }}>
          <Tabs.Screen
           options={{ title: "Home", tabBarIcon: ({ color, size }) => (
            <Image
              source={require("../assets/images/mancity.png")} // Path to your custom image
              style={{ width: size, height: size }} // Adjust size and color
            />
          ), }}
            name="index"
            />
          <Tabs.Screen options={{ title: "FanVoice" }} name="FanVoice" />
          <Tabs.Screen options={{ title: "Fixture" }} name="Fixture" />
          
        </Tabs>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
