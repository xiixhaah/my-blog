// 路由中间件

// 中间件可以在导航到特定路由之前运行代码，常用于权限验证。


export default defineNuxtRouteMiddleware((to, from) => {
  // 模拟检查用户是否登录
  const isAuthenticated = false  // 实际项目中从状态管理获取

  // 如果未登录且访问需要认证的页面
  if (!isAuthenticated && to.path.startsWith('/admin')) {
    // 重定向到登录页
    return navigateTo('/login')
  }
})