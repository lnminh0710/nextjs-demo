"use client";

import { useCallback, useContext, useState } from "react";
import { AuthenticationContext } from "../../contexts/Authentication/context";
import { UserItem } from "../../models/UserModel";
import clsx from "clsx";

const DemoServerSideComponent = () => {
    const [itemSelected, setItemSelected] = useState<string[]>([]);
    const authen = useContext(AuthenticationContext);

    console.log(`Author:minh.lam , DemoServerSideComponent , authen:`, authen);

    const onClickItem = useCallback(
        (user: UserItem) => {
            if (itemSelected.indexOf(user.id) > -1) {
                setItemSelected((prevState) => {
                    return prevState.filter((_item) => _item !== user.id);
                });

                authen.updateTotalAmount?.(-parseFloat(user.money));
            } else {
                setItemSelected((prevState) => {
                    return [...prevState, user.id];
                });
                authen.updateTotalAmount?.(parseFloat(user.money));
            }
        },
        [authen, itemSelected]
    );

    return (
        <div
            className="flex flex-wrap gap-2 m-auto items-center
         justify-center"
        >
            {authen?.data?.map((user, index) => (
                <div
                    key={index}
                    className={clsx(
                        "flex flex-col w-1/5 gap-1 border-2 p-2 rounded-2xl cursor-pointer ",
                        {
                            "border-blue-600 text-blue-700":
                                itemSelected.indexOf(user.id) > -1,
                        }
                    )}
                    onClick={() => onClickItem(user)}
                >
                    <div>Name : {user.name}</div>
                    <div>Account : {user.account}</div>
                    <div>Address : {user.address}</div>
                    <div>
                        Amount of money: <b>{user.money}</b> USD
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DemoServerSideComponent;
