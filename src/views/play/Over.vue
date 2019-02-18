<template>
  <Dialog
    :visible.sync="visible"
    titleImg="/static/game/PrizeTitle4.png"
    :hasSureButton="true"
    @sureCallBack="visible = false">
    <div slot="body" class="over-content">
      <p class="over-content-info">游戏结束！本轮游戏得分</p>
      <p class="over-content-score">130</p>
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
      visible: false
    }
  }
}
</script>

<style lang="less" scoped>
.over-content {
  width: 90%;
  margin: 0 auto;
  background-color: #fffeee;
  border: 2px solid #d65d18;
  border-radius: .3rem;
  position: relative;
  padding: 0 .5rem .5rem .5rem;
  
  .over-content-info {
    font-size: .4rem;
    font-weight: bold;
    color: #d65d18;
    margin: .4rem 0;
  }

  .over-content-score {
    font-size: 1.2rem;
    font-weight: bold;
    color: #d65d18;
  }
}
</style>
