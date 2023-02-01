import React from "react";
import { Flex, Image } from "@chakra-ui/react";
import { useAuthState } from "react-firebase-hooks/auth";
import RightContent from "./RightContent/RightContent";
import SearchInput from "./SearchInput";
import { auth } from "@/src/firebase/clientApp";

type Props = {
  // user
};

const Navbar = (props: Props) => {
  const [user, loading, error] = useAuthState(auth);

  return (
    <Flex
      height="44px"
      padding="6px 12px"
      bg="white"
      justifyContent="space-between"
    >
      <Flex align="center">
        <Image src="/images/redditFace.svg" height="30px" alt="Reddit Logo" />
        <Image
          src="/images/redditText.svg"
          height="46px"
          alt="Reddit Logo Text"
          display={{ base: "none", md: "unset" }}
        />
      </Flex>
      {/* <Directory /> */}
      <SearchInput />
      <RightContent user={user} />
    </Flex>
  );
};

export default Navbar;
