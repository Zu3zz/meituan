<template>
  <div class="m-menu">
    <dl class="nav" @mouseleave="mouseLeave">
      <dt>全部分类</dt>
      <dd v-for="(item,idx) in $store.state.home.menu" :key="idx" @mouseenter="enter">
        <i :class="item.type" />{{ item.name }}<span class="arrow" />
      </dd>
    </dl>
    <div v-if="kind" class="detail" @mouseenter="sover" @mouseleave="sout">
      <template v-for="(item, idx) in curdetail.child">
        <h4 :key="idx">{{ item.title }}</h4>
        <span v-for="v in item.child" :key="v">{{ v }}</span>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      kind: '',
      menu: []
    }
  },
  computed: {
    curdetail: function () {
      return this.$store.state.home.menu.filter(item => item.type === this.kind)[0]
    }
  },
  methods: {
    mouseLeave: function () {
      const self = this
      self._timer = setTimeout(function () {
        self.kind = ''
      }, 150)
    },
    enter: function (e) {
      this.kind = e.target.querySelector('i').className
    },
    sover: function () {
      clearTimeout(this._timer)
    },
    sout: function () {
      this.kind = ''
    }
  }
}
</script>

<style scoped lang="scss">
</style>
