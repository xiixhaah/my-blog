<!-- 可以在路径中定义多个动态参数 -->

<template>
  <div>
    <h1>分类：{{ route.params.category }}</h1>
    <p>文章 ID：{{ route.params.id }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
// 访问 /posts/tech/123 时：
// route.params.category = 'tech'
// route.params.id = '123'
</script>
