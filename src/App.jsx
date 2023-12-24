import React from "react";
import LandingPage from "./pages/LandingPage";
import ContactForm from "./component/ContactForm";
import Navbars from "./component/Navbar";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Navbars />
      <LandingPage />
      <ContactForm />
      <Footer />
    </>
  );
};

export default App;
