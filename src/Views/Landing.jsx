import React from "react";

import { motion } from "framer-motion";

import { AiOutlineGithub } from "react-icons/ai";
import { IconContext } from "react-icons/lib";

import Features from "./Features";

const Landing = () => {
  return (
    <div className="w-screen h-screen dark:bg-[#101010] flex flex-col items-center">
      <motion.div
        animate={{ opacity: 1, y: 0, x: 0 }}
        initial={{ opacity: 0, x: 30 }}
        transition={{ duration: 1 }}
        className="mt-24 mb-52 dark:text-slate-300"
      >
        <h1
          style={{
            fontFamily: "Mulish, sans-serif",
            fontWeight: "800",
            fontStyle: "bold",
          }}
          className="text-8xl"
        >
          React JS Template
        </h1>
        <div
          animate={{ opacity: 1, y: 0, x: 0 }}
          initial={{ opacity: 0, y: 30 }}
        >
          <p transition={{ duration: 1 }} className="text-2xl">
            Made by Arya Buddha
          </p>
          <IconContext.Provider value={{}}>
            <a
              href="https://github.com/AryaBuddha/ReactJS-Template"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiOutlineGithub size={60} />
            </a>
          </IconContext.Provider>
        </div>
      </motion.div>
      <Features />
    </div>
  );
};

export default Landing;
