import { useState } from 'react'
import Person from './components/person'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container">
        <Person firstName="Poe" lastName="Dameron" age={24} hairColor="black" />
        <Person firstName="Rey" lastName="Skywalker" age={21} hairColor="brown"/>
        <Person firstName="Luke" lastName="Skywalker" age={66} hairColor="blonde"/>
      </div>
    </>
  )
}

export default App
