import apiPath from "../constants/api-path.constant";

import axios from "../configs/axios-instance";

const learningApi = {
  getLearnings: ({ query, success, error }) => {
    const {
      learnings: { getLearnings },
    } = apiPath;
    axios.getRequest({ path: getLearnings, success, error });
  },
  updateGoal: ({ query, success, error }) => {
    const {
      learnings: { updateGoal },
    } = apiPath; 
    
    axios.putRequest({
      path: updateGoal, 
      payload: query, 
      success,
      error, 
    });
  },
  AddNote: ({ query, success, error }) => {
    const {
      learnings: { addNote },
    } = apiPath; 
    
    axios.putRequest({
      path: addNote, 
      payload: query, 
      success,
      error, 
    });
  },
  getNotes: ({ payload, success, error }) => {
    const {
      learnings: { getNotes },
    } = apiPath;
    axios.postRequest({ path: getNotes,payload,success, error });
  },
};

export default learningApi;
