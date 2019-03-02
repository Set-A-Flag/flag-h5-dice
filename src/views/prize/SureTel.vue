<template>
  <div>
    <input v-model="phone" class="dialog-input" placeholder="请输入手机号"/>
    <p class="tel-info">手机号将作为获奖凭证，请正确填写本人手机号</p>
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
      phone: ''
    }
  },
  methods: {
    saveUserPhone () {
      const params = {
        account: 110,
        phone: this.phone
      }
      return home.saveUserPhone(params).then(res => {
        return res
      })
    },
    sureButtonClick () {
      this.saveUserPhone().then(res => {
        if (res.status === 200) {
          alert('验证成功')
          this.$emit('sureTel')
        } else {
          alert('验证失败')
        }
      })
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
