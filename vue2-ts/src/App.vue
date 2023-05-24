<template>
  <div id="app">
    <div class="mxdiv">
      <canvas id="mxcad"></canvas>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Mx from "mxdraw"
@Component({})
export default class App extends Vue {
  mounted() {
    // 配置 鼠标点击图形 自定选中该图形对象
    Mx.MxFun.setIniset({
      // 启用对象选择功能.
      EnableIntelliSelect: true,
      // 选择类型
      IntelliSelectType: 1,
      // 是否开启多个选择
      multipleSelect: false,
    });
    // 创建控件对象
    Mx.MxFun.createMxObject({
        canvasId: "mxcad", // canvas元素的id
        cadFile: "/demo/buf/$hhhh.dwg",
        useWebsocket: false,
    });
  }
}
</script>

<style>
.mxdiv {
  width: 100%;
  position: relative;
  padding-top: 0;
  height: 100vh;
}
</style>
