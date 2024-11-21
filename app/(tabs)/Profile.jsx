import React, { useState } from "react";
import Login from "@/components/Form/Login";
import Register from "@/components/Form/Register";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image ,Text} from "react-native";
import Hero from "@/components/hero/Hero";

const Profile = () => {
  const [isRegistering, setIsRegistering] = useState(false); 

  return (
    <SafeAreaView className="bg-primary flex-1 items-center justify-center">
      <Image  className="w-[20vw] mb-[1rem]  h-[10vh]"
        source={require("@/assets/images/mancity.png")}
        // style={{ width: 200, height: 200, marginBottom: 20 }}
      />
      <Hero />
      <Text className="text-highlight text-2xl font-bold mb-[1rem]">Connect with the Champions!</Text>
      {isRegistering ? (
        <Register onNavigate={() => setIsRegistering(false)} />
      ) : (
        <Login onNavigate={() => setIsRegistering(true)} />
      )}
    </SafeAreaView>
  );
};

export default Profile;
