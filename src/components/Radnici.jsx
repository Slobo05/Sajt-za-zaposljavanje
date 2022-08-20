import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Karta from "../UI/Karta";
import { motion } from 'framer-motion';

function Radnici() {
  const [radnici, setRadnici] = useState([]);
  const [load, setLoad] = useState(false)
  const [sirina, setSirina] = useState(0);
  const lista = useRef()


  useEffect(() => {
    setLoad(true)
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      setRadnici(response.data);
      setLoad(false)
      setSirina(1886 - 657)
    });
  }, []);

  return (
    <motion.div className="radnici" ref={lista} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      <motion.div drag='x' dragConstraints={{ right: 0, left: -sirina}} className="radnik">
        {load && <h1 className="load">Loading...</h1>}
        {radnici.map((radnik) => {
          return (
              <Karta
                key={radnik.id}
                ime={radnik.name}
                korisnikIme={radnik.username}
              />
          );
        })}
        </motion.div>
    </motion.div>
  );
}

export default Radnici;
