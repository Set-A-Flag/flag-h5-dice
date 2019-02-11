<template>
  <div>
    <div class="facial-mask">
      <img class="facial-mask-img" src="@/assets/user/Prize1.png" alt="">

      <p class="facial-mask-info">请发放一片面膜 + 一份面膜套盒！</p>
    </div>

    <div class="dice-dialog-sureButton">
      <img src="@/assets/components/dialog/isOkBtn.png" @click="sureButtonClick">
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    sureButtonClick () {

    }
  }
}
</script>

<style lang="less">
.facial-mask {
  width: 90%;
  margin: 0 auto;
  background-color: #fffeee;
  border: 2px solid #a5500f;
  border-radius: 5px;
  position: relative;
  padding: 0 .5rem .5rem .5rem;
  
  .facial-mask-img {
    width: 70%;
    padding: 10%;
    background-image: url(~@/assets/user/PrizeBg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .facial-mask-info {
    font-size: .3rem;
    font-weight: bold;
    color: #a5500f;
  }
}
</style>
