import './App.css'
import { useState } from 'react'

function App() {
  const DivOne = () => {
    return (
      <div>
        <DivTwo />
      </div>
    )
  }
  const DivTwo = () => {
    return (
      <div>
        <DivThree />
        <DivThree />
      </div>
    )
  }
  const DivThree = () => {
    const [tardis, setTardis] = useState({
      name: 'Time and Relative Dimension in Space',
      caps: false
    })
    const toggleCaps = () => {
      if (tardis.caps == false) {
        setTardis({
          name: 'Time and Relative Dimension in Space'.toUpperCase(),
          caps: true
        })
      }
    }

    return (
      <div>
        <DivOne />
      </div>
    )
    return (
      <div onClick={toggleCaps}>
        <h3>{tardis.name}</h3>
      </div>
    )
  }
}
export default App
