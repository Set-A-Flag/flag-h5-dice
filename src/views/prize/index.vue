<template>
  <div class="prize">
    <Dialog :visible.sync="sureTelVisible" :titleImg="TITLE_MAP['sureTelVisible']">
        <SureTel slot="body" @sureTel="sureTelHandle"/>
    </Dialog>

    <Dialog :visible.sync="prizeListVisible" :titleImg="TITLE_MAP['prizeListVisible']">
        <PrizeList slot="body" @PrizeSureBtnClick="prizeListVisible = false" @prizeClick="prizeClickHandle"/>
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
      sureTelVisible: false,
      prizeListVisible: false,
      qrCodeVisible: false,
      facialMaskVisible: false,
      receiveInfoVisible: false
    }
  },
  methods: {
    // 返回奖品列表
    backToPrizeList () {
      this.setAllUnVisible()
      this.prizeListVisible = true
    },
    // 关闭窗口
    close (visible) {
      this[visible] = false
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
    },
    // 第一次查看奖品，需要输入手机号
    isNeedPhone () {
      const result = true
      if (result) {
        this.sureTelVisible = true
      } else {
        this.prizeListVisible = true
      }
    }
  },
  created () {
    this.TITLE_MAP = TITLE_MAP
  }
}
</script>
