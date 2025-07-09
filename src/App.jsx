import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h1 className="title">Counter</h1>
      <div className="counter-box">
        <button className="btn minus" onClick={() => setCount(count - 1)}>-</button>
        <span className="count">{count}</span>
        <button className="btn plus" onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  )
}

export default App
