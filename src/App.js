import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Accueil from './pages/Accueil/Accueil';
import Error from './pages/Error/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} />
        <Route index element={<Accueil />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
