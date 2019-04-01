<template>
  <div class="m-header">
    <el-row>
      <el-col>
        <top-bar />
      </el-col>
    </el-row>
    <el-cow>
      <el-col>
        <search-bar />
      </el-col>
    </el-cow>
  </div>
</template>

<script>
import topBar from './topbar.vue'
import SearchBar from './searchbar.vue'
export default {
  components: {
    topBar,
    SearchBar
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">
  @import "@/assets/css/public/header/index.scss"
</style>
