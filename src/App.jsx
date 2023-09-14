import { useState } from 'react'
import HelloWorld from './components/HelloWorld'
import ColorChanger from './components/ColorChanger'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div>
      <HelloWorld/> 
      <ColorChanger/>
    </div>

  )
}

export default App
