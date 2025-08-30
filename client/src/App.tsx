import { createBrowserRouter, Outlet, redirect, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Product from "./pages/Product"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import Checkout from "./pages/Checkout"

const Layout = () => <Outlet />;

const AuthLoader = async () => {
  const serverURL = import.meta.env.VITE_SERVER_URL

  const res = await fetch(`${serverURL}/auth/logged`, {
    credentials: "include",
  });

  if (res.status == 401) throw redirect("/login");
  if (!res.ok)  throw redirect("/")

  const { data } = await res.json()
  return { user: data };
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "catalog", element: <Catalog /> },
      { path: "product/:id", element: <Product /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> }
    ]
  },
  {
    id: "protected_root",
    path: "/",
    loader: AuthLoader,
    element: <Layout />,
    children: [
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      { path: "confirmation", element: <Profile /> },
      { path: "profile", element: <Profile /> },
    ]
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
