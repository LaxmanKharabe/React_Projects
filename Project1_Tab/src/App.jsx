import './App.css'
import { TabsProvider } from './components_Context/TabsContext'
import Header from './components_Props/header'
import Menu from './components_Context/Menu'

function App() {
  return (
    <div className='container'>
      <TabsProvider>
        <div className='container'>
          <Header />
          <Menu />
        </div>
      </TabsProvider>
    </div>
  )
}
export default App