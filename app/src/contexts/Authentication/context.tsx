"use client";
import { createContext, Dispatch, SetStateAction } from "react";
import { UserItem } from "../../models/UserModel";

interface AuthenticationInterface {
    data: UserItem | null;
    counter: number;
    setCounter?: Dispatch<SetStateAction<number>>;
}

export const AuthenticateDefaultValue: AuthenticationInterface = {
    data: null,
    counter: 0,
};

export const AuthenticationContext = createContext<AuthenticationInterface>(
    AuthenticateDefaultValue
);
