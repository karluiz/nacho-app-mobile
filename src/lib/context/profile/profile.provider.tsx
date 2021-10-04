import React, { useContext, useMemo, useState, FC } from "react";
import { IUser } from "../../../types/User.types";
import { IProfileContext, ProfileContext } from "./profile.context";

const ProfileProvider: FC = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null);

  const getUser = (): Promise<IUser> =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          id: "1",
          name: "L",
          email: "fun@nodrize",
        });
      }, 2000);
    });

  // * Set contexts values
  const profileContext = useMemo<IProfileContext>(
    () => ({
      user,
      cleanUser: () => setUser(null),
      setUser: async () => {
        const getUserData = await getUser();
        setUser(getUserData);

        // * Update selected vendor if any

        // * Update push notification tokens if any
      },
    }),
    [user],
  );

  return (
    <ProfileContext.Provider value={profileContext}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);

export default ProfileProvider;
