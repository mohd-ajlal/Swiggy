import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Offer from './components/Offer.jsx'
import Help from './components/Help.jsx'
import SignIn from './components/SignIn.jsx'
import Body from './components/Body.jsx'

const appRoutes =createBrowserRouter([{
  path: '/',
  element: <App />,
  children:[
    {
      path: "/",
      element:<Body/>
    }
    ,{
  path:"offer",
  element: <Offer/>
},
{
  path:"help",
  element:<Help/>
},{
  path:"signin",
  element:<SignIn/>
}
  ]
},
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRoutes}>
  </RouterProvider>
)
