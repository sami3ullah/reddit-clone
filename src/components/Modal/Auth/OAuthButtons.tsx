import { Button, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

function OAuthButtons() {
  return (
    <Flex direction="column" width="100%" mb={4} gap={2}>
      <Button variant="oauth" mb={2}>
        <Image
          src="/images/googlelogo.png"
          alt="google-logo"
          height="20px"
          mr="auto"
        />
        <Text mr="auto">Continue with Google</Text>
      </Button>
      {/* <Button variant="oauth">Continue with Apple</Button> */}
    </Flex>
  );
}

export default OAuthButtons;
