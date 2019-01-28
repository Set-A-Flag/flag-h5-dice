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
      <div @click="prizeButtonClick" class="buttonItem"><img src="@/assets/home/myPrizes.png"></div>
      <div class="buttonItem"><img src="@/assets/home/nationalRankings.png"></div>
    </div>
    <Dialog :visible.sync="myPrizeDialogVisible">
      <prize slot="body"/>
    </Dialog>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog'
import prize from './../prize'

export default {
  name: 'home',
  components: {
    Dialog,
    prize
  },
  data () {
    return {
      myPrizeDialogVisible: false
    }
  },
  methods: {
    playButtonClick() {
      this.$router.push('/play')
    },
    prizeButtonClick () {
      this.myPrizeDialogVisible = true
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
      display: flex;
      justify-content: center;
      width: 80%;
      margin: 0 auto;
      .buttonItem {
        img {
          width: 60%;
        }
      }
    }
  }
</style>

