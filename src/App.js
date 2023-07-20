import React from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Boutique from "./pages/Boutique";
import DetailProduct from "./pages/DetailProduct";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Carousel from "./components/Carousel";

export const PanierContext = React.createContext(null);

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
  const defaultValue = { countProduct: 2 }
  return (
    <>
      <PanierContext.Provider value={defaultValue}>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </PanierContext.Provider>
    </>
  );
}

export default App;
