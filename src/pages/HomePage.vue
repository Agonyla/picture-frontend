<template>
  <div id="homePage">
    <h1>{{ msg }}</h1>

    <a-row>
      <a-col :span="24">
        <a-card>
          <p>云图库</p>
          <p>这是一个主页</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script setup lang="ts">
const msg = '欢迎来到编程导航，你将从这里开始项目学习之旅~'
</script>

<style scoped>
#homePage {
}
</style>
