import { defineStore } from 'pinia'
import { ref } from 'vue'
import { getLoginUserUsingGet } from '@/api/userController'

export const useLoginUserStore = defineStore('loginUser', () => {
  const loginUser = ref<API.LoginUserVO>({
    userName: '未登录',
  })

  async function fetchLoginUser() {
    // todo: 由于后端接口未实现，暂时注释
    // setTimeout(() => {
    //   setLoginUser({
    //     userName: '张三',
    //     id: 1,
    //   })
    // }, 3000)

    const res = await getLoginUserUsingGet()
    // console.log(res)
    if (res.data.code === 0 && res.data.data) {
      loginUser.value = res.data.data
    }
  }

  function setLoginUser(newLoginUser: any) {
    loginUser.value = newLoginUser
  }

  return { loginUser, fetchLoginUser, setLoginUser }
})
