<template>
  <div>
    <span class="size-marker">
      {{width}}
      *{{height}}
    </span>
    <div ref="elm" class="elm" @resize="handlerResize"></div>
  </div>
</template>
<script>
// window.requestAnimationFrame(()=>console.log('request-animation-frame'))


import '../dist/element-resize-event-polyfill.umd'
export default {
  data() {
    return { height: 0, width: 0 }
  },
  mounted() {
    this.width = this.$refs.elm.clientWidth
    this.height = this.$refs.elm.clientHeight
  },
  methods: {
    handlerResize(e) {
      console.log(e)

      this.width = e.target.clientWidth
      this.height = e.target.clientHeight
    }
  }
}
</script>
<style>
.elm {
  width: 300px;
  height: 200px;
  border: 1px solid;
  resize: both;
  overflow: auto;
}
.size-marker {
  background-color:pink;
  
  position:absolute;
}
</style>
