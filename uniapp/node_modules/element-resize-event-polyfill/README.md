# element-resize-event-polyfill

Native event listener polyfill to capture element size changes

## Install

```bash
npm install element-resize-event-polyfill --save-dev
```

### Usage

Example in es6

```javascript
import 'element-resize-event-polyfill'

const elm = document.getElementById('#elm')

elm.addEventListener('resize', handler)
```

Example in Browser

```HTML

<head>
  <script src="element-resize-event-polyfill.umd.min.js"></script>
</head>

<body>
  <div id="elm">My size can be captured</div>
</body>

<script>
  const elm=document.getElementById("elm")
  
  // case one
  elm.addEventListener("resize",function(e){
    // Your logic
  })

  // case two
  elm.onresize=function(e){
    // Your logic
  }
</script>


```

Example in vue

```HTML

<template>
  <div v-on:resize="handlerResize"></div>
</template>

<script>
export default {
  methods:{
    handlerResize(e){
      // Your code
    }
  }
}
</script>
```

 
