import React from "react";
import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { auth } from "@/src/firebase/clientApp";

function OAuthButtons() {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  return (
    <Flex direction="column" width="100%" mb={4} gap={2}>
      <Button
        variant="oauth"
        mb={2}
        isLoading={loading}
        onClick={() => {
          signInWithGoogle();
        }}
      >
        <Image
          src="/images/googlelogo.png"
          alt="google-logo"
          height="20px"
          mr="auto"
        />
        <Text mr="auto">Continue with Google</Text>
      </Button>
      {error && (
        <Text color="red" fontSize={10}>
          {error.message}
        </Text>
      )}
      {/* <Button variant="oauth">Continue with Apple</Button> */}
    </Flex>
  );
}

export default OAuthButtons;
