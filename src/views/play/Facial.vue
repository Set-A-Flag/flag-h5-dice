<template>
  <Dialog
    :visible.sync="visible"
    titleImg="/static/game/PrizeTitle2.png"
    :hasSureButton="true"
    @sureCallBack="sureCallBack">
    <div slot="body" class="facial-mask">
      <img class="facial-mask-img" src="@/assets/game/Prize2.png" alt="">

      <p class="facial-mask-info">恭喜获得果本面膜一片！请去“我的奖品”页面领取</p>
    </div>
  </Dialog>
</template>

<script>
import Dialog from '@/components/Dialog'

export default {
  components: {
    Dialog
  },
  data () {
    return {
      visibled: false
    }
  },
  props: {
      visible: {
          type: Boolean,
          default: false
      }
      
    },
    methods:{
      sureCallBack(){
        this.$parent.facialShow = false;
      }
    },
    watch: {
        visible(newv, oldv) {  
          this.visibled = newv
        }
    }
}
</script>

<style lang="less" scoped>
.facial-mask {
  width: 90%;
  margin: 0 auto;
  background-color: #fffeee;
  border: 2px solid #a5500f;
  border-radius: 5px;
  position: relative;
  padding: 0 .5rem .5rem .5rem;
  
  .facial-mask-img {
    width: 70%;
    padding: 10%;
    background-image: url(~@/assets/user/PrizeBg.png);
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center;
  }
  .facial-mask-info {
    font-size: .3rem;
    font-weight: bold;
    color: #a5500f;
  }
}
</style>
