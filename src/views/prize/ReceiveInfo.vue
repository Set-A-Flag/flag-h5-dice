<template>
  <div>
    <input class="dialog-input input-item" placeholder="请输入联系人姓名"/>
    <input class="dialog-input input-item" placeholder="请输入您联系方式"/>
    <textarea class="dialog-input input-item address-input" placeholder="请填写可以收到快递的详细地址，包括省市区街道等信息"/>

    <p class="receiveInfo-info">请正确填写以上收获信息，工作人员将在活动结束前安排奖品发放。获奖24小时后不可再更改收获信息！</p>

    <div class="dice-dialog-sureButton">
      <img src="@/assets/components/dialog/isOkBtn.png" @click="sureButtonClick">
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less">
.input-item {
  margin-bottom: 15px;
}
.receiveInfo-info {
  text-align: left;
  text-indent: 2em;
  margin: 0 2em;
  font-weight: bold;
  font-size: 12px;
  margin-top: 10px;
  color: #e08233;
}
</style>
