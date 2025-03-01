"use client";

import { useContext } from "react";
import { AuthenticationContext } from "../../contexts/Authentication/context";

const HeaderCounter = () => {
    const { data, setCounter } = useContext(AuthenticationContext);

    return (
        <div className="h-10 flex items-center gap-4 mb-4 px-4">
            <div>
                Current user: {data?.firstName} {data?.lastName}
            </div>

            <div
                className="cursor-pointer border px-4 rounded select-none"
                onClick={() => setCounter?.((prev) => (prev += 1))}
            >
                +
            </div>
        </div>
    );
};

export default HeaderCounter;
