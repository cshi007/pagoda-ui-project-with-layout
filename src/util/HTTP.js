// 封装ajax请求
import axios from 'axios'
import { Message } from 'element-ui'

function initFetch (router) {
  var instance = axios.create({
    baseURL: process.env.VUE_APP_ORIGIN,
    timeout: 70000
  })
  instance.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8'
  instance.defaults.headers.common['x-client-ajax'] = '1'
  instance.defaults.withCredentials = true
  instance.interceptors.request.use(
    function (config) {
      const projectName = router.app.$route.query.project_name
      if (config.method === 'get' && projectName && !config.params.project_name) {
        config.params.project_name = projectName
      } else if (config.method === 'post' && projectName && !config.data.project_name) {
        config.data.project_name = projectName
      }
      return config
    },
    function (error) {
      // Do something with request error
      return Promise.reject(error)
    }
  )

  /**
   * post请求封装，做个兼容，既支持callback的形式，也可以用await Promise使用
   * @param url
   * @param params
   * @param headers
   * @param cb
   * @param exccb
   * @returns {Promise.<T>}
   */
  const post = (url, params = {}, cb, exccb) => {
    console.log(url, params)
    return new Promise((resolve, reject) => {
      instance
        .post(url, params)
        .then(res => {
          console.log(res)
          console.log('请求返回完整数据:', res.data)
          resolve(res.data)
          if (res && res.response && res.response.status === 418) {
            login(instance)
          }
          if (res.headers.sessionstatus === 'timeout') {
            // login();
            return
          }
          cb && cb(res)
        })
        .catch(res => {
          console.log(res)

          if (res && res.response && res.response.status === 418) {
            login(instance)
          }
          if (res.message.indexOf('timeout') === 0) {
            Message({
              message: '请求超时，请稍后重试',
              type: 'warning',
              duration: 2000
            })
          }
          exccb && exccb()
          console.log('请求失败', res)
          reject(res)
        })
    })
  }
  /**
   * get请求 做个兼容，既支持callback的形式，也可以用await Promise使用
   * @param urlObj
   * @param headers
   * @param cb
   * @param exccb
   * @returns {Promise.<TResult>}
   */
  const get = (url, params, cb, exccb) => {
    params = {
      ...params,
      timestamp: new Date().getTime()
    }
    console.log(url, params)

    return new Promise((resolve, reject) => {
      instance
        .get(url, { params: params })
        .then(res => {
          resolve(res.data)
          if (res && res.response && res.response.status === 418) {
            login(instance)
          }
          cb && cb(res)
        })
        .catch(res => {
          console.log(res)
          if (res && res.response && res.response.status === 418) {
            login(instance)
          }
          if (res.message.indexOf('timeout') === 0) {
            Message({
              message: '请求超时，请稍后重试',
              type: 'warning',
              duration: 2000
            })

            reject(res)
            exccb && exccb(res)
            console.log('请求失败', res)
          }
          reject(res)
        })
    })
  }
  // 登陆校验
  var login = function (instance) {
    var s2 = encodeURIComponent(`${instance.defaults.baseURL}login/?redirect=${encodeURIComponent(location.origin)}`)
    location.href = `https://cas.pagoda.com.cn/cas2/login?service=${s2}`
    // location.href = "/login.html"
    // window.location.href = window.location.origin + "/marketing-api/login";
  }

  if (typeof window['$HTTP'] === 'undefined') {
    window.$HTTP = {}
    window.$HTTP.post = post
    window.$HTTP.get = get
  }
}

export default initFetch
