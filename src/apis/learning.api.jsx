import apiPath from "../constants/api-path.constant";

import axios from "../configs/axios-instance";

const learningApi = {
  getLearnings: ({ query, success, error }) => {
    const {
      learnings: { getLearnings },
    } = apiPath;
    axios.getRequest({ path: getLearnings, success, error });
  },
};

export default learningApi;
