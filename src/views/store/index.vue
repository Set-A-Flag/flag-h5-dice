<template>
  <div class="store">
    <div class="store-title">
      <img src="@/assets/store/titleBg.png">
      <div class="store-score">3000</div>
    </div>
    <div class="store-btns">
      <div @click="showDialog('aboutVisible')" class="store-btn-item"><img src="@/assets/store/activityBtn.png" alt=""></div>
      <div @click="showDialog('rankingVisible')" class="store-btn-item"><img src="@/assets/store/nationalRankingsBtn.png" alt=""></div>
      <div @click="showDialog('prizeCheckVisible')" class="store-btn-item"><img src="@/assets/store/writeOffAward.png" alt=""></div>
      <div @click="showDialog('codeVisible')" class="store-btn-item"><img src="@/assets/store/extensionBtn.png" alt=""></div>
    </div>

    <Dialog :visible.sync="aboutVisible" titleImg="static/images/store/activityTitle.png">
      <About slot="body"/>
    </Dialog>

    <Dialog :visible.sync="rankingVisible" titleImg="static/images/store/nationalRankingsTitle.png">
      <Ranking slot="body"/>
    </Dialog>

    <Dialog :visible.sync="prizeCheckVisible" titleImg="static/images/store/writeOffAwardTitle.png">
      <PrizeCheck @lottery="lotteryHandle" slot="body"/>
    </Dialog>

    <Dialog :visible.sync="codeVisible" titleImg="static/images/store/activityTitle.png">
      <Code slot="body"/>
    </Dialog>

    <SurprisePrize :prize="prize" @afterLottery="afterLotteryHandle" :visible.sync="surprisePrizeVisible"/>

    <Dialog :visible.sync="facialMaskVisible" titleImg="static/images/store/activityTitle.png">
      <FacialMask @FacialMaskClick="FacialMaskClickHandle" slot="body"/>
    </Dialog>

    <Dialog :hasSureButton="true" @sureCallBack="notWonSureHandle" :visible.sync="notWonVisible" titleImg="static/images/store/PrizeTitle1.png">
      <NotWon slot="body"/>
    </Dialog>
  </div>
</template>

<script>
import Dialog from '@/components/Dialog'
import About from './About'
import Code from './Code'
import PrizeCheck from './PrizeCheck'
import Ranking from './Ranking'
import SurprisePrize from "./SurprisePrize"
import FacialMask from "./FacialMask"
import NotWon from "./NotWon"
import wxConfig from './wx-sdk/wx.config'

export default {
  components: {
    Dialog,
    About,
    Code,
    PrizeCheck,
    Ranking,
    SurprisePrize,
    FacialMask,
    NotWon
  },
  data () {
    return {
      aboutVisible: false,
      codeVisible: false,
      rankingVisible: false,
      prizeCheckVisible: false,
      surprisePrizeVisible: false,
      facialMaskVisible: false,
      notWonVisible: false,
      prize: ''
    }
  },
  methods: {
    showDialog (visible) {
      this[visible] = true
    },
    lotteryHandle (prize) {
      this.prize = prize
      this.prizeCheckVisible = false
      this.surprisePrizeVisible = true
    },
    afterLotteryHandle (prize) {
      this.surprisePrizeVisible = false
      this.facialMaskVisible = prize === 'loveBox'
      this.notWonVisible = prize === 'none'
    },
    FacialMaskClickHandle () {
      this.facialMaskVisible = false
      this.prizeCheckVisible = true
    },
    notWonSureHandle () {
      this.notWonVisible = false
      this.prizeCheckVisible = true
    }
  }
}
</script>

<style lang="less">
.store {
  .store-title {
    margin: 1rem 0;
    position: relative;
    img {
      width: 8.43rem;
    }
    .store-score {
      bottom: 0;
      margin-top: -1.2rem;
      text-indent: 0.2rem;
      font-size: 0.8rem;
      font-weight: bold;
      color: #fce700;
    }
  }
  .store-btns {
    .store-btn-item {
      img {
        margin: .3rem 0;
        width: 7.5rem;
      }
    }
  }
}
</style>
