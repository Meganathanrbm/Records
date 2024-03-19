// Importing constants
import apiPath from "../constants/api-path.constant";

import axios from "../configs/axios-instance";

const youtubeApi = {
  handleCreatePlaylist: ({ payload, success, error }) => {
    const {
      youtube: { createCourse },
    } = apiPath;
    axios.postRequest({ path: createCourse, payload, success, error });
  },
};

export default youtubeApi;
