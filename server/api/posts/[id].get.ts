import { posts } from '../../utils/posts' // 导入共享数据
export default defineEventHandler((event) => {
  // 获取路由参数
  const id = getRouterParam(event, 'id')

  // 模拟数据库查询
  const post = posts.find(p => p.id === Number(id))

  if (!post) {
    throw createError({
      statusCode: 404,
      message: '文章不存在'
    })
  }

  return post
})
