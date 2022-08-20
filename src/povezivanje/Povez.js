import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../components/Home'
import Radnici from '../components/Radnici';
import { AnimatePresence } from 'framer-motion';
import Onama from '../components/Onama';
import Kontakti from '../components/Kontakti';

function Povez() {

  const location = useLocation()

  return (
    <div>
      <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home />}/>
        <Route path='/radnici' element={<Radnici />}/>
        <Route path='/onama' element={<Onama />}/>
        <Route path='/kontakti' element={<Kontakti />}/>
      </Routes>
      </AnimatePresence>
    </div>
  )
}

export default Povez