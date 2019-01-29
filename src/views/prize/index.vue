<template>
  <div class="prize">
    <Dialog :visible.sync="visible" :titleImg="getCurrentTitle()">
      <div slot="body">
        <SureTel v-if="showControl.isShowSureTel"/>
        <PrizeList v-else-if="showControl.isShowPrizeList"/>
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
  'isShowSureTel': '/static/images/prize/myAddresTitle.png',
  'isShowPrizeList': '/static/images/prize/myAddresTitle.png',
  'isShowQrCode': '/static/images/prize/PrizesQRcodeTitle.png',
  'isShowFacialMask': '/static/images/prize/myAddresTitle.png',
  'isShowReceiveInfo': '/static/images/prize/myAddresTitle.png',
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
    getCurrentTitle () {
      const _this = this
      let titleImg = ''
      Object.keys(_this.showControl).forEach(state => {
        _this.showControl[state] && (titleImg = TITLE_MAP[state])
      })
      return titleImg
    }
  }
}
</script>
