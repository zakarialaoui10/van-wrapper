import {DomWrapper} from "ziko-wrapper/solid"
const VanWrapper=({children})=>DomWrapper({children, wrapper:"van-wrapper", engine:"vanjs"})
export{
    VanWrapper
}