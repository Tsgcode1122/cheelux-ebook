import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Ebook from "./pages/Ebook";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Navigate to="/EBook" />} // Redirect to /EBook when accessing root path
        />
        <Route path="/EBook" element={<Ebook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
