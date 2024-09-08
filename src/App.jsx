import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Navbar from  './components/Navbar/Navbar';
import Header from './components/Header/Header';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Navbar />
    <Routes>
      <Route path='/' element={<Landing/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
