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
    const {
      user: { getProfile },
    } = apiPath;

    axios.getRequest({ path: getProfile, success, error });
  },
  dashboardData: ({ payload, success, error }) => {
    const {
      user: { dashboard },
    } = apiPath;
    axios.getRequest({ path: dashboard, success, error });
  },
};

export default userApi;
