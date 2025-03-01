"use client";

import { useContext } from "react";
import { DemoContext } from "../../contexts/Users/context";
import { AuthenticationContext } from "../../contexts/Authentication/context";

const HeaderAmount = () => {
    const { totalMoney } = useContext(DemoContext);
    const { data } = useContext(AuthenticationContext);

    return (
        <div className="h-10 flex items-center justify-between mb-4 px-4">
            <div>
                Current user: {data?.firstName} {data?.lastName}
            </div>
            <div className="flex items-center">
                Total money :{" "}
                <div className="ml-1 text-red-600 font-bold"> {totalMoney}</div>
            </div>
        </div>
    );
};

export default HeaderAmount;
