import './App.css';
import {
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import Accueil from './pages/Accueil'

function App() {
  const router = createBrowserRouter([{
    path: "/",
    element: Accueil
  }])
  return (
    <RouterProvider router={router} />
  );
}

export default App;
