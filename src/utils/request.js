// 引入 axios
import axios from 'axios'
// 引入 弹窗插件
import {Message} from 'element-ui'

/**
 * axios默认请求头格式
 * @type {string}
 */
axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'

/**
 * 创建请求实例实例
 */
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 5000
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(config => {
  /*请求成功,直接返回请求成功信息*/
  Message.success("请求成功");
  return config
}, err => {
  /*请求失败,直接返回失败信息*/
  Message.error("系统错误")
  return Promise.reject(new Error('系统错误'))
})

/**
 * 响应拦截器
 */
service.interceptors.response.use(res => {
  /*响应成功直接返回数据*/
  Message.success(res.data.msg)
  return res.data
}, err => {
  /*响应失败,返回失败信息*/
  Message.error(err)
  return Promise.reject(err)
})

export default service
