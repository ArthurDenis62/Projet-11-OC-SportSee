import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './pages/Layout/Layout';
import Accueil from './pages/Accueil/Accueil';
import Profile from './pages/Profile/Profile';
import Reglage from './pages/Reglage/Reglage';
import Communaute from './pages/Communaute/Communaute';
import Error from './pages/Error/Error';

function App() {
  return (
    <Router>
      <Layout> 
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route index element={<Accueil />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Reglage" element={<Reglage />} />
          <Route path="/Communaute" element={<Communaute />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
