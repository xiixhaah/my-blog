<!-- 布局系统

布局用于定义页面的公共结构。
6.1 默认布局

创建 app/layouts/default.vue： -->


<template>
  <div class="layout">
    <header class="header">
      <nav>
        <NuxtLink to="/">首页</NuxtLink>
        <NuxtLink to="/posts">文章</NuxtLink>
        <NuxtLink to="/about">关于</NuxtLink>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer class="footer">
      <p>© 2025 我的博客</p>
    </footer>
  </div>
</template>