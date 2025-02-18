<template>
  <div id="globalHeader">
    <a-row :wrap="false">
      <!--    图标和标题-->
      <a-col flex="200px">
        <router-link to="/">
          <div class="title-bar">
            <img class="logo" src="../assets/logo.jpg" alt="logo" />
            <div class="title">云图库</div>
          </div>
        </router-link>
      </a-col>

      <!--    导航栏-->
      <a-col flex="auto">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          @click="doMenuClick"
        />
      </a-col>

      <!--    登录-->
      <a-col flex="120px">
        <div class="user-login-status">
          <div v-if="loginUserStore.loginUser.id">
            {{ loginUserStore.loginUser.userName ?? '无名' }}
          </div>
          <div v-else>
            <a-button type="primary" href="/user/login">登录</a-button>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { AppstoreOutlined, HomeOutlined, GithubOutlined } from '@ant-design/icons-vue'
import { MenuProps } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { useLoginUserStore } from '@/stores/useLoginUserStore'

// 用户登录状态
const loginUserStore = useLoginUserStore()

const router = useRouter()

// 当前选中的菜单项
const current = ref<string[]>([])

// 监听路由变化，更新当前选中的菜单项
router.afterEach((to, from, next) => {
  current.value = [to.path]
})

// 菜单项
const items = ref<MenuProps['items']>([
  {
    key: '/',
    icon: () => h(HomeOutlined),
    label: '主页',
    title: '主页',
  },
  {
    key: '/about',
    icon: () => h(AppstoreOutlined),
    label: '关于',
    title: '关于',
  },

  {
    key: 'others',
    icon: () => h(GithubOutlined),
    label: h(
      'a',
      { href: 'https://github.com/Agonyla?tab=repositories', target: '_blank' },
      'Github',
    ),
    title: 'Github',
  },
])

// 点击菜单项
const doMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  })
}
</script>

<style scoped>
#globalHeader .title-bar {
  display: flex;
  align-items: center;
}

#globalHeader .logo {
  height: 50px;
}

#globalHeader .title {
  color: black;
  font-size: 18px;
  margin-left: 16px;
}
</style>
