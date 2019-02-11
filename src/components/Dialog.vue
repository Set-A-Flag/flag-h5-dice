<template>
  <div v-if="visible" class="dice-dialog">
    <div class="dice-dialog-top">
      <img class="dialog-title" :src="titleImg"/>
      <img @click="close" class="dialog-close-btn" src="@/assets/components/dialog/closeBtn.png"/>
    </div>
    <div class="dice-dialog-body">
      <slot name="body">
        Body
      </slot>
      <div v-if="hasSureButton" class="dice-dialog-sureButton">
        <img src="@/assets/components/dialog/isOkBtn.png" @click="sureButtonClick">
      </div>
    </div>
    <div class="dice-dialog-bottom"></div>
    <Cover/>
  </div>
</template>

<script>
import Cover from './Cover'
export default {
  props: {
    titleImg: {
      type: String,
      default: '/static/images/dialog/tipsTitle.png'
    },
    visible: {
      type: Boolean,
      default: false
    },
    hasSureButton: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Cover
  },
  methods: {
    close () {
      this.$emit('update:visible', false)
    },
    sureButtonClick () {
      this.$emit('sureCallBack')
    }
  }
}
</script>

<style lang="less">
@import '../style/dialog.less';
.dice-dialog {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 15% 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .dice-dialog-top {
    background-image: url('./../assets/components/dialog/borderTop.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 40px;
    position: relative;
    .dialog-title {
      height: 55px;
      margin-top: -20px;
    }
    .dialog-close-btn {
      position: absolute;
      width: 40px;
      height: 40px;
      top: -10px;
      right: -10px;
    }
  }
  .dice-dialog-body {
    background-image: url('./../assets/components/dialog/borderBody.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 10px .5rem 0;
  }
  .dice-dialog-sureButton {
    margin-top: 15px;
    img {
      width: 2.7rem;
    }
  }
  .dice-dialog-bottom {
    // 解决会出现缝隙的问题 不知道什么原因
    position: relative;
    top: -2px;
    background-image: url('./../assets/components/dialog/borderBottom.png');
    background-repeat: no-repeat;
    background-size: 100% 100%;
    height: 40px;
  }
}
</style>
