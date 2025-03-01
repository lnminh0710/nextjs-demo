/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useCallback, useMemo, useState } from "react";
import { DemoContext } from "./context";

export default function DemoContextProvider({ children, data }: any) {
    console.log(`Author:minh.lam , DemoContextProvider , data:`, data);

    const [totalMoney, setTotalMoney] = useState<number>(0);

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
        <DemoContext.Provider value={value}>{children}</DemoContext.Provider>
    );
}
