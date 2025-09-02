import { createBrowserRouter, Outlet, redirect, RouterProvider, useLoaderData } from "react-router-dom"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Product from "./pages/Product"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import Checkout from "./pages/Checkout"
import { CartProvider } from "./contexts/cart/CartProvider"
import { CatalogProvider } from "./contexts/catalog/CatalogProvider"

const Layout = () => {
  const loader = useLoaderData();

  return (
    <CartProvider user={loader?.user}>
      <CatalogProvider>
        <Outlet />
      </CatalogProvider>
    </CartProvider>
  )
};

const rootLoader = async () => {
  const serverURL = import.meta.env.VITE_SERVER_URL

  const res = await fetch(`${serverURL}/auth/logged`, {
    credentials: "include",
  });

  if (res.status == 401) return { user: null }
  if (!res.ok) throw new Error("Failed to fetch auth.")
  const { data } = await res.json()
  return { user: data };
}
const authLoader = async () => {
  const serverURL = import.meta.env.VITE_SERVER_URL

  const res = await fetch(`${serverURL}/auth/logged`, {
    credentials: "include",
  });

  if (res.status == 401) throw redirect("/login");
  if (!res.ok) throw redirect("/")
  const { data } = await res.json()
  return { user: data };
}

const router = createBrowserRouter([
  {
    path: "/",
    loader: rootLoader,
    element: <Layout />,
    children: [
      // Public Routes
      { index: true, element: <Home /> },
      { path: "catalog", element: <Catalog /> },
      { path: "product/:id", element: <Product /> },
      { path: "cart", element: <Cart /> },

      // Auth Routes
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },

      // Protected Routes
      { path: "checkout", element: <Checkout />, loader: authLoader },
      { path: "confirmation", element: <Profile />, loader: authLoader },
      { path: "profile", element: <Profile />, loader: authLoader },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
