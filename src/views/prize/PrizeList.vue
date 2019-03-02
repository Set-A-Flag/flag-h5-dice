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
import {home} from '@/api'
export default {
  data  () {
    return {
      isShowQrCode: true,
      isShowFacailMask: true,
      isShowTreasureBox: true
    }
  },
  methods: {
    queryPrizesList ({account}) {
      home.queryPrizes({account}).then(res => {
        console.log(res)
        if (res && res.result) {
          const data = res.result
          this.isShowFacailMask = data.mask === 1
          this.isShowTreasureBox = data.isTreasureBox
        }
      })
    },
    prizeClick (prize) {
      this.$emit('prizeClick', prize)
    },
    sureButtonClick () {
      this.$emit('PrizeSureBtnClick')
    }
  },
  created () {
    this.queryPrizesList({account: 110})
  }
}
</script>

<style lang="less" scoped>
.prize-item {
  width: 90%;
}
</style>
