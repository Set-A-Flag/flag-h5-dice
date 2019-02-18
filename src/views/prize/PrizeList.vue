<template>
  <div>
      <img @click="prizeClick('qrCodeVisible')" class="prize-item" src="@/assets/user/myPrizes3.png" alt="">

      <img @click="prizeClick('receiveInfoVisible')" class="prize-item" src="@/assets/user/myPrizes2.png" alt="">

      <img @click="prizeClick('facialMaskVisible')" class="prize-item" src="@/assets/user/myPrizes1.png" alt="">

      <div class="dice-dialog-sureButton">
        <img src="@/assets/components/dialog/isOkBtn.png" @click="sureButtonClick">
      </div>
  </div>
</template>

<script>
export default {
  methods: {
    prizeClick (prize) {
      this.$emit('prizeClick', prize)
    },
    sureButtonClick () {
      this.$emit('PrizeSureBtnClick')
    }
  }
}
</script>

<style lang="less" scoped>
.prize-item {
  width: 90%;
}
</style>
