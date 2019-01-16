import request from '@/utils/request'

export function getList(query) {
  return request({
    url: '/notice/list',
    method: 'get',
    params: query
  })
}
export function getDetail(query) {
  return request({
    url: '/notice/aritcle',
    method: 'get',
    params: query
  })
}
