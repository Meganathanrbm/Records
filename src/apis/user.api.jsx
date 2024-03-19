import apiPath from "../constants/api-path.constant";

import axios from "../configs/axios-instance";

const userApi = {
  handleOnboarding: ({ payload, success, error }) => {
    const {
      user: { onboarding },
    } = apiPath;
    axios.putRequest({ path: onboarding, payload, success, error });
  },
  handlegetProfile: ({ payload, success, error }) => {
    const getProfile = apiPath.user.getProfile(payload.userId);
    axios.getRequest({ path: getProfile, success, error });
  },
};

export default userApi;
