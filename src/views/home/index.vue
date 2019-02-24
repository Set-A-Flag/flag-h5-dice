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
      <div @click="aboutButtonClick" class="buttonItem"><img src="@/assets/home/gameDescription.png"></div>
      <div @click="prizeButtonClick" class="buttonItem"><img src="@/assets/home/myPrizes.png"></div>
      <div @click="rankButtonClick" class="buttonItem"><img src="@/assets/home/nationalRankings.png"></div>
    </div>
    <prize ref="prize"/>
    <about ref="about"/>
    <ranking ref="ranking"/>
  </div>
</template>

<script>
import prize from '@/views/prize'
import about from '@/views/about'
import ranking from '@/views/ranking'

import {home} from '@/api'

export default {
  name: 'home',
  components: {
    prize,
    about,
    ranking
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
      this.$refs.prize.sureTelVisible = true
    },
    aboutButtonClick () {
      this.$refs.about.visible = true
    },
    rankButtonClick () {
      this.$refs.ranking.visible = true
    }
  },
  created() {
    home.userRank().then(res => {
      console.log(res)
    })
  }
}
</script>
<style lang="less" scoped>
  .home {
    width: 100%;
    height: 100%;
    .title {
      margin-top: 20px;
      img {
        width: 8.43rem;
      }
    }
    .guomeimei {
      img {
        width: 5.43rem;
      }
    }
    .startBtn {
      margin-bottom: 10px;
      img {
        width: 6.52rem;
      }
    }
    .footButton {
      display: flex;
      justify-content: center;
      margin: 0 auto;
      .buttonItem {
        img {
          margin: 0 0.5rem;
          width: 2.07rem;
        }
      }
    }
  }
</style>

