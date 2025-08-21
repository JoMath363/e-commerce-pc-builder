import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Product from "./pages/Product"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"

const requireAuth = async () => {
  const serverURL = import.meta.env.VITE_SERVER_URL

  const res = await fetch(`${serverURL}/profile/logged`, {
    credentials: "include",
  });

  if (res.status === 401) {
    throw redirect("/login");
  }

  if (!res.ok) {
    console.warn("Erro no servidor:", res.status, res.statusText);
    return null;
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
  },
  {
    path: "/profile",
    element: <Profile />,
    loader: requireAuth
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
