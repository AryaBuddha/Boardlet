import React from "react";

import { motion } from "framer-motion";

import TailwindLogo from "../Assets/TailwindCSSLogo.png";
import ReactJS from "../Assets/ReactJSLogo.svg";
import Framer from "../Assets/FramerLogo.png";
import TechLogo from "./Components/TechLogo";

const Features = () => {
  return (
    <div className="dark:text-slate-300 flex flex-col items-center">
      <motion.h1
        animate={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 1 }}
        style={{
          fontFamily: "Mulish, sans-serif",
          fontWeight: "800",
          fontStyle: "bold",
        }}
        className="text-5xl mb-8"
      >
        Technologies
      </motion.h1>
      <div className="flex">
        <TechLogo
          name="ReactJS"
          logo={ReactJS}
          url="https://reactjs.org/"
          height={44}
          left={0}
          position={1}
        />
        <TechLogo
          name="TailwindCSS"
          logo={TailwindLogo}
          url="https://tailwindcss.com/"
          height={44}
          left={0}
          position={2}
        />
        <TechLogo
          name="Framer"
          logo={Framer}
          url="https://framer.com/motion"
          height={36}
          left={11}
          position={3}
        />
        <TechLogo
          name="React Icons"
          logo="https://rawgit.com/gorangajic/react-icons/master/react-icons.svg"
          url="https://react-icons.github.io/react-icons/"
          height={44}
          left={11}
          position={4}
        />
      </div>
    </div>
  );
};

export default Features;
