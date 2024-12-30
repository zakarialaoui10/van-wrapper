import './App.css'
import { VanWrapper } from 'van-wrapper/react'
import van from "vanjs-core"
import Counter from './Counter.js'
const {a, p, div} = van.tags
const Hello = ({message}) => div(
  p(message, a({href: "https://vanjs.org/"}, "VanJS")),
  p(
    "This is a ",
    a({href: "https://vanjs.org/"}, "VanJS "),
    "Element Wrapped inside React App"
  )
)
function App() {
  return (
    <>
    <VanWrapper>
      <Hello message="👋Hello World "/>
      <Counter emoji="❤️" />
      <Counter emoji="✅" />
    </VanWrapper>
    </>
  )
}

export default App
