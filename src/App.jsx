import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Ebook from "./pages/Ebook";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Ebook />} />
        <Route path="/" element={<Ebook />} />
        <Route path="/EBook" element={<Ebook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
