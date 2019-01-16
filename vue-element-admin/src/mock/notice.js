/**
 * 1. 相关的内容用mock生成，然后给出对应的排序算法处理数据，通过参数进行数据返回
 * 2. 学习mock语法，尽快的形成对应的数据
 */
import Mock from 'mockjs'
import {
  param2Obj
} from '@/utils'

const List = []
const count = 100

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment', // 自热生序
    'dept|1': ['市场部', '研发部门', '客服部'], // 三选一
    datetime: '@datetime', // 生成对应的事件
    title: '@cparagraph()', // 生成随机的30个文字
    edit: false,
    select: false,
    createTime: Date.now()
  }))
}
export default {
  // 获取对应的通告信息
  getList: config => {
    const {
      title,
      page = 1,
      limit = 20,
      sort
    } = param2Obj(config.url)
    let mockList = List.filter(item => {
      // 根据title去检索
      if (title && item.title.indexOf(title < 0)) return false
      return true
    })
    if (sort === '-id') {
      mockList = mockList.reverse()
    }
    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
    return {
      total: mockList.length,
      items: pageList
    }
  },
  gitNotice: config => {
    const {
      id
    } = param2Obj(config.url)
    for (const article of List) {
      if (article.id === +id) {
        return article
      }
    }
  }
}
