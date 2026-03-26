import { posts } from '../../utils/posts' // 导入共享数据

export default defineEventHandler((event) => {
  const id = getRouterParam(event, 'id')

  const index = posts.findIndex(p => p.id === Number(id))

  if (index === -1) {
    throw createError({
      statusCode: 404,
      message: '文章不存在'
    })
  }

  // 删除文章
  posts.splice(index, 1)

  return { success: true, message: '删除成功' }
})
