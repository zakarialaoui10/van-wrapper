import van from "vanjs-core"

const {span, button} = van.tags

const Counter = ({emoji = "❤️"}) => {
  console.log({emoji})
    const counter = van.state(0)
    return span(
      `${emoji} `, counter, " ",
      button({onclick: () => ++counter.val}, "👍"),
      button({onclick: () => --counter.val}, "👎"),
    )
  }
  

export default Counter