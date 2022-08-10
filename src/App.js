import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Folder from '../src/components/Folder'
import Login from "./pages/Login";
import Main from "./pages/Main";
import Ready from "./pages/Ready";

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Ready />} />
            <Route path="/ready" element={<Ready />} />
            <Route path="/login" element={<Login />} />
            <Route path="/folder" element={<Folder />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;