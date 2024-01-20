import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Ebook from "../public/Ebook";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/Ebook" />} // Redirect to /EBook when accessing root path
        />
        <Route path="/Ebook" element={<Ebook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
