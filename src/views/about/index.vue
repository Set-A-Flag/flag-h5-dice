<template>
  <div class="about">
    <Dialog :visible.sync="visible" :titleImg="titleImg" :hasSureButton="hasSureButton" @sureCallBack="sureCallBack">
      <div slot="body">
        {{ userName.toString()}}
      </div>
    </Dialog>
  </div>
</template>
<script>
import Dialog from '@/components/Dialog'
export default {
  name: 'about',
  components: {
    Dialog
  },
  data() {
    return {
      visible: false,
      hasSureButton: true,
      titleImg: '/static/images/dialog/gameDescriptionTitle.png'
    }
  },
  computed: {
    userName() {
      return this.$store.userInfo
    }
  },
  methods: {
    sureCallBack() {
      this.visible = false
    }
  }
}
</script>

