import React, {useEffect, useState} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Login from "./pages/Login";
import Main from "./pages/Main";
import Ready from "./pages/Ready";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
            <Route path="/ready" element={<Ready />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;