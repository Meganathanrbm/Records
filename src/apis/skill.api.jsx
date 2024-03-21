// Importing constants
import apiPath from "../constants/api-path.constant";

import axios from "../configs/axios-instance";

const skillApi = {
  getSkills: ({ query, success, error }) => {
    const {
      skill: { getSkills },
    } = apiPath;
    axios.getRequest({ path: getSkills, params: { q: query }, success, error });
  },
};

export default skillApi;
