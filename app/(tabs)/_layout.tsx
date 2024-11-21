import { Tabs } from "expo-router";
import { Image } from "react-native";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        options={{
          title: "Home",
          tabBarIcon: ({ size }) => (
            <Image
              source={require("@/assets/images/mancity.png")}
              style={{ width: size, height: size }}
            />
          ),
        }}
        name="index"
      />

      <Tabs.Screen
        options={{
          title: "FanVoice",
          tabBarIcon: ({ size }) => (
            <Image
              source={require("@/assets/images/fans.png")}
              style={{ width: size, height: 30, marginBottom: 6 }}
            />
          ),
        }}
        name="FanVoice"
      />

      <Tabs.Screen
        options={{
          title: "Fixture",
          tabBarIcon: ({ size }) => (
            <Image
              source={require("@/assets/images/fixture.png")}
              style={{ width: size, height: size }}
            />
          ),
        }}
        name="Fixture"
      />

      <Tabs.Screen
        options={{
          title: "Profile",
          tabBarIcon: ({ size }) => (
            <Image
            source={require("@/assets/images/fixture.png")}
              style={{ width: size, height: 30, marginBottom: 6 }}
            />
          ),
        }}
        name="Profile"
      />
    </Tabs>
  );
}
