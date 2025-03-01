/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback, useMemo, useState } from "react";
import { AuthenticationContext } from "./context";

export default function AuthenticationProvider({ children, data }: any) {
    console.log(`Author:minh.lam , AuthenticationProvider , data:`, data);

    const [totalMoney, setTotalMoney] = useState<number>(0);

    console.log(
        `Author:minh.lam , AuthenticationProvider , totalMoney:`,
        totalMoney
    );

    const updateTotalAmount = useCallback((amount: number) => {
        console.log(`Author:minh.lam , updateTotalAmount , amount:`, amount);
        setTotalMoney((prevState) => (prevState += amount));
    }, []);

    const value = useMemo(
        () => ({
            data,
            totalMoney,
            updateTotalAmount,
        }),
        [data, totalMoney, updateTotalAmount]
    );

    return (
        <AuthenticationContext.Provider value={value}>
            {children}
        </AuthenticationContext.Provider>
    );
}
