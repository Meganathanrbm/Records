import user from "../store/user.store";

const BASEURL = "http://localhost:8080/api";
// const BASEURL = "https://api-v2.getrecord.in/api";

const setBaseUrlPrefix = (path) => {
  return BASEURL.concat(path);
};

const apiPathConstants = {
  external: {
    googleOauth: "https://www.googleapis.com/oauth2/v1/userinfo",
  },
  auth: {
    login: setBaseUrlPrefix("/auth/login"),
    logout: setBaseUrlPrefix("/auth/logout"),
    register: setBaseUrlPrefix("/auth/register"),
    googleSSO: setBaseUrlPrefix("/auth/google-sso"),
    verifySession: setBaseUrlPrefix("/auth/verify-session"),
    changePassword: setBaseUrlPrefix("/auth/change-password"),
    forgotPassword: setBaseUrlPrefix("/auth/forgot-password"),
    verificationEmail: setBaseUrlPrefix("/auth/send/verification-email"),
  },
  user: {
    getProfile: (userId) => setBaseUrlPrefix(`/user/profile/${userId}`),
    updateUsername: setBaseUrlPrefix("/user/username"),
    checkUsernameAvailability: setBaseUrlPrefix("/user/username-availability"),
    onboarding: setBaseUrlPrefix("/user/onboarding"),
  },
  youtube: {
    createCourse: setBaseUrlPrefix("/tools/youtube/course"),
    courseDetails: (courseId) =>
      setBaseUrlPrefix(`/tools/youtube/course/${courseId}`),
    CourseByUserId: setBaseUrlPrefix("/tools/youtube/course"),
  },
  skill: {
    getSkills: setBaseUrlPrefix("/skill"),
  },
};

export default apiPathConstants;
