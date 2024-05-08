import React from 'react';
import ReactDOM from 'react-dom/client';
import {  createBrowserRouter,  RouterProvider,} from "react-router-dom";
import Home from './Pages/Home';
import Education from './Pages/Education';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';
import './Styles/index.scss'

const router = createBrowserRouter([
 
  {
    path: "/" ,
    element: <Home/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/education",
    element: <Education/>,
  },
  {
    path: "/skills",
    element: <Skills/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
