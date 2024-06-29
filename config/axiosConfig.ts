import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: "https://api.avocaapp.com/v1/api/",
  timeout: 10000,
  headers: {
    accept: 'application/json'
  }
})

axiosInstance.interceptors.request.use(
  function (config) {
    return config
  },
  function (error) {

    return Promise.reject(error)
  }
)

axiosInstance.interceptors.response.use(
  function (response) {
    return response
  },
  function (error) {
    return Promise.reject(error)
  }
)

export default axiosInstance