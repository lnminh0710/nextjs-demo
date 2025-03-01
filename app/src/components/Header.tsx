"use client";

import { useContext } from "react";
import { AuthenticationContext } from "../contexts/Authentication/context";
import Link from "next/link";

export const HeaderComponent = () => {
    const { data } = useContext(AuthenticationContext);

    console.log(`Author:minh.lam , HeaderComponent , data:`, data);

    return (
        <div className="h-15 flex items-center justify-between p-3 border-b-1 bg-white border-[#e8eaee]">
            <div className="flex items-center gap-1 text-blue-700">
                <Link href={"demo-1"}>Demo 1</Link>
                <Link href={"demo-2"}>Demo 2</Link>
            </div>
            <div>
                {data?.firstName} {data?.lastName}
            </div>
        </div>
    );
};
