import React from "react";

import { motion } from "framer-motion";

const TechLogo = ({ name, logo, url, position }) => {
  const style =
    position === 1 || position === 2
      ? "h-44 ml-0"
      : position === 3
      ? "h-36 ml-11"
      : "h-44 ml-11";

  console.log(style);

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <motion.img
        animate={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1, delay: position }}
        whileHover={{ scale: 1.1, transition: { duration: 0.1 } }}
        src={logo}
        alt={name}
        className={style}
      />
    </a>
  );
};

export default TechLogo;
