<template>
  <div class="error-page">
    <h1>{{ error?.statusCode || 500 }}</h1>
    <p>{{ error?.message || '发生了错误' }}</p>
    <button @click="handleError">返回首页</button>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  error: {
    statusCode: number
    message: string
  }
}>()

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<style scoped>
.error-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  text-align: center;
}

h1 {
  font-size: 6rem;
  color: #00dc82;
  margin: 0;
}

p {
  font-size: 1.5rem;
  color: #666;
  margin: 1rem 0 2rem;
}

button {
  background: #00dc82;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;
}
</style>