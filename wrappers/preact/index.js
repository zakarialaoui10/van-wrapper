import {DomWrapper} from "ziko-wrapper/preact"
const VanWrapper=({children})=>DomWrapper({children, wrapper:"van-wrapper", engine:"vanjs"})
export{
    VanWrapper
}