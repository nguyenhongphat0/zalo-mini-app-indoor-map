import { atom } from "recoil";
import sdk, { userInfo } from "zmp-sdk";

export const userState = atom<userInfo>({
  key: "user",
  default: sdk.login().then(() => sdk.getUserInfo().then(res => res.userInfo))
});
