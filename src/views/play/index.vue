<template>
  <div class="game">
    <div class="point">
      <!-- 分数 -->
      {{point.value}}
    </div>
    
    <div class="gameContent">
      <!-- 游戏内容 -->
      <div class="monkey" :style="game.monkeyStyle">
        <!-- 移动的猴子 -->
      </div>
    </div>
    <!-- <button @click="changePosition">测试</button><span>{{game.random}}</span> -->
    <div class="gameFooter">
      <div class="goBtn">
        <img src="/static/game/goBtn.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return{
      point:{
        value:109
      },
      game:{
        monkeyStyle:{
          background:'url(/static/game/player4.png) no-repeat center top',
          // left:'0.43rem',
          left:'0',
          top:'0'
        },
        random:0,//骰子随机数
        monkeySiteNum:0
      }
    }
  },
  methods:{
    changePosition(){
      this.game.random = Math.floor(Math.random()* 6+1)
      this.moveByNum(this.game.random-1)
    },
    // 递归执行猴子行动 ceshipush
    moveByNum(num){
      if(num>-1){
        this.monkeyMove()
        if(this.game.monkeySiteNum==16){
          this.game.monkeySiteNum = 1
        }else{
          this.game.monkeySiteNum = this.game.monkeySiteNum+1
        }
        num = num - 1
        setTimeout(()=>{
          this.moveByNum(num)
        },600)
      }else{
        // 最后一次移动
        this.monkeyMove(true)
      }
      
    },
    monkeyMove(flag){
      switch (this.game.monkeySiteNum) {
        case 0:
          this.game.monkeyStyle.left = 0
          this.game.monkeyStyle.top = 0
          if(flag){
            console.log(1)
          }
          break
        case 1:
          this.game.monkeyStyle.left = (128 + 10) / 75 + 'rem'
          this.game.monkeyStyle.top = 0
          if(flag){
            console.log(1)
          }
          break
        case 2:
          this.game.monkeyStyle.left = (128 + 10) * 2 / 75 + 'rem'
          this.game.monkeyStyle.top = 0
          break
        case 3:
          this.game.monkeyStyle.left = (128 + 10) * 3 / 75 + 'rem'
          this.game.monkeyStyle.top = 0
          this.$nextTick(()=>{
            this.game.monkeyStyle.background='url(/static/game/player1.png) no-repeat center top'
          })
          break
        case 4:
          this.game.monkeyStyle.left = (128 + 10) * 3 / 75 + 'rem'
          this.game.monkeyStyle.top = (128 + 12) / 75 +'rem'
          this.$nextTick(()=>{
            this.game.monkeyStyle.background='url(/static/game/player4.png) no-repeat center top'
          })
          break
        case 5:
          this.game.monkeyStyle.left = (128 + 10) * 4 / 75 + 'rem'
          this.game.monkeyStyle.top = (128 + 12) / 75 +'rem'
          this.$nextTick(()=>{
            this.game.monkeyStyle.background='url(/static/game/player1.png) no-repeat center top'
          })
          break
        case 6:
          this.game.monkeyStyle.left = (128 + 10) * 4 / 75 + 'rem'
          this.game.monkeyStyle.top = (128 + 12) * 2 / 75 +'rem'
          break
        case 7:
          this.game.monkeyStyle.left = (128 + 10) * 4 / 75 + 'rem'
          this.game.monkeyStyle.top = (128 + 12) * 3 / 75 +'rem'
          this.$nextTick(()=>{
            this.game.monkeyStyle.background='url(/static/game/player2.png) no-repeat center top'
          })
          break
        case 8:
          this.game.monkeyStyle.left = (128 + 10) * 3 / 75 + 'rem'
          this.game.monkeyStyle.top = (128 + 12) * 3 / 75 +'rem'
          break
        case 9:
          this.game.monkeyStyle.left = (128 + 10) * 2 / 75 + 'rem'
          this.game.monkeyStyle.top = (128 + 12) * 3 / 75 +'rem'
          this.$nextTick(()=>{
            this.game.monkeyStyle.background='url(/static/game/player1.png) no-repeat center top'
          })
          break
        case 10:
          this.game.monkeyStyle.left = (128 + 10) * 2 / 75 + 'rem'
          this.game.monkeyStyle.top = (128 + 12) * 4 / 75 +'rem'
          this.$nextTick(()=>{
            this.game.monkeyStyle.background='url(/static/game/player2.png) no-repeat center top'
          })
          break
        case 11:
          this.game.monkeyStyle.left = (128 + 10) / 75 + 'rem'
          this.game.monkeyStyle.top = (128 + 12) * 4 / 75 +'rem'
          break
        case 12:
          this.game.monkeyStyle.left = 0
          this.game.monkeyStyle.top = (128 + 12) * 4 / 75 +'rem'
          this.$nextTick(()=>{
            this.game.monkeyStyle.background='url(/static/game/player3.png) no-repeat center top'
          })
          break
        case 13:
          this.game.monkeyStyle.left = 0
          this.game.monkeyStyle.top = (128 + 12) * 3 / 75 +'rem'
          break
        case 14:
          this.game.monkeyStyle.left = 0
          this.game.monkeyStyle.top = (128 + 12) * 2 / 75 +'rem'
          break
        case 15:
          this.game.monkeyStyle.left = 0
          this.game.monkeyStyle.top = (128 + 12) / 75 +'rem'
          break
        case 16:
          this.game.monkeyStyle.left = 0
          this.game.monkeyStyle.top = 0
          this.$nextTick(()=>{
            this.game.monkeyStyle.background='url(/static/game/player4.png) no-repeat center top'
          })
          break                
        default:
          break
      }
    }
  }
}
</script>
<style lang="less">
  .game{
    width: 100%;
    height: 100%;
    position: relative;
    .point{
      width: 100%;
      height: 183/75rem;
      margin-top: 1rem;
      line-height: 200/75rem;
      font-size: 1rem;
      background: url(/static/game/scoreTitle.png) no-repeat center top;
      background-size:453/75rem 183/75rem;
      font-family: sans-serif;
    }
    .gameContent{
      // width: 100%;
      width: 9.13rem;
      position: relative;
      margin: 1rem auto 0;
      height: 687/75rem;
      background: url(/static/game/guidao.png) no-repeat center top;
      background-size:685/75rem 687/75rem;
      // padding:0 0.43rem;
      // box-sizing: border-box;
      .monkey{
        position: absolute;
        width: 1.65rem;
        height: 1.65rem;
        background-size: 90% !important; 
        -webkit-transition-property:top,left;
        -webkit-transition-duration:0.5s;
        left:calc(1.83rem + 0.43rem);   
      }
      
    }
    .gameFooter {
      .sezi {
        
      }
      .goBtn {
        float: right;
        margin-right: 1rem;
        img {
          width: 2.8rem;
        }
      }
    }
  }
</style>


