import axios from 'axios';

const axiosInstance = axios.create({
  withCredentials: true, 
});

// Interceptor to add token to requests
axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem('token');
    // console.log('front', token);
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    //   console.log(config , "twtt1");
    //   console.log(config.headers, "rysfyf3344444");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;