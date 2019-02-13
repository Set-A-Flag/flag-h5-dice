<template>
  <div>
    <input class="dialog-input" placeholder="请输入手机号"/>
    <p class="tel-info">手机号将作为获奖凭证，请正确填写本人手机号</p>
    <div class="dice-dialog-sureButton">
      <img src="@/assets/components/dialog/isOkBtn.png" @click="sureButtonClick">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sureButtonClick () {
      this.$emit('sureTel')
    }
  }
}
</script>

<style lang="less" scoped>
.tel-info {
  text-align: left;
  text-indent: 2em;
  margin: 0 2em;
  font-weight: bold;
  font-size: .35rem;
  margin-top: 10px;
  color: #e08233;
}
</style>
