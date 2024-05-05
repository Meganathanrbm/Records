import apiPath from "../constants/api-path.constant";

import axios from "../configs/axios-instance";

const profileApi = {
  updateBasicProfile: ({ payload, success, error }) => {
    const {
      profile: { updateBasicProfile },
    } = apiPath;
    axios.putRequest({ path: updateBasicProfile, payload, success, error });
  },
  addEducation: ({ payload, success, error }) => {
    const {
      profile: { addEducation },
    } = apiPath;
    axios.postRequest({ path: addEducation, payload, success, error });
  },
  updateEducation: ({ payload, suffPath, success, error }) => {
    const {
      profile: { updateEducation },
    } = apiPath;
    axios.putRequest({
      path: updateEducation + suffPath,
      payload,
      success,
      error,
    });
  },
  addWorkExperience: ({ payload, success, error }) => {
    const {
      profile: { addWorkExpereince },
    } = apiPath;
    axios.postRequest({ path: addWorkExpereince, payload, success, error });
  },
  updateWorkExperience: ({ payload, success, suffPath, error }) => {
    const {
      profile: { updateWorkExpereince },
    } = apiPath;
    axios.putRequest({
      path: updateWorkExpereince + suffPath,
      payload,
      success,
      error,
    });
  },
  addLicenseCertification: ({ payload, success, error }) => {
    const {
      profile: { addLicenseCertification },
    } = apiPath;
    axios.postRequest({
      path: addLicenseCertification,
      payload,
      success,
      error,
    });
  },
  updateLicenseCertification: ({ payload, suffPath, success, error }) => {
    const {
      profile: { updateLicenseCertification },
    } = apiPath;
    axios.putRequest({
      path: updateLicenseCertification + suffPath,
      payload,
      success,
      error,
    });
  },
  addProject: ({ payload, success, error }) => {
    const {
      profile: { addProject },
    } = apiPath;
    axios.postRequest({
      path: addProject,
      payload,
      success,
      error,
    });
  },
  updateProject: ({ payload, suffPath, success, error }) => {
    const {
      profile: { updateProject },
    } = apiPath;
    axios.putRequest({
      path: updateProject + suffPath,
      payload,
      success,
      error,
    });
  },
  addActivity: ({ payload, success, error }) => {
    const {
      profile: { addActivity },
    } = apiPath;
    axios.postRequest({
      path: addActivity,
      payload,
      success,
      error,
    });
  },
  updateActivity: ({ payload, suffPath, success, error }) => {
    const {
      profile: { updateActivity },
    } = apiPath;
    axios.putRequest({
      path: updateActivity + suffPath,
      payload,
      success,
      error,
    });
  },
};

export default profileApi;
