import { Flex } from "@chakra-ui/react";
import React from "react";
import AuthModal from "../../Modal/Auth/AuthModal";
import AuthButtons from "./AuthButtons";

type Props = {
  // user
};

const RightContent = (props: Props) => {
  return (
    <>
      <AuthModal />
      <Flex justify="center" align="center">
        <AuthButtons />
      </Flex>
    </>
  );
};

export default RightContent;
