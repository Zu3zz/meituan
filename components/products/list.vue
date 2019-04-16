<template>
  <div class="m-product-list">
    <dl>
      <dd v-for="item in nav" :key="item.name" :class="[item.name,item.active ? 's-nav-active' : '']" @click="navSelect">
        {{ item.txt }}
      </dd>
    </dl>
    <ul>
      <Item v-for="(item, idx) in list" :key="idx" :meta="item" />
    </ul>
  </div>
</template>

<script>
import Item from './product'
export default {
  components: {
    Item
  },
  data() {
    return {}
  }
}
</script>

<style scoped lang="scss">

</style>
