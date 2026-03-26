<template>
  <div class="posts-list">
    <h1>所有文章</h1>
    <div class="post-cards">
      <div v-for="post in posts" :key="post.id" class="post-card">
        <h2>{{ post.title }}</h2>
        <p>{{ post.summary }}</p>
        <NuxtLink :to="`/posts/${post.id}`">阅读更多 →</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const posts = [
  { id: 1, title: '学习 Nuxt 4', summary: '从零开始学习 Nuxt 4...' },
  { id: 2, title: 'Vue 3 组合式 API', summary: '深入理解组合式 API...' },
  { id: 3, title: 'TypeScript 入门', summary: '类型安全的 JavaScript...' }
]
</script>

<style scoped>
.posts-list h1 {
  margin-bottom: 2rem;
}

.post-cards {
  display: grid;
  gap: 1.5rem;
}

.post-card {
  background: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.post-card h2 {
  margin-bottom: 0.5rem;
  color: #333;
}

.post-card p {
  color: #666;
  margin-bottom: 1rem;
}

.post-card a {
  color: #00dc82;
  text-decoration: none;
}

.post-card a:hover {
  text-decoration: underline;
}
</style>
