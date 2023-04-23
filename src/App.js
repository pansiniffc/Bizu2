import React from 'react';
import './App.css';
import AddQuestao from './components/AddQuestao';
import Questoes from './components/Questoes';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contato from './components/Contato';
import Home from './components/Home';
import Login from './components/Login/Login';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
