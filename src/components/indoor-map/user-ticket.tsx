import React from "react";
import { FC } from "react";
import { useRecoilValue } from "recoil";
import { getPhoneNumber } from "zmp-sdk";
import { Avatar } from "zmp-ui";
import { userState } from "../../state";

export const UserTicket: FC = () => {
  const user = useRecoilValue(userState);
  const buy = () => {
    getPhoneNumber({});
  }
  return (
    <div onClick={buy} className="rounded-2xl bg-black/80 text-white flex gap-4 p-2 items-center">
      <Avatar online src={user.avatar} />
      <p>
        <b>{user.name}</b><br />
        <small>Mua vé ngay trên Zalo Mini App</small>
      </p>
    </div>
  );
}
