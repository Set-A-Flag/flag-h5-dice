<template>
  <div class="prize" v-if="visible">
    <Dialog :visible.sync="sureTelVisible" :titleImg="TITLE_MAP['sureTelVisible']" @closeCallback="close">
        <SureTel slot="body" @sureTel="sureTelHandle"/>
    </Dialog>

    <Dialog :visible.sync="prizeListVisible" :titleImg="TITLE_MAP['prizeListVisible']" @closeCallback="close">
        <PrizeList slot="body" @PrizeSureBtnClick="close" @prizeClick="prizeClickHandle"/>
    </Dialog>

    <Dialog :visible.sync="qrCodeVisible" :titleImg="TITLE_MAP['qrCodeVisible']" @closeCallback="backToPrizeList">
        <QrCode slot="body"/>
    </Dialog>

    <Dialog :visible.sync="facialMaskVisible" :titleImg="TITLE_MAP['facialMaskVisible']" @closeCallback="backToPrizeList">
        <FacialMask slot="body" @FacialMaskClick="backToPrizeList"/>
    </Dialog>

    <Dialog :visible.sync="receiveInfoVisible" :titleImg="TITLE_MAP['receiveInfoVisible']" @closeCallback="backToPrizeList">
        <ReceiveInfo slot="body" @ReceiveInfoClick="backToPrizeList"/>
    </Dialog>
  </div>
</template>

<script>
import {home} from '@/api'
import Dialog from '@/components/Dialog'
import SureTel from './SureTel'
import PrizeList from './PrizeList'
import QrCode from './QrCode'
import FacialMask from './FacialMask'
import ReceiveInfo from './ReceiveInfo'

const TITLE_MAP = {
  'sureTelVisible': '/static/images/prize/phoneTitle.png',
  'prizeListVisible': '/static/images/prize/myPrizesTitle.png',
  'qrCodeVisible': '/static/images/prize/PrizesQRcodeTitle.png',
  'facialMaskVisible': '/static/images/prize/PrizeTitle.png',
  'receiveInfoVisible': '/static/images/prize/myAddresTitle.png'
}

export default {
  name: 'prize',
  components: {
    Dialog,
    SureTel,
    PrizeList,
    QrCode,
    FacialMask,
    ReceiveInfo
  },
  data () {
    return {
      visible: false,
      sureTelVisible: false,
      prizeListVisible: false,
      qrCodeVisible: false,
      facialMaskVisible: false,
      receiveInfoVisible: false
    }
  },
  methods: {
    // 第一次查看奖品，需要输入手机号
    isFirstViewPrizes (account) {
      home.isFirstViewPrizes({account}).then(res => {
        if (res && res.result) {
          const isFirstViewPrizes = res.result
          this.sureTelVisible = isFirstViewPrizes
          this.prizeListVisible = !isFirstViewPrizes
        }
      })
    },
    // 返回奖品列表
    backToPrizeList () {
      this.setAllUnVisible()
      this.prizeListVisible = true
    },
    // 关闭窗口
    close (visible) {
      this.visible = false
    },
    // 确认手机号
    sureTelHandle () {
      this.sureTelVisible = false
      this.prizeListVisible = true
    },
    prizeClickHandle (activeVisible) {
      this.prizeListVisible = false
      this[activeVisible] = true
    },
    setAllUnVisible () {
      const _this = this
      Object.keys(TITLE_MAP).forEach(visible => {
        _this[visible] = false
      })
    }
  },
  created () {
    this.TITLE_MAP = TITLE_MAP
  },
  watch: {
    visible (next) {
      next? this.isFirstViewPrizes(110) : this.setAllUnVisible()
    }
  }
}
</script>
