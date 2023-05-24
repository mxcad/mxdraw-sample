<template>
  <div id="mxdiv">
    <canvas id="myCanvas"></canvas>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Mx from "mxdraw";

@Options({
  props: {
    msg: String,
  },
})
export default class HelloWorld extends Vue {
  msg!: string;
  mounted() {
    // 创建MxDraw对像,打开test.dwg图纸
    Mx.MxFun.createMxObject({
      canvasId: "myCanvas",
      //cadFile: "http://localhost:8080/demo/buf/test.dwg.mxb1.wgh",  //后端程序转换dwg文件后的文件位置
      cadFile: "./demo/buf/test.dwg.mxb1.wgh",  //后端程序转换dwg文件后的文件位置
      callback(mxDrawObject, { canvas, canvasParent }) {
        canvasParent.className = "mxdiv";

        mxDrawObject.addEvent("loadComplete", () => {
          console.log("mx loadComplete");
          });
          },
      });
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
html::-webkit-scrollbar {
  width: 0 !important;
  -ms-overflow-style: none;
  overflow: -moz-scrollbars-none;
}


.mxdiv {
  width: 100%;
  position: relative;
  height: 100vh;
}

#myCanvas {
  width: 100%;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
