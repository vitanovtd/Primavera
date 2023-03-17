import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";



import './App.scss';

import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Meal from "./pages/Meal";
import Menu from "./pages/Menu";
import About from "./pages/About";


const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/meal/:id",
        element: <Meal />
      },
      {
        path: "/menu",
        element: <Menu />
      }

    ]
  }
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
