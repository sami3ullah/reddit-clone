import { Button, Flex } from "@chakra-ui/react";
import React from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import { useSignOut } from "react-firebase-hooks/auth";
import AuthButtons from "./AuthButtons";
import { auth } from "@/src/firebase/clientApp";

type Props = {
  user: any;
};

const RightContent = ({ user }: Props) => {
  const [signOut, loading, error] = useSignOut(auth);

  return (
    <>
      <AuthModal user={user} />
      <Flex justify="center" align="center">
        {user ? (
          <Button
            onClick={() => {
              signOut();
            }}
          >
            Logout
          </Button>
        ) : (
          <AuthButtons />
        )}
      </Flex>
    </>
  );
};

export default RightContent;
