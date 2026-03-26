// 模拟数据库
import { posts } from '../utils/posts' // 导入共享数据

export default defineEventHandler((event) => {
  // 获取查询参数
  const query = getQuery(event);
  const page = Number(query.page) || 1;
  const limit = Number(query.limit) || 10;

  // 分页处理
  const start = (page - 1) * limit;
  const paginatedPosts = posts.slice(start, start + limit);

  return {
    data: paginatedPosts,
    total: posts.length,
    page,
    limit,
  };
});
