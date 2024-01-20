import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./component/LandingPage";
import ContactForm from "./component/ContactForm";
import Navbars from "./component/Navbar";
import Footer from "./component/Footer";
import Ebook from "./pages/Ebook";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Ebook />} />
        <Route path="/" element={<Ebook />} />
        <Route path="EBook" element={<Ebook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
