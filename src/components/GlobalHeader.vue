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
            <a-dropdown>
              <ASpace>
                <a-avatar :src="loginUserStore.loginUser.userAvatar" />
                {{ loginUserStore.loginUser.userName ?? '无名' }}
              </ASpace>
              <template #overlay>
                <a-menu>
                  <a-menu-item @click="doLogout">
                    <LogoutOutlined />
                    退出登录
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
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
import { computed, h, ref } from 'vue'
import {
  HomeOutlined,
  LogoutOutlined,
  GithubOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue'
import { MenuProps, message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { useLoginUserStore } from '@/stores/useLoginUserStore.ts'
import { userLogoutUsingPost } from '@/api/userController.ts'

// 用户登录状态
const loginUserStore = useLoginUserStore()
// 未经过滤的菜单项
const originItems = [
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
    key: '/admin/userManage',
    label: '用户管理',
    title: '用户管理',
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
]
// 根据权限过滤菜单项
const filterMenus = (menus = [] as MenuProps['items']) => {
  return menus?.filter((menu) => {
    // 管理员才能看到 /admin 开头的菜单
    if (menu?.key?.startsWith('/admin')) {
      const loginUser = loginUserStore.loginUser
      if (!loginUser || loginUser.userRole !== 'admin') {
        return false
      }
    }
    return true
  })
}

// 展示在菜单的路由数组
const items = computed(() => filterMenus(originItems))

const router = useRouter()

// 当前选中的菜单项
const current = ref<string[]>([])

// 监听路由变化，更新当前选中的菜单项
router.afterEach((to, from, next) => {
  current.value = [to.path]
})

// 点击菜单项,路由跳转
const doMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  })
}

/**
 * 退出登录
 */
const doLogout = async () => {
  const res = await userLogoutUsingPost()
  console.log(res)
  if (res.data.code === 0) {
    loginUserStore.setLoginUser({
      userName: '未登录',
    })
    message.success('退出登录成功')
    await router.push('/user/login')
  } else {
    message.error('退出登录失败，' + res.data.message)
  }
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
