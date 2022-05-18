import React from 'react';
import Vim from '../src/components/Vim'
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Vim />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;