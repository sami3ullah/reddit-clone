import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import { useSignOut } from "react-firebase-hooks/auth";
import AuthButtons from "./AuthButtons";
import { auth } from "@/src/firebase/clientApp";
import { User } from "firebase/auth";
import NavIcons from "./NavIcons";
import ProfileMenu from "./ProfileMenu";

type Props = {
  user?: User | null;
};

const RightContent = ({ user }: Props) => {
  const [signOut, loading, error] = useSignOut(auth);

  return (
    <>
      <AuthModal user={user} />
      <Flex justify="center" align="center">
        {user ? <NavIcons /> : <AuthButtons />}
        <ProfileMenu user={user} />
      </Flex>
    </>
  );
};

export default RightContent;
