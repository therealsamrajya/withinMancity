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
            options={{
              title: "Home",
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("../assets/images/mancity.png")}
                  style={{ width: size, height: size }}
                />
              ),
            }}
            name="index"
          />

          <Tabs.Screen
            options={{
              title: "FanVoice",
              tabBarIcon: ({ color, size }) => (
                <Image
                  className=" bg-transparent"
                  source={require("../assets/images/fans.png")}
                  style={{ width: size, height: 30, marginBottom: 6 }}
                />
              ),
            }}
            name="FanVoice"
          />

          <Tabs.Screen
            options={{
              title: "Fixture",
              tabBarIcon: ({ color, size }) => (
                <Image
                  source={require("../assets/images/fixture.png")}
                  style={{ width: size, height: size }}
                />
              ),
            }}
            name="Fixture"
          />
        </Tabs>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
