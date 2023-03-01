import { atom } from "recoil";
import { configAppView, getUserInfo } from "zmp-sdk/apis";

configAppView({
  hideIOSSafeAreaBottom: true,
  hideAndroidBottomNavigationBar: true,
  statusBarType: 'transparent'
})

export const userState = atom({
  key: "user",
  default: getUserInfo({}).then(res => res.userInfo)
});
