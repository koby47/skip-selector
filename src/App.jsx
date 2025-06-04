import { useState } from 'react'

import './App.css'
import SkipSelectorPage from './components/pages/SkipSelectorPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <SkipSelectorPage/>
    </>
  )
}

export default App
 