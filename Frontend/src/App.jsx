
import Home from './pages/Home.jsx'
import MyAccount from './pages/MyAccount.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router'
import Announcment from './components/Announcment.jsx'
import SingleProduct from './pages/SingleProduct.jsx'

function App() {

  const Layout = () => {
    return (
      <div>
        <Announcment />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/myaccount',
          element: <MyAccount />
        },
        {
          path: '/product/:id',
          element: <SingleProduct />
        }
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
