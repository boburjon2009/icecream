import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import MainLayout from "./layout/mainlayoute"

// sahifalarni import qilish kerak
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"

export default function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
        </Route>
        <Route path="*" element={<NotFound/>} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}