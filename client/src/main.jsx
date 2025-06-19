import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Help from './components/Help.jsx'
import SignIn from './components/SignIn.jsx'
import Body from './components/Body.jsx'
import Offer from './Offer.jsx'
import Error from './components/Error.jsx'
import RestaurantDetail from './components/RestaurantDetail.jsx'
import Clock from './components/Clock.jsx'
import Cart from './components/Cart.jsx'

const appRoutes =createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <Error/>,
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
},{
  path:"restaurants/:id",
  element:<RestaurantDetail/>
},
{
  path:"clock",
  element:<Clock/>
},{
  path:"/cart",
  element:<Cart/>
}
  ]
},
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRoutes}>
  </RouterProvider>
)
