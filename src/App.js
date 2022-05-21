import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Folder from '../src/components/Folder'
import Login from "./pages/Login";
import Dock from "./components/Dock";
import TopBar from "./components/TopBar";
import Main from "./pages/Main";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
            <Route path="/" element={<Main />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;