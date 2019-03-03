<template>
  <div v-if="visible" class="surprise-prize">

    <div class="prize-draw-wrapper">
      <img class="draw-wrapper-bg" src="/static/images/surprisePrize/LuckDrawBorder1.png" alt="">

      <img v-show="drawIndex % 2 > 0" class="draw-wrapper-box" src="/static/images/surprisePrize/LuckDrawLamp1.png" alt="">
      <img v-show="drawIndex % 2 === 0" class="draw-wrapper-box" src="/static/images/surprisePrize/LuckDrawLamp2.png" alt="">
      <!-- 抽奖效果 -->
      <img
        class="draw-wrapper-result"
        v-show="drawIndex === i"
        v-for="i in 8"
        :key="i"
        :src="`/static/images/surprisePrize/LuckDrawPrize${i}.png`" alt="">
      <!-- 抽奖结果 -->
      <img v-show="drawIndex === 0" class="draw-wrapper-result" :src="`/static/images/surprisePrize/${ICON_PRIZE_MAP[prize]}`" alt="">
    </div>

    <Cover @click="coverClickHandle"/>
  </div>
</template>

<script>
import Cover from '@/components/Cover'
const ICON_PRIZE_MAP = {
  'iphone': 'LuckDrawPrize2.png',
  'facialBox': 'LuckDrawPrize1.png',
  'loveBox': 'LuckDrawPrize5.png',
  'ipad': 'LuckDrawPrize4.png',
  'none': 'LuckDrawPrize3.png'
}

export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    // 获得的奖
    prize: {
      type: String,
      default: ''
    }
  },
  components: {
    Cover
  },
  data () {
    return {
      drawIndex: 0
    }
  },
  methods: {
    // 抽奖效果
    drawPrize () {
      var num = 1
      this.timer = setInterval(() => {
        if (num < 8) {
          this.drawIndex = num
          num++
        } else {
          this.drawIndex = 0
          this.timer && clearInterval(this.timer)
          this.$emit('afterLottery', this.prize)
        }
      }, 300)
    },
    coverClickHandle () {
      this.$emit('update:visible', false)
    }
  },
  beforeCreate () {
    this.ICON_PRIZE_MAP = ICON_PRIZE_MAP
  },
  watch: {
    visible (next) {
      next && this.drawPrize()
    }
  }
}
</script>

<style lang="less" scoped>
.surprise-prize {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  background-image: url('/static/images/surprisePrize/LuckDrawBorderBg.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  .prize-draw-wrapper {
    .draw-wrapper-bg {
      position: absolute;
      width: 8rem;
      left: calc(50% - 4rem);
      top: 3rem;
    }
    .draw-wrapper-box {
      position: absolute;
      width: 6rem;
      left: calc(50% - 3rem);
      top: 6rem;
    }
    .draw-wrapper-result {
      position: absolute;
      width: 5rem;
      left: calc(50% - 2.5rem);
      top: 6.5rem;
    }
  }
}
</style>
