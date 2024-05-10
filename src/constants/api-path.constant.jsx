import user from "../store/user.store";

const BASEURL = "http://localhost:8080/api";
// const BASEURL = "https://records-awl1.onrender.com/api";
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
    getProfile: setBaseUrlPrefix(`/user/profile`),
    updateUsername: setBaseUrlPrefix("/user/username"),
    checkUsernameAvailability: setBaseUrlPrefix("/user/username-availability"),
    onboarding: setBaseUrlPrefix("/user/onboarding"),
    dashboard: setBaseUrlPrefix("/user/dashboard"),
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
  learnings: {
    getLearnings: setBaseUrlPrefix("/learnings"),
  },
  profile: {
    updateBasicProfile: setBaseUrlPrefix("/user/profile/basic-profile"),
    addEducation: setBaseUrlPrefix("/user/profile/education"),
    updateEducation: setBaseUrlPrefix("/user/profile/education/"),
    addWorkExpereince: setBaseUrlPrefix("/user/profile/work-experience"),
    updateWorkExpereince: setBaseUrlPrefix("/user/profile/work-experience/"),
    addLicenseCertification:setBaseUrlPrefix("/user/profile/license-certification"),
    updateLicenseCertification:setBaseUrlPrefix("/user/profile/license-certification/"),
    addProject:setBaseUrlPrefix("/user/profile/project"),
    updateProject:setBaseUrlPrefix("/user/profile/project/"),
    addActivity:setBaseUrlPrefix("/user/profile/activity"),
    updateActivity:setBaseUrlPrefix("/user/profile/activity/"),

  },
};

export default apiPathConstants;
