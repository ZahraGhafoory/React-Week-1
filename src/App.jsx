import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Badge from './Badge';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Badge label="Full Name" value="Zahra Ghafoory"></Badge>
      <Badge label="Course" value="React"></Badge>
      <Badge label="Week" value="1"></Badge>
      <Badge label="Topic" value="Props"></Badge>
    </div>
  )
}

export default App
