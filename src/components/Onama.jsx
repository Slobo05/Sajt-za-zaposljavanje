import React from "react";
import { motion } from "framer-motion";
import rad from "../UI/rad.jpg";

function Onama() {
  return (
    <motion.div className="onama" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <img src={rad} alt="slika" />
      <h3>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
        exercitationem, cumque ut eaque harum sunt ducimus itaque recusandae
        suscipit assumenda laboriosam officia excepturi amet consectetur
        similique illum iusto dolor velit dolorum! Inventore similique qui error
        atque, ipsam praesentium voluptatum magnam rerum. Dicta quam tempora
        repellendus, excepturi unde porro necessitatibus placeat dolorem facere
        consequatur, voluptatem, blanditiis sed laborum sit natus fuga aliquid?
        Adipisci ipsam similique mollitia unde ullam exercitationem voluptatum
        magni eligendi porro blanditiis voluptatibus reiciendis obcaecati
        praesentium iste cupiditate soluta neque, eum reprehenderit. Adipisci,
        eligendi similique, corporis consectetur debitis minus suscipit, nihil
        explicabo nesciunt soluta exercitationem. Officia ipsam fugiat non.
      </h3>
    </motion.div>
  );
}

export default Onama;
