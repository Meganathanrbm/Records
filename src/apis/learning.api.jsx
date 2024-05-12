import apiPath from "../constants/api-path.constant";

import axios from "../configs/axios-instance";

const learningApi = {
  getLearnings: ({ success, error }) => {
    const {
      learnings: { getLearnings },
    } = apiPath;
    axios.getRequest({ path: getLearnings, success, error });
  },
  updateGoals: ({ payload, success, error }) => {
    const {
      learnings: { updateGoals },
    } = apiPath;
    axios.putRequest({ path: updateGoals, payload, success, error });
  },
  getNotes: ({ payload, suffPath, success, error }) => {
    const {
      learnings: { getNotes },
    } = apiPath;

    axios.getRequest({ path: getNotes + suffPath, payload, success, error });
  },
  addNotes: ({ payload, success, error }) => {
    const {
      learnings: { addNotes },
    } = apiPath;
    axios.postRequest({ path: addNotes, payload, success, error });
  },
  updateNotes: ({ payload, success, error }) => {
    const {
      learnings: { updateNotes },
    } = apiPath;
    axios.putRequest({ path: updateNotes, payload, success, error });
  },
  deleteNotes: ({ suffPath, payload, success, error }) => {
    const {
      learnings: { deleteNotes },
    } = apiPath;
    axios.deleteRequest({
      path: deleteNotes + suffPath,
      payload,
      success,
      error,
    });
  },
  updateProgress: ({ payload, success, error }) => {
    const {
      learnings: { updateProgress },
    } = apiPath;
    axios.putRequest({ path: updateProgress, payload, success, error });
  },
  getCourse: ({ suffPath, success, error }) => {
    const {
      learnings: { getCourse },
    } = apiPath;
    axios.getRequest({ path: getCourse + suffPath, success, error });
  },
};

export default learningApi;
