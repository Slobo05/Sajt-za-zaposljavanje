import React from 'react';
import { motion } from 'framer-motion';

function Home() {
  return (
    <motion.div className='home' initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }}>
      <h1>Najvece mjesto za zaposljavanje</h1>
      <p>Radimo sa preko 50 zemalja sa 3 kontinenta</p>
    </motion.div>
  )
}

export default Home