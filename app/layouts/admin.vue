<template>
  <div class="admin-layout">
    <aside class="admin-sidebar">
      <h2>管理后台</h2>
      <nav>
        <NuxtLink to="/admin">仪表盘</NuxtLink>
        <NuxtLink to="/admin/posts">文章管理</NuxtLink>
        <NuxtLink to="/admin/users">用户管理</NuxtLink>
      </nav>
    </aside>
    <main class="admin-main">
      <slot />
    </main>
  </div>
</template>
