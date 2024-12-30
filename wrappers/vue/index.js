import { DomWrapper } from 'ziko-wrapper/vue';
export const VanWrapper = {
    ...DomWrapper, 
    ...{
        props:{
            engine : {
                default : "vanjs"
            },
            wrapper : {
                default : "van-wrapper"
            }
        }
    }
 }