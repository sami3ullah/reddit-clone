import { authModalState } from "@/src/atoms/authModalAtom";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";

type Props = {};

const Signup = (props: Props) => {
  const onSubmitHandler = () => {};

  const [signUpForm, setSignUpForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const setModalState = useSetRecoilState(authModalState);

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    // update form state
    setSignUpForm((prev) => ({
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
      <Input
        name="confirmPassword"
        required
        placeholder="Confirm Password"
        type="confirmPassword"
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
      <Button
        type="submit"
        width="100%"
        background="#ff3c00"
        _hover={{
          background: "#ff3c00",
          opacity: ".80",
        }}
        height="36px"
        mt={2}
        mb={2}
      >
        Sign Up
      </Button>
      <Flex fontSize={9} justifyContent="center">
        <Text mr={1}>Already a redditor?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          cursor="pointer"
          onClick={() => {
            setModalState((prev) => ({
              ...prev,
              view: "login",
            }));
          }}
        >
          Login
        </Text>
      </Flex>
    </form>
  );
};

export default Signup;
