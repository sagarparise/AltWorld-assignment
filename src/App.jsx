
import './App.css'
import Sidebar from './components/Sidebar'
import Dashboard from './components/Dashboard'
import { useContext } from 'react'
import { store } from './store/store'
function App() {
 const{val} = useContext(store)


  return (
    <>
    <div className='w-screen h-screen bg-slate-50 flex '>
      <div className=' w-[280px] h-full'>
        <Sidebar/>
      </div>
      <div className=' flex-1 h-full'>
        <Dashboard/>
      </div>
    </div>
    </>
  )
}

export default App
