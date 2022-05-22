import axios from 'axios'

const AxiosInstance = axios.create({
  baseURL: process.env.NODE_ENV as string === "development"? process.env.REACT_APP_BASE_URL: '/'
});

function setToken(config: any, idToken = '') {
  if (idToken && idToken !== "") {
    config.headers.common['Authorization'] = `Bearer ${idToken}`
  };
}

AxiosInstance.interceptors.request.use(config => {

  let token = localStorage.getItem('authToken')
  if (token) {
    //set interceptor token header
    setToken(config, token);
  }
  return config
}, error => {
  return Promise.reject(error)
});

// Add a response interceptor
AxiosInstance.interceptors.response.use(
  response => {
    // Do something with response data
    return response;
  },
  async (error) => {
    if (error?.response?.status === 401) {
      // logout

    } else {
      return Promise.reject(error);
    }

  });

// returns default axios config
export default AxiosInstance

export const setAccessToken = (token: string) => {
  localStorage.setItem("authToken", token);
}