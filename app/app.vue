<!-- Nuxt 会扫描 app/pages/ 目录下的所有 .vue 文件，并根据文件名和目录结构自动生成路由。 -->


<template>
  <div>
    <header class="header">
      <nav class="nav">
        <!-- 
        <NuxtLink> 是 Nuxt 提供的导航组件，相比普通的 <a> 标签：
        客户端导航：不会触发页面完整刷新
        自动预取：当链接进入视口时，自动预取目标页面
        自动添加 active 类：当前路由的链接会自动添加 router-link-active 类
         -->
        <NuxtLink to="/" class="logo">我的博客</NuxtLink>
        <div class="nav-links">
          <NuxtLink to="/">首页</NuxtLink>
          <NuxtLink to="/about">关于</NuxtLink>
        </div>
      </nav>
    </header>
    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, sans-serif;
  color: #333;
  background: #f5f5f5;
}

.header {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00dc82;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  color: #333;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: #00dc82;
}

main {
  min-height: calc(100vh - 60px);
}
</style>
