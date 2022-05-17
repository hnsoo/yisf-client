import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Folder from '../src/components/Folder'

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Folder />} />
        </Routes>
      </BrowserRouter>
  );
}
export default App;