import React, { useState } from "react";
import Login from "@/components/Form/Login";
import Register from "@/components/Form/Register";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native";

const Profile = () => {
  const [isRegistering, setIsRegistering] = useState(false); 

  return (
    <SafeAreaView className="bg-primary flex-1 items-center justify-center">
      <Image
        source={require("@/assets/images/mancity.png")}
        style={{ width: 200, height: 200, marginBottom: 20 }}
      />
      {isRegistering ? (
        <Register onNavigate={() => setIsRegistering(false)} />
      ) : (
        <Login onNavigate={() => setIsRegistering(true)} />
      )}
    </SafeAreaView>
  );
};

export default Profile;
