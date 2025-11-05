import axios from 'axios';
const axiosApi = axios.create({
  baseURL: 'https://panda-market-api.vercel.app',
  timeout: 10000,
});

// 응답 인터셉터
axiosApi.interceptors.response.use(
  (response) => {
    console.log('응답:', response);
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      console.log('응답:', error);
    }
    return Promise.reject(error);
  },
);

export default axiosApi;
