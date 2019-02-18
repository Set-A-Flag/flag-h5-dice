<template>
  <div class="prize">
    <Dialog :visible.sync="sureTelVisible" :titleImg="TITLE_MAP['sureTelVisible']">
      <div slot="body">
        <SureTel @sureTel="sureTelHandle"/>
      </div>
    </Dialog>

    <Dialog :visible.sync="prizeListVisible" :titleImg="TITLE_MAP['prizeListVisible']">
      <div slot="body">
        <PrizeList @PrizeSureBtnClick="prizeListVisible = false" @prizeClick="prizeClickHandle"/>
      </div>
    </Dialog>

    <Dialog :visible.sync="qrCodeVisible" :titleImg="TITLE_MAP['qrCodeVisible']" @closeCallback="backToPrizeList">
      <div slot="body">
        <QrCode/>
      </div>
    </Dialog>

    <Dialog :visible.sync="facialMaskVisible" :titleImg="TITLE_MAP['facialMaskVisible']" @closeCallback="backToPrizeList">
      <div slot="body">
        <FacialMask @FacialMaskClick="backToPrizeList"/>
      </div>
    </Dialog>

    <Dialog :visible.sync="receiveInfoVisible" :titleImg="TITLE_MAP['receiveInfoVisible']" @closeCallback="backToPrizeList">
      <div slot="body">
        <ReceiveInfo @ReceiveInfoClick="backToPrizeList"/>
      </div>
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
    backToPrizeList () {
      this.setAllUnVisible()
      this.prizeListVisible = true
    },
    close (visible) {
      this[visible] = false
    },
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
  }
}
</script>
