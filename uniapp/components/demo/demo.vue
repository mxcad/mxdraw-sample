<template>
	<view class="page-wrap">
	
		<div id="mxdiv">
			
		</div>
	  
	</view>
	
	
	
	
</template>



<script  lang="ts" setup >
	

</script>

<script module="mxcadModule" lang="renderjs" type="module">
	import Mx from "mxdraw"
	export default {
		mounted() {
		    // 创建MxDraw对像,打开test.dwg图纸
			const canvas = document.createElement('canvas')
			const mxdiv = document.getElementById("mxdiv")
			canvas.id = 'myCanvas'
			mxdiv.style.width = "99vw"
			mxdiv.style.height = "80vh"
			
			mxdiv.appendChild(canvas)
			Mx.loadCoreCode().then(()=> {
				Mx.MxFun.createMxObject({
					canvasId: 'myCanvas',
				  cadFile: "./static/demo/buf/test2.dwg",
				
					callback(mxDrawObject, { canvas, canvasParent }) {
						canvasParent.className = "mxdiv";
						mxDrawObject.addEvent("loadComplete", () => {
					
						});
					},
				})
			})
		}
	}
</script>

<style>
</style>