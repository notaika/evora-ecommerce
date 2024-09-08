import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Navbar from  './components/Navbar/Navbar';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
