import React from "react";
import { motion } from "framer-motion";
import { BsInstagram, BsFacebook, BsTwitter } from "react-icons/bs";
import { IoIosContact } from "react-icons/io";

function Kontakti() {
  return (
    <motion.div
      className="kontakti"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="kartaK">
        <IoIosContact className="osoba"></IoIosContact>
        <h1>Marko Markovic</h1>
        <p>Lorem ipsum</p>
        <div className="insta">
          <BsInstagram className="ikona"></BsInstagram>
          <p className="naziv">marko_markovic</p>
        </div>
        <div className="facebook">
          <BsFacebook className="ikona"></BsFacebook>
          <p className="naziv">Marko Markovic</p>
        </div>
        <div className="tvit">
          <BsTwitter className="ikona"></BsTwitter>
          <p className="naziv">m.markovic</p>
        </div>
      </div>
    </motion.div>
  );
}

export default Kontakti;
