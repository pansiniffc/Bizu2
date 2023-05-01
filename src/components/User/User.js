import React from 'react';
import UserHeader from './UserHeader';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home';
import UserData from './UserData';
import SelectQuestion from '../Questoes/SelectQuestions';
import SelectSimulados from '../Simulados/SelectSimulados';

const User = () => {
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="dados" element={<UserData />} />
        <Route path="questoes" element={<SelectQuestion />} />
        <Route path="simulados" element={<SelectSimulados />} />
      </Routes>
    </section>
  );
};

export default User;
