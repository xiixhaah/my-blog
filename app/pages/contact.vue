<template>
  <div class="contact">
    <h1>联系我们</h1>
    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="name">姓名</label>
        <input type="text" id="name" v-model="form.name" required />
      </div>
      <div class="form-group">
        <label for="email">邮箱</label>
        <input type="email" id="email" v-model="form.email" required />
      </div>
      <div class="form-group">
        <label for="message">留言</label>
        <textarea id="message" v-model="form.message" rows="5" required></textarea>
      </div>
      <button type="submit">提交</button>
    </form>
  </div>
</template>
​
<script setup lang="ts">
const form = reactive({
  name: '',
  email: '',
  message: ''
})
​
function handleSubmit() {
  console.log('表单提交:', form)
  // 这里可以调用 API 提交表单
}
</script>
​
<style scoped>
.contact {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}
​
.form-group {
  margin-bottom: 1.5rem;
}
​
label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
}
​
input,
textarea {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}
​
input:focus,
textarea:focus {
  outline: none;
  border-color: #00dc82;
}
​
button {
  background: #00dc82;
  color: white;
  padding: 0.75rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.2s;
}
​
button:hover {
  background: #00b368;
}
</style>
