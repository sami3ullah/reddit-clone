import { authModalState } from "@/src/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

type Props = {};

const Login = (props: Props) => {
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const setModalState = useSetRecoilState(authModalState);

  //   firebase logic
  const onSubmitHandler = () => {};

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update form state
    setLoginForm((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Input
        name="email"
        required
        placeholder="email"
        type="email"
        mb={2}
        fontSize={10}
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        bg="gray.50"
        onChange={onChangeHandler}
      />
      <Input
        name="password"
        required
        placeholder="password"
        type="password"
        fontSize={10}
        _placeholder={{ color: "gray.500" }}
        _hover={{ bg: "white", border: "1px solid", borderColor: "blue.500" }}
        _focus={{
          outline: "none",
          bg: "white",
          border: "1px solid",
          borderColor: "blue.500",
        }}
        mb={2}
        bg="gray.50"
        onChange={onChangeHandler}
      />
      <Button type="submit" width="100%" height="36px" mt={2} mb={2}>
        Login In
      </Button>
      <Flex fontSize={9} justifyContent="center">
        <Text mr={1}>New Here?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => {
            setModalState((prev) => ({
              ...prev,
              view: "signup",
            }));
          }}
        >
          SIGN UP
        </Text>
      </Flex>
    </form>
  );
};

export default Login;
