<template>
  <div class="home">
    <div class="title">
      <img src="@/assets/home/title.png">
    </div>
    <div class="guomeimei">
      <img src="@/assets/home/guomeimei.png">
    </div>
    <div class="startBtn" @click="playButtonClick">
      <img src="@/assets/home/startBtn.png">
    </div>
    <div class="footButton">
      <div class="buttonItem"><img src="@/assets/home/gameDescription.png"></div>
      <div class="buttonItem"><img src="@/assets/home/myPrizes.png"></div>
      <div class="buttonItem"><img src="@/assets/home/nationalRankings.png"></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    playButtonClick() {
      this.$router.push('/play')
    }
  }
}
</script>
<style lang="less" scoped>
  .home {
    width: 100%;
    height: 100%;
    .title {
      margin-top: 2rem;
      img {
        width: 80%;
      }
    }
    .guomeimei {
      img {
        width: 50%;
      }
    }
    .startBtn {
      margin-bottom: 2rem;
      img {
        width: 70%;
      }
    }
    .footButton {
      // position: fixed;
      // bottom: 50px;
      display: flex;
      justify-content: center;
      width: 100%;
      .buttonItem {
        img {
          width: 50%;
        }
      }
    }
  }
</style>

