import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Boutique from "./pages/Boutique";
import DetailProduct from "./pages/DetailProduct";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import {PanierProvider} from './context/PanierContext';

function App() {
  const router = createBrowserRouter([
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
    },
  ]);

  return (
    <>
      <PanierProvider>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </PanierProvider>
    </>
  );
}

export default App;
