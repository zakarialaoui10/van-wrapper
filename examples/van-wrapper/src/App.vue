<script setup>
import van from "vanjs-core"
import { VanWrapper } from "van-wrapper/vue";
const {a, p, div} = van.tags
const Hello = ({message}) => div(
  p(message, a({href: "https://vanjs.org/"}, "VanJS")),
  p(
    "This is a ",
    a({href: "https://vanjs.org/"}, "VanJS "),
    "Element Wrapped inside Vue App"
  )
)
</script>

<template>
  <VanWrapper>
    <Hello message="Hello world"/>
  </VanWrapper>
</template>
