import { Outlet } from 'react-router-dom'
import './App.css'
import ApiCalling from './components/ApiCalling'
import Body from './components/Body'
import Footer from './components/Footer'
import Header from './components/Header'
import { Provider } from 'react-redux';

import appStore from './utils/appStore'

function App() {

  return (

    
      <Provider store = {appStore}>
        
        <Header/>
        {/* <Body/> */}
        {/* <ApiCalling/> */}
        <Outlet/>
        <Footer/>
      </Provider>
    
  )
}

export default App
