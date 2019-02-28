<template>
  <div class="prize-check">
    <div class="prize-check-total">
      核销总数: <span>900</span>
    </div>

    <div class="prize-check-camera">
      <img @click="saoYiSao" src="@/assets/store/writeOffBtn.png" alt="">

      <p>点击按钮扫描二维码，核销用户奖品</p>
    </div>

    <div class="rank-content">
      <div class="rank-body">
        <div class="title">
          <span class="title-item">名次</span>
          <span class="title-item">头像</span>
          <span class="title-item flex2">昵称</span>
          <span class="title-item">分数</span>
        </div>
        <div class="content">
          <div class="rowItem" v-for="(item, index) in mockData" :key="index">
            <span class="row-item">{{item.rank}}</span>
            <span class="row-item">{{item.headerImg}}</span>
            <span class="row-item flex2">{{item.name}}</span>
            <span class="row-item">{{item.score}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import wx from 'weixin-js-sdk'
export default {
  created () {
    this.mockData = [
      {
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },
      {
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },
      {
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },
      {
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },
      {
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },
      {
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },
      {
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },
      {
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },
      {
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },
      {
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },{
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },
      {
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },
      {
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },
      {
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },{
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },
      {
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },{
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      },
      {
        rank: 1,
        headerImg: 'xxx',
        name: 'hukai',
        score: 100
      }
    ]
  },
  methods: {
    saoYiSao () {
      const _this = this
      wx.scanQRCode({
        needResult : 1,
        scanType : [ "qrCode", "barCode" ],
        success : function(res) {
          console.log(res)
          alert(JSON.stringify(res))
          _this.lottery()
        },
        fail : function(res) {
          console.log(res)
          alert(JSON.stringify(res))
  
        }
      })
    },
    // 扫描二维码抽奖
    lottery () {
      this.$emit('lottery')
    }
  }
}
</script>

<style lang="less" scoped>
.prize-check {
  color: #d86620;
  .prize-check-total {
    font-size: 0.5rem;
    font-weight: bold;
    span {
      color: #ea2f13;
    }
  }
  .prize-check-camera {
    height: 4rem;
    margin: .1rem .2rem .4rem .2rem;
    background-color: #fff7a7;
    border-radius: .4rem;
    font-size: .4rem;
    font-weight: bold;
    img {
      width: 1rem;
      margin-top: 1rem;
      margin-bottom: .4rem;
    }
  }
  .rank-content {
    .rank-body {
      margin-bottom: 10px;
      border: 2px solid rgb(184, 114, 29);
      border-radius: 8px;
      .title {
        display: flex;
        padding: 5px 10px;
        border-radius: 8px 8px 0 0;
        background: rgb(255, 241, 96);
        color: rgb(184, 114, 29);
        font-weight: bold;
        .title-item {
          flex: 1;
        }
        .flex2 {
          flex: 2;
        }
      }
      .content {
        max-height: 5rem;
        overflow-y: auto;
        .rowItem {
          display: flex;
          padding: 0 10px;
          background: rgb(255, 255, 255);
          color: rgb(184, 114, 29);
          font-weight: bold;
          .row-item {
            flex: 1;
          }
          .flex2 {
            flex: 2;
          }
          &:nth-child(2n) {
            background: rgb(255, 250, 199);
          }
          &:last-child {
            border-radius: 0 0 8px 8px;
          }
        }
      }
    }
  }
}
</style>
