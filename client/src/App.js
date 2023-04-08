import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";



import './App.scss';

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home/Home";
import Meal from "./pages/Meal/Meal";
import Menu from "./pages/Menu/Menu";
import Contact from "./pages/Contact/Contact";


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
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/meal/:id",
        element: <Meal />
      },
      {
        path: "/menu/:id",
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
