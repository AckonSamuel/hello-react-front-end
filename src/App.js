import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Greeting from './components/Greeting';
import Home from './components/Home';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/greeting" element={<Greeting />} />
    </Routes>
  </BrowserRouter>
);

export default App;
