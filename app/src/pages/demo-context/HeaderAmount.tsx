"use client";

import { useContext } from "react";
import { AuthenticationContext } from "../../contexts/Authentication/context";

const HeaderAmount = () => {
    const { totalMoney } = useContext(AuthenticationContext);

    return (
        <div className="h-10 flex items-center justify-center border-b-2 mb-4">
            {totalMoney}
        </div>
    );
};

export default HeaderAmount;
