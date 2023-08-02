import React from "react";
import "./App.css";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Boutique from "./pages/Boutique";
import DetailProduct from "./pages/DetailProduct";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {PanierProvider} from './context/PanierContext';

function App() {
  const Layout = () => (
    <>
      <PanierProvider>
        <Navbar />
        <Outlet />
        <Footer />
      </PanierProvider>
    </>
  );

  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Accueil />,
        },
        {
          path: "/boutique",
          element: <Boutique />,
        },
        {
          path: "/detail",
          element: <DetailProduct />,
        },
        {
          path: "/detail/:id",
          element: <DetailProduct />,
        }
      ]
    }
  ]);

  return (
    <>
        <RouterProvider router={router}/>
    </>
  );
}

export default App;
