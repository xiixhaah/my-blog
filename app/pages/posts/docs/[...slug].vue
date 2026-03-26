<!-- 使用 [...slug] 捕获所有匹配的路径。 -->
 

<template>
  <div>
    <h1>文档路径</h1>
    <p>路径片段：{{ route.params.slug }}</p>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
// 访问 /docs/guide/getting-started 时：
// route.params.slug = ['guide', 'getting-started']
</script>
