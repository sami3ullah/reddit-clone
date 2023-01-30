import { authModalState } from "@/src/atoms/authModalAtom";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Button, Flex, Input, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { useSetRecoilState } from "recoil";
import { auth } from "@/src/firebase/clientApp";
import { FIREBASE_ERRORS } from "@/src/firebase/errors";

type Props = {};

const Login = (props: Props) => {
  const setModalState = useSetRecoilState(authModalState);
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    signInWithEmailAndPassword(loginForm.email, loginForm.password);
  };

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
        mb={4}
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
      {/* error message */}
      <Text color="red" fontSize={10}>
        {FIREBASE_ERRORS[error?.message as keyof typeof FIREBASE_ERRORS]}
      </Text>
      <Button
        background="#ff3c00"
        type="submit"
        width="100%"
        height="36px"
        mt={6}
        mb={4}
        _hover={{
          background: "#ff3c00",
          opacity: ".80",
        }}
        isLoading={loading}
      >
        Login In
      </Button>
      <Flex fontSize={9}>
        <Text mr={1}>New to Reddit?</Text>
        <Text
          color="blue.500"
          fontWeight={700}
          textDecoration="underline"
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
