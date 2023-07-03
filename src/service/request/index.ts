import axios from 'axios'
import type { AxiosInstance } from 'axios'
import type { RequestInterceptors, RequestConfig } from './type'

class HYRequest {
  instance: AxiosInstance

  interceptors?: RequestInterceptors

  constructor(config: RequestConfig) {
    //创建axios实例

    this.instance = axios.create(config) //保存基本信息

    this.interceptors = config.interceptors //使用拦截器 //从config中取出的拦截器是对应的实例的拦截器

    this.instance.interceptors.request.use(
      this.interceptors?.requestInterceptor,
      this.interceptors?.requestInterceptorCatch
    )

    this.instance.interceptors.response.use(
      this.interceptors?.responseInterceptor,

      this.interceptors?.requestInterceptorCatch
    ) //所有的实例都有的拦截器

    this.instance.interceptors.request.use(
      (config) => {
        return config
      },

      (err) => {
        return err
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },

      (err) => {
        // 根据不同的拦截器进行状态的不同显示
        switch (err.response.status) {
          case 401:
            console.log('服务器拒给响外')
            break
          case 403:
            console.log('服务器拒给响外')
            break
          case 409:
            console.log('用户已经注册')
            break
        }

        return err
      }
    )
  }

  request<T>(config: RequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      //单个请求对请求config的处理

      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config)
      }

      this.instance
        .request<any, T>(config)
        .then((res) => {
          //单个请求对数据的处理
          if (config.interceptors?.responseInterceptor) {
            res = config.interceptors.responseInterceptor(res)
          }
          resolve(res)
        })

        .catch((err) => {
          reject(err)
          return err
        })
    })
  }

  get<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' })
  }

  post<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' })
  }

  delete<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' })
  }

  patch<T>(config: RequestConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' })
  }
}

export default HYRequest
