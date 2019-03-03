<template>
  <div>
    <img class="code-img" src="@/assets/user/code.png" alt="">

    <p class="code-info">请到附近果本门店，凭二维码领取面膜！</p>
  </div>
</template>

<script>
import {home} from '@/api'
export default {
  data () {
    return {
      qrCode: ''
    }
  },
  methods: {
    getQrCode (account) {
      home.qrCode(account).then(res => {
        res && res.result && (this.qrCode = res.result)
      })
    }
  },
  created () {
    this.getQrCode({account: 110})
  }
}
</script>

<style lang="less" scoped>
.code-img {
  width: 5rem;
}
.code-info {
  text-align: left;
  text-indent: 2em;
  margin: 0 2em;
  font-weight: bold;
  font-size: .35rem;
  margin-top: 10px;
  color: #e08233;
}
</style>
