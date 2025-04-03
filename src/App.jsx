import React from 'react';
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Home, Instruction, Complaint } from './pages';
import { Header, Footer } from './components';

function App() {

  return (
    <div className='mx-auto w-full md:w-[70%]'>
      <Header />
      <div className='bg-white shadow-md rounded-lg px-4 md:px-6'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/instruction" element={<Instruction />} />
          <Route path="/complaint" element={<Complaint />} />
        </Routes>
        <Footer />
      </div>
    </div>
  );
}

export default App;
