"use client";

import { useContext } from "react";
import { AuthenticationContext } from "../contexts/Authentication/context";

export const HeaderComponent = () => {
    const { data } = useContext(AuthenticationContext);

    console.log(`Author:minh.lam , HeaderComponent , data:`, data);

    return (
        <div className="h-15 flex items-center justify-end p-3 border-b-1 bg-white border-[#e8eaee]">
            <div>
                {data?.firstName} {data?.lastName}
            </div>
        </div>
    );
};
