import { useState } from 'react'
import './App.css'
import {content} from './data'
function App() {
  const [activeContentIndex, setActiveContentIndex] = useState(0);
  return (
    <div className='contsiner'>
      <header>
        <img src="/logoImg.png" alt="React logo" />
        <div>
          <h1>React.js</h1>
          <p>i.e., using the React library for rendering the UI</p>
        </div>
      </header>

      <div id="tabs">
        <menu>
          <button onClick={() => setActiveContentIndex(0)}
            className={activeContentIndex === 0 ? "active" : ""}>
            Why React?
          </button>


          <button onClick={() => setActiveContentIndex(1)}
            className={activeContentIndex === 1 ? "active" : ""}>
            Core Features
          </button>
          <button onClick={() => setActiveContentIndex(2)}
            className={activeContentIndex === 2 ? "active" : ""}>
            Related Resources
          </button>
        </menu>

        <div id="tab-content">
          <ul>
            {
              content[activeContentIndex].map(items=>
                <li key={items}>{items}</li>
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
export default App