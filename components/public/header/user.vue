<template>
  <div class="m-user">
    <template v-if="user">
      欢迎您, <span class="username">{{ user }}</span>
      [<nuxt-link to="/exit" />]
    </template>
    <template v-else>
      <nuxt-link to="/login" class="login">立即登录</nuxt-link>
      <nuxt-link class="register" to="/register">注册</nuxt-link>
    </template>
  </div>
</template>

<script>
export default {
  components: {
  },
  data() {
    return {
      user: ''
    }
  },
  async mounted() {
    const { status, data: { user } } = await this.$axios.get('/users/getUser')
    if (status === 200) {
      this.user = user
    }
  }
}
</script>

<style scoped lang="scss">

</style>
