<template>
  <div class="prize">
    <Dialog :visible.sync="visible" :titleImg="getCurrentTitle()">
      <div slot="body">
        <SureTel @sureTel="sureTelHandle" v-if="showControl.isShowSureTel"/>
        <PrizeList @prizeClick="prizeClickHandle" v-else-if="showControl.isShowPrizeList"/>
        <QrCode v-else-if="showControl.isShowQrCode"/>
        <FacialMask v-else-if="showControl.isShowFacialMask"/>
        <ReceiveInfo v-else-if="showControl.isShowReceiveInfo"/>
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
  'isShowSureTel': '/static/images/prize/phoneTitle.png',
  'isShowPrizeList': '/static/images/prize/myPrizesTitle.png',
  'isShowQrCode': '/static/images/prize/PrizesQRcodeTitle.png',
  'isShowFacialMask': '/static/images/prize/PrizeTitle.png',
  'isShowReceiveInfo': '/static/images/prize/myAddresTitle.png'
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
      showControl: {
        isShowSureTel: true,
        isShowPrizeList: false,
        isShowQrCode: false,
        isShowFacialMask: false,
        isShowReceiveInfo: false
      }
    }
  },
  methods: {
    sureTelHandle () {
      this.setAllUnshow()
      this.showControl.isShowPrizeList = true
    },
    prizeClickHandle (prize) {
      this.setAllUnshow()
      if (prize === 'code') {
        this.showControl.isShowQrCode = true
      } else if (prize === 'receive') {
        this.showControl.isShowReceiveInfo = true       
      } else if (prize === 'facial') {
        this.showControl.isShowFacialMask = true
      }
    },
    setAllUnshow () {
      const _this = this
      Object.keys(_this.showControl).forEach(state => {
        _this.showControl[state] = false
      })
    },
    getCurrentTitle () {
      const _this = this
      let titleImg = ''
      Object.keys(_this.showControl).forEach(state => {
        _this.showControl[state] && (titleImg = TITLE_MAP[state])
      })
      return titleImg
    }
  },
  watch: {
    visible (next) {
      if (next) {
        this.setAllUnshow()
        this.showControl.isShowSureTel = true
      }
    }
  }
}
</script>
