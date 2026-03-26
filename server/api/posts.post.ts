export default defineEventHandler(async (event) => {
  // 读取请求体
  const body = await readBody(event)

  // 验证数据
  if (!body.title || !body.content) {
    throw createError({
      statusCode: 400,
      message: '标题和内容不能为空'
    })
  }

  // 创建新文章（模拟）
  const newPost = {
    id: Date.now(),
    title: body.title,
    content: body.content,
    createdAt: new Date().toISOString()
  }

  // 返回创建的文章
  return newPost
})
