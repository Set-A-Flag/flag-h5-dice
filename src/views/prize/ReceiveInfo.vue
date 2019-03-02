<template>
  <div>
    <input v-model="name" class="dialog-input input-item" placeholder="请输入联系人姓名"/>
    <input v-model="receivingCall" class="dialog-input input-item" placeholder="请输入您联系方式"/>
    <textarea v-model="address" class="dialog-input input-item address-input" placeholder="请填写可以收到快递的详细地址，包括省市区街道等信息"/>

    <p class="receiveInfo-info">请正确填写以上收获信息，工作人员将在活动结束前安排奖品发放。获奖24小时后不可再更改收获信息！</p>

    <div class="dice-dialog-sureButton">
      <img src="@/assets/components/dialog/isOkBtn.png" @click="sureButtonClick">
    </div>
  </div>
</template>

<script>
import {home} from '@/api'
export default {
  data () {
    return {
      address: '',
      name: '',
      receivingCall: ''
    }
  },
  methods: {
    getUserDeliveryInfo (account) {
      home.getUserDeliveryInfo(account).then(res => {
        const data = res.result
        this.address = data.address,
        this.name = data.name,
        this.receivingCall = data.receivingCall
      })
    },
    saveUserDeliveryInfo () {
      const params = {
        "account": 110,
        "address": this.address,
        "name": this.name,
        "receivingCall": this.receivingCall
      }
      return home.saveUserDeliveryInfo(params).then(res => {
        alert('保存成功')
      })
    },
    sureButtonClick () {
      this.saveUserDeliveryInfo().then(res => {
        this.$emit('ReceiveInfoClick', 'receiveInfoVisible')
      })
    }
  },
  created () {
    // this.getUserDeliveryInfo({account: 110})
  }
}
</script>

<style lang="less" scoped>
.input-item {
  margin-bottom: 15px;
}
.receiveInfo-info {
  text-align: left;
  text-indent: 2em;
  margin: 0 2em;
  font-weight: bold;
  font-size: .35rem;
  margin-top: 10px;
  color: #e08233;
}
</style>
