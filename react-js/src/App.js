import Mx from "mxdraw"
import { useEffect } from "react"
import './App.css'
function App() {
  
  useEffect(() => {
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
  }, [])
  return (
    <div className="App">
      <div className="mxdiv">
        <canvas id="mxcad"></canvas>
      </div>
    </div>
  );
}

export default App;
