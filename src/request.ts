import axios from 'axios'
import { message } from 'ant-design-vue'

const myAxios = axios.create({
  baseURL: 'http://localhost:8123',
  timeout: 1000,
  withCredentials: true,
})

myAxios.interceptors.request.use(
  (config) => {
    // console.log('request')
    return config
  },
  (error) => {
    // console.error('request error')
    return Promise.reject(error)
  },
)

myAxios.interceptors.response.use(
  (response) => {
    const { data } = response
    // 未登录
    if (data.code === 40100) {
      // 不是获取用户信息的请求，并且用户目前不是已经在用户登录页面，跳转到登录页面
      if (
        !response.request.responseUrl?.includes('/user/get/login') &&
        !window.location.pathname.includes('/user/login')
      ) {
        message.warning('请先登录')
        window.location.href = '/login'
      }
    }
    return response
  },
  (error) => {
    // console.error('response error')
    return Promise.reject(error)
  },
)

export default myAxios
