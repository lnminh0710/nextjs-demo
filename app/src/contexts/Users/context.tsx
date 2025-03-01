"use client";
import { createContext } from "react";
import { UserItem } from "../../models/UserModel";

interface DemoContextInterface {
    data: UserItem[];
    totalMoney: number;
    updateTotalAmount?: (amount: number) => void;
}

export const DemoContextDefaultValue: DemoContextInterface = {
    data: [],
    totalMoney: 0,
};

export const DemoContext = createContext<DemoContextInterface>(
    DemoContextDefaultValue
);
