import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import { ProductProvider } from "./contexts/ProductContext"
import Product from "./pages/Product"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import { CartProvider } from "./contexts/CartContext"

const requireAuth = async () => {
  const serverURL = import.meta.env.VITE_SERVER_URL

  const res = await fetch(`${serverURL}/auth/me`, {
    credentials: "include",
  });

  if (res.status === 401) {
    throw redirect("/login");
  }

  return res.json();
};

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
    path: "/product/:id",
    element: <Product />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/cart",
    element: <Cart />,
    loader: requireAuth
  }
])

function App() {
  return (
    <CartProvider>
      <ProductProvider>
        <RouterProvider router={router} />
      </ProductProvider>
    </CartProvider>
  )
}

export default App
