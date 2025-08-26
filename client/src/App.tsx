import { createBrowserRouter, Outlet, redirect, RouterProvider, useLoaderData } from "react-router-dom"
import Home from "./pages/Home"
import Catalog from "./pages/Catalog"
import Product from "./pages/Product"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Cart from "./pages/Cart"
import Profile from "./pages/Profile"
import Checkout from "./pages/Checkout"

const PublicPage = () => {
  return <Outlet />
}

const AuthLoader = async () => {
  const serverURL = import.meta.env.VITE_SERVER_URL

  const res = await fetch(`${serverURL}/profile/logged`, {
    credentials: "include",
  });

  if (!res.ok) return { user: null };
  return { user: await res.json() };
}

const ProtectedPage = () => {
  const { user } = useLoaderData();
  if (!user) throw redirect("/login");
  return <Outlet />;
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicPage />,
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
    element: <ProtectedPage/>,
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
