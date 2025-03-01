"use client";
import { createContext } from "react";
import { UserItem } from "../../models/UserModel";

interface AuthenticationInterface {
    data: UserItem | null;
}

export const AuthenticateDefaultValue: AuthenticationInterface = {
    data: null,
};

export const AuthenticationContext = createContext<AuthenticationInterface>(
    AuthenticateDefaultValue
);
