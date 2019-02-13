<template>
  <div class="store-rank">
    <div class="rank-content">
      <div class="rank-header">
        <div class="current-rank">当前排名：<span class="scoke">50</span></div>
        <div class="current-scoke">
          我的转发数：<span class="scoke">900</span>
        </div>
      </div>
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
  }
}
</script>

<style lang="less" scoped>
.rank-content {
  .rank-header {
    position: relative;
    padding: 5px;
    text-align: left;
    color: rgb(184, 114, 29);
    font-weight: bold;
    .current-scoke {
      position: absolute;
      right: 5px;
      top: 5px;
    }
    .myScoreImg {
      margin-left: 5px;
      width: .4rem;
      vertical-align: text-bottom;
    }
    .scoke {
      color: #FF0000;
    }
  }
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
</style>
