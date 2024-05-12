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
  handlegetAllCourses: ({ success, error }) => {
    const {
      youtube: { CourseByUserId },
    } = apiPath;
    axios.getRequest({ path: CourseByUserId, success, error });
  },
  handleGetCourseById: ({ suffPath, success, error }) => {
    const {
      youtube: { courseDetails },
    } = apiPath;
    axios.getRequest({
      path: courseDetails(suffPath),
      success,
      error,
    });
  },
};

export default youtubeApi;
