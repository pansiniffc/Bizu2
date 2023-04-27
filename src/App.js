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
import { AuthContextProvider } from './Contexts/AuthContext';
import ProtectedRoute from './components/Helper/ProtectedRoute';
import User from './components/User/User';

function App() {
  return (
    <div>
      <BrowserRouter>
        <AuthContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login/*" element={<Login />} />
            <Route
              path="/conta"
              element={
                <ProtectedRoute>
                  <User />
                </ProtectedRoute>
              }
            />
          </Routes>
          <Footer />
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
