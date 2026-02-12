import {RouterProvider,Outlet,createBrowserRouter} from "react-router"
import './App.css'
import Menu from "./components/Menu.jsx"
import Home from "./pages/Home.jsx"
import Users from "./pages/Users"
import Products from "./pages/Products"
import Orders from "./pages/Orders.jsx"
import Banners from "./pages/Banners.jsx"

function App() {

  const Layout=()=>{
    return(
      <div className="flex">
        <div>
          <Menu />
        </div>
        <div>
          <Outlet />
        </div>
        
      </div>
    )
  }

  const router=createBrowserRouter([
    {
      path:"/",
      element:<Layout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/users",
          element:<Users />
        },
        {
          path:"/products",
          element:<Products />
        },
         {
          path:"/orders",
          element:<Orders />
        },
        {
          path:"/banners",
          element:<Banners />
        },
      ]
    }
  ])
 

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  )
}

export default App
