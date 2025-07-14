import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/catalog",
    element: <Catalog/>
  }
])

function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App
