<template>
  <div class="post-detail">
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <div class="post-meta">
        <span>作者：{{ post.author }}</span>
        <span>发布时间：{{ post.date }}</span>
      </div>
      <div class="post-content">
        {{ post.content }}
      </div>
      <NuxtLink to="/posts" class="back-link">← 返回文章列表</NuxtLink>
    </div>
    <div v-else>
      <p>文章不存在</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// 获取路由参数
const route = useRoute()

// route.params.id 获取动态参数
const postId = route.params.id

// 模拟文章数据
const posts = {
  '1': {
    id: 1,
    title: '学习 Nuxt 4 的第一天',
    author: '张三',
    date: '2025-01-01',
    content: '今天开始学习 Nuxt 4，感觉很有趣...'
  },
  '2': {
    id: 2,
    title: 'Vue 3 组合式 API 详解',
    author: '李四',
    date: '2025-01-02',
    content: 'Vue 3 的组合式 API 提供了更灵活的代码组织方式...'
  }
}

// const post = posts[postId as string]
const post = posts[postId as keyof typeof posts];
</script>

<style scoped>
.post-detail {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
}

h1 {
  color: #333;
  margin-bottom: 1rem;
}

.post-meta {
  color: #666;
  font-size: 0.9rem;
  margin-bottom: 2rem;
  display: flex;
  gap: 2rem;
}

.post-content {
  line-height: 1.8;
  margin-bottom: 2rem;
}

.back-link {
  color: #00dc82;
  text-decoration: none;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
