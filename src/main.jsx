import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Layout from "./Layout.jsx";
import { RouterProvider } from "react-router-dom";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./components/Home/Home.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Services from "./components/Services/Services.jsx";
import Hero from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import SignUp from "./components/SignUp/SignUp.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>} />
      <Route path='/services' element={<Services/>} />
      <Route path='/contact' element={<Contact/>} />
    </Route>,
     <Route path='/signup' element={<SignUp/>} />
     </>
  ),
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
