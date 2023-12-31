import Request from './request'

import { BASE_URL, TIME_OUT } from './request/config'

const YRequest = new Request({
  baseURL: BASE_URL,

  timeout: TIME_OUT,

  interceptors: {
    requestInterceptor: (config) => {
      // const token = ''

      // if (token) {
      //   config.headers.Authorization = token
      // }

      // console.log('请求成功拦截')

      return config
    },

    requestInterceptorCatch: (err) => {
      // console.log('请求失败拦截')

      return err
    },

    responseInterceptor: (config) => {
      // console.log('响应成功拦截')

      return config
    },

    responseInterceptorCatch: (err) => {
      // console.log('响应失败拦截')

      return err
    }
  }
})

export default YRequest
