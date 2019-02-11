<template>
  <div class="rank">
    <Dialog :visible.sync="visible" :titleImg="titleImg">
      <div slot="body">
        游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明
        游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明
        游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明游戏说明
      </div>
    </Dialog>
  </div>
</template>
<script>
import Dialog from '@/components/Dialog'
export default {
  name: 'rank',
  components: {
    Dialog
  },
  data() {
    return {
      visible: false,
      titleImg: '/static/images/dialog/nationalRankingsTitle1.png'
    }
  },
}
</script>


