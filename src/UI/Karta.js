import React from "react";
import { IoIosContact } from 'react-icons/io'

function Karta({ ime, korisnikIme }) {
  return (
    <div className="karta">
          <IoIosContact></IoIosContact>
          <h1>{ime}</h1>
          <p>{korisnikIme}</p>
    </div>
  );
}

export default Karta;
