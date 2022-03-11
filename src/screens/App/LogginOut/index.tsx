import * as React from "react";
import { useEffect } from "react";
import { LoadingScreen } from "../../../components/LoadingScreen";
import { useAuth } from "../../../lib/context/auth/auth.provider";

// TODO make a "You've been logged out :S" screen

function LogginOut() {
  const { signOut } = useAuth();

  useEffect(() => {
    signOut();
  }, []);

  return <LoadingScreen />;
}

export default LogginOut;
