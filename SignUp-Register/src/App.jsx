import { useState } from 'react'
import './App.css'
import LoginSignUp from './Components/LoginSignUp/LoginSignUp'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <LoginSignUp></LoginSignUp>
    </div>
  )
}

export default App
