"use client";
import { createContext } from "react";
import { UserItem } from "../../models/UserModel";

interface AuthenticationInterface {
    data: UserItem[];
    totalMoney: number;
    updateTotalAmount?: (amount: number) => void;
}

export const AuthenticateDefaultValue: AuthenticationInterface = {
    data: [],
    totalMoney: 0,
};

export const AuthenticationContext = createContext<AuthenticationInterface>(
    AuthenticateDefaultValue
);
