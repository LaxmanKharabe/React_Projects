import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import Parent from './Components/Props/Parent'
// import Child from './Components/Props/Child'
import ComponentA from './Components/Prop_Regular/ComponentA'

function App() {
  return (
    // <Parent>
    //   Component
    //   <h1>Games</h1>
    //   <h1>Courses</h1>
    // </Parent>
    <>
      <ComponentA />
    </>
  )
}

export default App
