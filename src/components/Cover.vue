<template>
  <div @click="clickHandle" class="dice-cover"></div>
</template>

<script>
export default {
  methods: {
    clickHandle () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less" scoped>
.dice-cover {
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: rgba(0, 0, 0, .5);
  top: 0;
  left: 0;
  z-index: -1;
}
</style>
