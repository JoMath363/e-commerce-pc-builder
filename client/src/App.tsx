import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import { ProductProvider } from "./contexts/ProdcutContext"
import Product from "./pages/Product"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/catalog",
    element: <Catalog />
  },
  {
    path: "/product/:name",
    element: <Product />
  }
])

function App() {
  return (
    <ProductProvider>
      <RouterProvider router={router} />
    </ProductProvider>
  )
}

export default App
