import { posts } from "../../utils/posts"; // 导入共享数据

export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  const body = await readBody(event);

  // 查找文章
  const index = posts.findIndex((p) => p.id === Number(id));

  if (index === -1) {
    throw createError({
      statusCode: 404,
      message: "文章不存在",
    });
  }

  // 更新文章
  posts[index] = {
    ...posts[index],
    ...body,
    updatedAt: new Date().toISOString(),
  };

  return posts[index];
});
