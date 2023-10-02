import request from '@/utils/request'
// 注册方法
export function list(data) {
  return request({
    url: '/api/demo',
    headers: {
      isToken: false,
    },
    method: 'put',
    data: data
  })
}
