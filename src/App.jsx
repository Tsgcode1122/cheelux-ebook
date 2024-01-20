import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Ebook from "./pages/Ebook";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Ebook" element={<Ebook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
