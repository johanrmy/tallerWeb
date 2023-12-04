import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Registro from './pages/Registro.jsx';
import Avion from './pages/Avion.jsx';import Piloto from './pages/Piloto.jsx';
import Tripulacion from './pages/Tripulacion.jsx';
import Vuelo from './pages/Vuelo.jsx';
 './pages/Avion.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Vuelo/>,
  },  {
    path: "/avion",
    element: <Avion/>,
  },
  {
    path: "/piloto",
    element: <Piloto/>,
  },
  {
    path: "/tripulacion",
    element: <Tripulacion />,
  },
  {
    path: "/vuelo",
    element: <Vuelo/>,
  },
  {
    path: "/vuelo/form",
    element: <Registro title="Vuelo"/>,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
