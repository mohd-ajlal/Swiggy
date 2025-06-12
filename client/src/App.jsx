import { Outlet } from 'react-router-dom'
import './App.css'
import ApiCalling from './components/ApiCalling'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (

      <>
        <Header/>
        {/* <Body/> */}
        {/* <ApiCalling/> */}
        <Outlet/>
        <Footer/>
      </>
  )
}

export default App
