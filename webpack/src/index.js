import { loadCoreCode, MxFun } from "mxdraw"

const createCanvas = (id) => {
    const div = document.createElement("div")
    const canvas = document.createElement("canvas")
    div.style.height = "90vh"
    div.style.width = "100%"
    canvas.id = id
    div.appendChild(canvas)
    document.body.appendChild(div)
}

loadCoreCode().then(()=> {
    const canvasId = "mxcad"
    createCanvas(canvasId)
    MxFun.createMxObject({
        canvasId,
        cadFile: "./demo/buf/hhhh.dwg"
    })
})