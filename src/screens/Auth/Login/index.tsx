import React from "react";
import { Button } from "react-native";
import layout from "../../../lib/constants/layout";
import { useAuth } from "../../../lib/context/auth/auth.provider";
import { View } from "../../../theme";

const Login = () => {
  const { signIn } = useAuth();

  return (
    <View
      style={{
        height: layout.window.height,
        width: layout.window.width,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Button title="Sign in" onPress={() => signIn("token")} />
    </View>
  );
};

export default Login;
