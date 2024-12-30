import { VanWrapper } from "van-wrapper/react";
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
