<!-- doc -->
# Van-wrapper 
Van-Wrapper is a tool that facilitates the rendering of VanJS elements within other popular frameworks.


## Integrate Vanjs inside Other Environment

### VanJS Component Decalaration
```js
// HelloFromVan.js
import { VanWrapper } from "van-wrapper/vue";
const {a, p, div} = van.tags
const HelloFromVan = ({environement}) => div(
  p(message, a({href: "https://vanjs.org/"}, "VanJS")),
  p(
    "This is a ",
    a({href: "https://vanjs.org/"}, "VanJS "),
    `Element Wrapped inside ${environement} App`
  )
)
export default HelloFromVan
```

### Use 
#### JSX Based

```jsx
import VanWrapper from "van-wrapper/react"
// import VanWrapper from "van-wrapper/solid"
// import VanWrapper from "van-wrapper/preact"
import HelloFromVan from "./HelloFromVan.js"
const environement = "React" // It's only a message 
export default function App(){
    return (
        <VanWrapper>
           <HelloFromVan 
              environement={environement} 
            />
        </VanWrapper>
    )
 }
```

#### Vue
```xml
<script>
import VanWrapper from "van-wrapper/vue"
import HelloFromVan from "./HelloFromVan.js"
</script>
<template>
    <VanWrapper>
           <HelloFromVan 
              environement="Vue"  
            />
    </VanWrapper>
</template>
``` 
#### Svelte 
```jsx
---
import VanWrapper from "van-wrapper/svelte";
import HelloFromVan from "./HelloFromVan.js"
---
<VanWrapper ui={HelloFromVan({environement:"Svelte"})}/>
```

# License 
This projet is licensed under the terms of MIT License 
<img src="https://img.shields.io/github/license/zakarialaoui10/van-wrapper?color=rgb%2820%2C21%2C169%29" width="100" align="right">





<!-- add starter -->  