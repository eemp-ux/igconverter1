import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { ConverterPage } from './pages/ConverterPage';
import { InfographicsPage } from './pages/InfographicsPage';

function App() {
  return (
    <div className="min-h-screen gradient-bg">
      <Navigation />
      <Routes>
        <Route path="/" element={<ConverterPage />} />
        <Route path="/v1" element={<InfographicsPage />} />
      </Routes>
    </div>
  );
}

export default App;
