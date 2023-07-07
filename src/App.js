import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Accueil from "./pages/Accueil";
import Navbar from "./components/Navbar";
import Boutique from "./pages/Boutique";

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
  ]);
  return (
    <>
      <Navbar />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
