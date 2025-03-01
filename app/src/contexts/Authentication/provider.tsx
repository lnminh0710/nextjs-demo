/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMemo, useState } from "react";
import { AuthenticationContext } from "./context";

export default function AuthenticationProvider({ children, data }: any) {
    const [counter, setCounter] = useState<number>(0);
    console.log(`Author:minh.lam , AuthenticationProvider , data:`, data);

    const value = useMemo(
        () => ({
            data,
            counter,
            setCounter,
        }),
        [counter, data, setCounter]
    );

    return (
        <AuthenticationContext.Provider value={value}>
            {children}
        </AuthenticationContext.Provider>
    );
}
