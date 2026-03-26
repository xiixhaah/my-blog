// 使用中间件

// 全局中间件（在 app/middleware/ 下以 .global.ts 结尾）

// app/middleware/logger.global.ts
export default defineNuxtRouteMiddleware((to, from) => {
  console.log(`导航: ${from.path} → ${to.path}`)
})




