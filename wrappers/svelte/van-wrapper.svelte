<script>
    import {DomWrapper} from "ziko-wrapper/svelte";
    export let ui
</script>
<DomWrapper
    data-engine = "vanjs"
    data-wrapper = "van-wrapper"
   {ui}
/>
  