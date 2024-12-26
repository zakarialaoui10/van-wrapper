import './App.css'
import { VanWrapper } from "./van-wrapper.jsx";
import Counter from './van-counter.js';

function App() {
  return (
    <VanWrapper>
      <Counter emoji="❤️" />
      <Counter emoji="✅" />
    </VanWrapper>
  )
}

export default App
