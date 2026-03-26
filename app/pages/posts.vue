<!-- 嵌套路由用于创建具有共享布局的页面组。
创建嵌套路由结构

app/pages/
├── posts.vue              # 父布局
└── posts/
    ├── index.vue          # /posts
    ├── [id].vue           # /posts/:id
    └── create.vue         # /posts/create

-->

<template>
  <div class="posts-layout">
    <aside class="sidebar">
      <h3>文章管理</h3>
      <nav>
        <NuxtLink to="/posts">所有文章</NuxtLink>
        <NuxtLink to="/posts/create">写文章</NuxtLink>
      </nav>
    </aside>
    <div class="content">
      <!-- 子路由内容会渲染在这里 -->
      <NuxtPage />
    </div>
  </div>
</template>

<style scoped>
.posts-layout {
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  gap: 2rem;
}

.sidebar {
  width: 200px;
  flex-shrink: 0;
}

.sidebar h3 {
  margin-bottom: 1rem;
  color: #333;
}

.sidebar nav {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.sidebar a {
  color: #666;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 4px;
  transition: all 0.2s;
}

.sidebar a:hover,
.sidebar a.router-link-active {
  background: #00dc82;
  color: white;
}

.content {
  flex: 1;
}
</style>
