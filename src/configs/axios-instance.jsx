import axios from "axios";

const axiosInstance = axios.create({
  withCredentials: true,
  baseURL: "https://records-awl1.onrender.com/api",
});

const getRequest = (data) => {
  const { path, config, success, error, final } = data;
  axiosInstance.get(path, config).then(success).catch(error).finally(final);
};

const postRequest = async (data) => {
  const { path, payload, config, success, error, final } = data;
  await axiosInstance
    .post(path, payload, config)
    .then(success)
    .catch(error)
    .finally(final);
};

const putRequest = (data) => {
  const { path, payload, success, config, error, final } = data;
  axiosInstance
    .put(path, payload, config)
    .then(success)
    .catch(error)
    .finally(final);
};

const deleteRequest = (data) => {
  const { path, success, error, final } = data;
  axiosInstance.delete(path).then(success).catch(error).finally(final);
};

export default {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
};
