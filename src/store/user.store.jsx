import { atom } from "recoil";

const user = atom({
  key: "user",
  default: {
    isLoggedIn: false,
    userId: "",
    name: "",
    profilePicture: "",
    username: "",
    email: "",
    isActive: false,
    isEmailVerified: false,
    isUsernameUpdated: false,
    isOnBoardingCompleted: false,
  },
});

export default user;
