<template>
  <div class="about">
    <Dialog :visible.sync="visible" :titleImg="titleImg" :hasSureButton="hasSureButton" @sureCallBack="sureCallBack">
      <div slot="body">
        <div>
          hello {{name}}
        </div>
      </div>
      
    </Dialog>
  </div>
</template>
<script>
import Dialog from '@/components/Dialog'
import {getCookie} from '@/tools/commonTool'

export default {
  name: 'about',
  components: {
    Dialog
  },
  data() {
    return {
      visible: false,
      hasSureButton: true,
      titleImg: '/static/images/dialog/gameDescriptionTitle.png',
      name: ''
    }
  },
  methods: {
    sureCallBack() {
      this.visible = false
    },
    initUser() {
      this.name = this.$store.state.userInfo ? this.$store.state.userInfo.nickname : 'no'
    }
  },
  created() {
    this.initUser()
  }
}
</script>

