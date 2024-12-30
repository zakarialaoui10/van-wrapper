import {DomWrapper} from "ziko-wrapper/react"
const VanWrapper=({children})=>DomWrapper({children, wrapper:"van-wrapper", engine:"vanjs"})
export{
    VanWrapper
}