<template>
  <div class="container" />
</template>

<script>
export default {
  layout: 'blank',
  components: {},
  data() {
    return {}
  },
  middleware: async (ctx) => {
    let { status, data } = await ctx.$axios.get('/users/exit')
    if (status === 200 && data.code === 0) {
      window.location.href = '/'
    }
  }
}
</script>

<style scoped lang="scss">

</style>
