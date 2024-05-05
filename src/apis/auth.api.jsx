// Importing constants
import apiPath from "../constants/api-path.constant";

import axios from "../configs/axios-instance";

const authApi = {
  handleLogin: ({ payload, success, error }) => {
    const {
      auth: { login },
    } = apiPath;

    axios.postRequest({ path: login, payload, success, error });
  },
  handleLogout: ({ success, error }) => {
    const {
      auth: { logout },
    } = apiPath;
    axios.postRequest({ path: logout, success, error });
  },
  handleRegister: ({ payload, success, error }) => {
    const {
      auth: { register },
    } = apiPath;
    axios.postRequest({ path: register, payload, success, error });
  },
  verifySession: ({ payload, success, error, final }) => {
    const {
      auth: { verifySession },
    } = apiPath;
    axios.postRequest({ path: verifySession, payload, success, error, final });
  },
  handleGetUserInfoFromGoogleApi: ({ payload, config, success, error }) => {
    const {
      external: { googleOauth },
    } = apiPath;
    axios.getRequest({ path: googleOauth, config, payload, success, error });
  },
  handleGoogleSSO: ({ payload, config, success, error }) => {
    const {
      auth: { googleSSO },
    } = apiPath;
    axios.postRequest({ path: googleSSO, payload, success, error, config });
  },
  handleVerificationEmail: ({ payload, success, error }) => {
    const {
      auth: { verificationEmail },
    } = apiPath;
    axios.postRequest({ path: verificationEmail, payload, success, error });
  },
  resetPassword: ({ payload, success, error }) => {
    const {
      auth: { forgotPassword },
    } = apiPath;
    axios.postRequest({ path: forgotPassword, payload, success, error });
  },
  changePassword: ({ payload, pathSuff, success, error }) => {
    const {
      auth: { changePassword },
    } = apiPath;
    axios.postRequest({
      path: changePassword + pathSuff,
      payload,
      success,
      error,
    });
  },
};

export default authApi;
