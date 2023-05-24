<script setup lang="ts">
import { ref } from 'vue'
import { loadCoreCode, MxFun, useCanvasResizeListener, MxDbLine } from "mxdraw"
defineProps<{ msg: string }>()

const count = ref(0)
loadCoreCode().then(()=> {
          MxFun.createMxObject({
              canvasId: "mxcad",
              cadFile: '/demo/buf/hhhh.dwg',
              useWebsocket: false,
              callback: (mxDraw, {
                  canvas,
                  canvasParent
              }) => {
                  console.
                  log(canvas, canvasParent)
                  canvasParent.style.height = "100vh"
                  console.log(mxDraw)
                  // useCanvasResizeListener((mxDraw as any) , canvas, ()=> {

                  // })
                  
                  mxDraw.addEvent('uiSetLayerData', (listLayer) => {
                      console.log(listLayer)
                  })            
              },
              isNewFile: true
          })
          
           
  })
</script>

<template>
  <div>
  </div>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
