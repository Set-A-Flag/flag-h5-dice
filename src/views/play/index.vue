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
        <img v-show="game.monkeyImg==1" src="/static/game/player1.png" alt>
        <img v-show="game.monkeyImg==2" src="/static/game/player2.png" alt>
        <img v-show="game.monkeyImg==3" src="/static/game/player3.png" alt>
        <img v-show="game.monkeyImg==4" src="/static/game/player4.png" alt>
      </div>
      <div class="sezi">
        <img v-show="game.seziImgIndex==1&&game.random==0" src="/static/sezi/骰子_00001.png" alt>
        <img v-show="game.seziImgIndex==2&&game.random==0" src="/static/sezi/骰子_00002.png" alt>
        <img v-show="game.seziImgIndex==3&&game.random==0" src="/static/sezi/骰子_00003.png" alt>
        <img v-show="game.seziImgIndex==4&&game.random==0" src="/static/sezi/骰子_00004.png" alt>
        <img v-show="game.seziImgIndex==5&&game.random==0" src="/static/sezi/骰子_00005.png" alt>
        <img v-show="game.seziImgIndex==6&&game.random==0" src="/static/sezi/骰子_00006.png" alt>
        <img v-show="game.seziImgIndex==7&&game.random==0" src="/static/sezi/骰子_00007.png" alt>
        <img v-show="game.seziImgIndex==8&&game.random==0" src="/static/sezi/骰子_00008.png" alt>
        <img v-show="game.seziImgIndex==9&&game.random==0" src="/static/sezi/骰子_00009.png" alt>
        <img v-show="game.seziImgIndex==10&&game.random==0" src="/static/sezi/骰子_00010.png" alt>
        <img v-show="game.seziImgIndex==11&&game.random==0" src="/static/sezi/骰子_00011.png" alt>
        <img v-show="game.seziImgIndex==12&&game.random==0" src="/static/sezi/骰子_00012.png" alt>
        <img v-show="game.seziImgIndex==13&&game.random==0" src="/static/sezi/骰子_00013.png" alt>
        <img v-show="game.seziImgIndex==14&&game.random==0" src="/static/sezi/骰子_00014.png" alt>
        <img v-show="game.seziImgIndex==15&&game.random==0" src="/static/sezi/骰子_00015.png" alt>
        <img v-show="game.seziImgIndex==16&&game.random==0" src="/static/sezi/骰子_00016.png" alt>
        <img v-show="game.seziImgIndex==17&&game.random==0" src="/static/sezi/骰子_00017.png" alt>
        <img v-show="game.seziImgIndex==18&&game.random==0" src="/static/sezi/骰子_00018.png" alt>
        <img v-show="game.seziImgIndex==19&&game.random==0" src="/static/sezi/骰子_00019.png" alt>
        <img v-show="game.random==1&&game.seziImgIndex==0" src="/static/sezi/骰子_00032.png" alt>
        <img v-show="game.random==2&&game.seziImgIndex==0" src="/static/sezi/骰子_00033.png" alt>
        <img v-show="game.random==3&&game.seziImgIndex==0" src="/static/sezi/骰子_00034.png" alt>
        <img v-show="game.random==4&&game.seziImgIndex==0" src="/static/sezi/骰子_00035.png" alt>
        <img v-show="game.random==5&&game.seziImgIndex==0" src="/static/sezi/骰子_00036.png" alt>
        <img v-show="game.random==6&&game.seziImgIndex==0" src="/static/sezi/骰子_00037.png" alt>
      </div>
    </div>
    <!-- <button @click="changePosition">测试</button><span>{{game.random}}</span> -->
    <div class="gameFooter">
      <div class="goBtn">
        <img src="/static/game/goBtn.png" @click="go" alt>
        <div v-if="btnModalShow" class="modal"></div>
      </div>
    </div>
    <SurprisePrize :visible.sync="surprisePrizeVisible"/>
    <scoreO :visible="scoreShow" :mode="scoreMode"/>
  </div>
</template>
<script>
import SurprisePrize from "./SurprisePrize";
import scoreO from "./scoreO";

export default {
  components: {
    SurprisePrize,
    scoreO
  },
  data() {
    return {
      surprisePrizeVisible: false,
      btnModalShow: false, //按钮遮罩
      point: {
        value: 100
      },
      game: {
        time: 3,
        monkeyStyle: {
          // left:'0.43rem',
          left: "0",
          top: "0"
        },
        monkeyImg: 4,
        random: 0, //骰子随机数
        monkeySiteNum: 0,
        seziImgIndex: 0
      },
      scoreShow: false,
      scoreMode: "10",
      canHaveMianmo: true
    };
  },
  methods: {
    go() {
      this.game.time = this.game.time - 1;
      this.getRandom(19);
    },
    getRandom(num) {
      this.btnModalShow = true;
      this.game.random = 0;
      if (num > 0) {
        num = num - 1;
        this.game.seziImgIndex = 19 - num;
        setTimeout(() => {
          this.getRandom(num);
        }, 100);
      } else {
        this.game.seziImgIndex = 0;
        this.game.random = Math.floor(Math.random() * 6 + 1);
        this.moveByNum(this.game.random - 1);
      }
    },
    // 递归执行猴子行动 ceshipush
    moveByNum(num) {
      if (num > -1) {
        this.monkeyMove();
        if (this.game.monkeySiteNum == 16) {
          this.game.monkeySiteNum = 1;
        } else {
          this.game.monkeySiteNum = this.game.monkeySiteNum + 1;
        }
        num = num - 1;
        setTimeout(() => {
          this.moveByNum(num);
        }, 600);
      } else {
        // 最后一次移动
        this.monkeyMove(true);
        setTimeout(() => {
          this.btnModalShow = false;
          this.game.random = 0;
        }, 600);
      }
    },
    monkeyMove(flag) {
      switch (this.game.monkeySiteNum) {
        case 0:
          this.game.monkeyStyle.left = 0;
          this.game.monkeyStyle.top = 0;

          break;
        case 1:
          this.game.monkeyStyle.left = (128 + 10) / 75 + "rem";
          this.game.monkeyStyle.top = 0;

          break;
        case 2:
          this.game.monkeyStyle.left = ((128 + 10) * 2) / 75 + "rem";
          this.game.monkeyStyle.top = 0;
          if (flag) {
            this.scoreShow = true;
            this.scoreMode = "doubling";
            this.point.value = this.point.value*2;
          }
          break;
        case 3:
          this.game.monkeyStyle.left = ((128 + 10) * 3) / 75 + "rem";
          this.game.monkeyStyle.top = 0;
          this.$nextTick(() => {
            this.game.monkeyImg = 1;
            if (flag) {
              this.scoreShow = true;
              this.scoreMode = "onceMore";
              this.game.time = this.game.time + 1;
            }
          });
          break;
        case 4:
          this.game.monkeyStyle.left = ((128 + 10) * 3) / 75 + "rem";
          this.game.monkeyStyle.top = (128 + 12) / 75 + "rem";
          this.$nextTick(() => {
            this.game.monkeyImg = 4;
            if (flag) {
              this.scoreShow = true;
              this.scoreMode = "halve";
              this.point.value = this.point.value/2;
            }
          });
          break;
        case 5:
          this.game.monkeyStyle.left = ((128 + 10) * 4) / 75 + "rem";
          this.game.monkeyStyle.top = (128 + 12) / 75 + "rem";
          this.$nextTick(() => {
            this.game.monkeyImg = 1;
            if (flag) {
              let num = Math.floor(Math.random() * 3 + 1) * 10;
              this.scoreShow = true;
              this.scoreMode = "" + num;
              this.point.value = this.point.value + num;
            }
          });
          break;
        case 6:
          this.game.monkeyStyle.left = ((128 + 10) * 4) / 75 + "rem";
          this.game.monkeyStyle.top = ((128 + 12) * 2) / 75 + "rem";
          if (this.canHaveMianmo && flag) {
            // 获取面膜
          }
          break;
        case 7:
          this.game.monkeyStyle.left = ((128 + 10) * 4) / 75 + "rem";
          this.game.monkeyStyle.top = ((128 + 12) * 3) / 75 + "rem";
          this.$nextTick(() => {
            this.game.monkeyImg = 2;
            if (flag) {
              let num = Math.floor(Math.random() * 3 + 1) * 10;
              this.scoreShow = true;
              this.scoreMode = "-" + num;
              this.point.value = this.point.value - num;
            }
            // this.game.monkeyStyle.background='url(/static/game/player2.png) no-repeat center top'
          });
          break;
        case 8:
          this.game.monkeyStyle.left = ((128 + 10) * 3) / 75 + "rem";
          this.game.monkeyStyle.top = ((128 + 12) * 3) / 75 + "rem";

          break;
        case 9:
          this.game.monkeyStyle.left = ((128 + 10) * 2) / 75 + "rem";
          this.game.monkeyStyle.top = ((128 + 12) * 3) / 75 + "rem";
          this.$nextTick(() => {
            this.game.monkeyImg = 1;
            if (flag) {
              // 进行抽奖
            }
          });
          break;
        case 10:
          this.game.monkeyStyle.left = ((128 + 10) * 2) / 75 + "rem";
          this.game.monkeyStyle.top = ((128 + 12) * 4) / 75 + "rem";
          this.$nextTick(() => {
            this.game.monkeyImg = 2;
            if (this.canHaveMianmo && flag) {
              // 获取面膜
            }
            // this.game.monkeyStyle.background='url(/static/game/player2.png) no-repeat center top'
          });
          break;
        case 11:
          this.game.monkeyStyle.left = (128 + 10) / 75 + "rem";
          this.game.monkeyStyle.top = ((128 + 12) * 4) / 75 + "rem";

          break;
        case 12:
          this.game.monkeyStyle.left = 0;
          this.game.monkeyStyle.top = ((128 + 12) * 4) / 75 + "rem";
          this.$nextTick(() => {
            this.game.monkeyImg = 3;
            if (flag) {
              this.scoreShow = true;
              this.scoreMode = "onceMore";
              this.game.time = this.game.time + 1;
            }
          });
          break;
        case 13:
          this.game.monkeyStyle.left = 0;
          this.game.monkeyStyle.top = ((128 + 12) * 3) / 75 + "rem";
          if (flag) {
            this.scoreShow = true;
            this.scoreMode = "doubling";
            this.point.value = this.point.value*2;
          }
          break;
        case 14:
          this.game.monkeyStyle.left = 0;
          this.game.monkeyStyle.top = ((128 + 12) * 2) / 75 + "rem";

          break;
        case 15:
          this.game.monkeyStyle.left = 0;
          this.game.monkeyStyle.top = (128 + 12) / 75 + "rem";
          if (flag) {
            this.scoreShow = true;
            this.scoreMode = "halve";
            this.point.value = this.point.value/2;
          }
          break;
        case 16:
          this.game.monkeyStyle.left = 0;
          this.game.monkeyStyle.top = 0;
          this.$nextTick(() => {
            this.game.monkeyImg = 4;
            // this.game.monkeyStyle.background='url(/static/game/player4.png) no-repeat center top'
          });
          break;
        default:
          break;
      }
    }
  }
};
</script>
<style lang="less">
.game {
  width: 100%;
  height: 100%;
  position: relative;
  .point {
    width: 100%;
    height: 183/75rem;
    margin-top: 1rem;
    line-height: 200/75rem;
    font-size: 1rem;
    background: url(/static/game/scoreTitle.png) no-repeat center top;
    background-size: 453/75rem 183/75rem;
    font-family: sans-serif;
    color: #7d3d00;
  }
  .gameContent {
    // width: 100%;
    width: 9.13rem;
    position: relative;
    margin: 1rem auto 0;
    height: 687/75rem;
    background: url(/static/game/guidao.png) no-repeat center top;
    background-size: 685/75rem 687/75rem;
    .sezi {
      position: absolute;
      width: 300/75rem;
      height: 650/75rem;
      left: 2.565rem;
      top: -2.5rem;
      img {
        width: 100%;
        height: 100%;
      }
    }
    // padding:0 0.43rem;
    // box-sizing: border-box;
    .monkey {
      position: absolute;
      width: 1.65rem;
      height: 1.65rem;
      background-size: 90% !important;
      -webkit-transition-property: top, left;
      -webkit-transition-duration: 0.5s;
      left: calc(1.83rem + 0.43rem);
      img {
        width: 90%;
        height: 90%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }
    }
  }
  .gameFooter {
    .sezi {
    }
    .goBtn {
      float: right;
      margin-right: 1rem;
      position: relative;
      img {
        width: 2.8rem;
      }
      .modal {
        position: absolute;
        width: 100%;
        height: 100%;
        z-index: 100;
        top: 0;
        right: 0;
        left: 0;
        bottom: 0;
      }
    }
  }
}
</style>


