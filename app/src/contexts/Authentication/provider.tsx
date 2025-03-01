/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useMemo } from "react";
import { AuthenticationContext } from "./context";

export default function AuthenticationProvider({ children, data }: any) {
    console.log(`Author:minh.lam , AuthenticationProvider , data:`, data);

    const value = useMemo(
        () => ({
            data,
        }),
        [data]
    );

    return (
        <AuthenticationContext.Provider value={value}>
            {children}
        </AuthenticationContext.Provider>
    );
}
