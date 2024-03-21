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
  handlegetAllCourses: ({ payload, success, error }) => {
    const {
      youtube: { CourseByUserId },
    } = apiPath;
    axios.getRequest({ path: CourseByUserId, payload, success, error });
  },
  handleGetCourseById: ({ payload, success, error }) => {
    const {
      youtube: { courseDetails },
    } = apiPath;
    axios.getRequest({ path: courseDetails, payload, success, error });
  },
};

export default youtubeApi;
