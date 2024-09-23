import './App.css'
import { Outlet } from 'react-router-dom'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar/>
      {/* <nav>Site Logo</nav> */}
      <Outlet/>
      {/* <h1>Welcome to my book collection</h1> */}
    </>
  )
}

export default App
