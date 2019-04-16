<template>
  <div class="container">
    <dl class="tab">
      <dt>{{ name }}<i class="el-icon-arrow-down el-icon--right" /></dt>
      <dd>
        <h3>{{ name }}</h3>
        <span v-for="(item, idx) in list" :key="idx">{{ item }}</span>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    name: {
      type: String,
      default: ''
    },
    list: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
