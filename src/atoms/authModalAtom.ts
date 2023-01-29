import { atom } from "recoil";

// interface to make other implement the same variables
export interface AuthModalState {
  open: boolean;
  view: "login" | "signup" | "resetPassword";
}

// making defaultModalState use the AutModalState type
const defaultModalState: AuthModalState = {
  open: false,
  view: "login",
};

export const authModalState = atom<AuthModalState>({
  key: "authModalState",
  default: defaultModalState,
});
