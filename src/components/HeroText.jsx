import React from "react";
import { FlipWords } from "./FlipWords";
import { motion } from "motion/react";


function HeroText() {
  const words = ["secure", "modern", "scalable"];
  const variants ={
    hidden: {opacity: 0, x: -50},
    visible:{opacity: 1, x: 0}
  }
  return (
    <div className="z-10 mt-20 text-start md:mt-40 md:text-left rounded-3xl bg-clip-text">
      {/* desktop view */}
      <div className="flex-col hidden md:flex c-space">
        <motion.h1
          className="text-4xl font-medium"
          variants={variants}
          initial="hidden"
          animate="visible"
          transtion={{ delay: 1 }}
        >
          Hi I'm Abhishek
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p
            className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}
          >
            A Developer
            <br />
            Dedicated to crafting
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              className="font-black text-white text-8xl"
              words={words}
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Front end Developer
          </motion.p>
        </div>
      </div>

      {/* mobile view */}

      <div className="flex- flex-col items-center justify-center space-y-6 md:hidden">
        <motion.h1
          className="text-4xl font-medium"
          initial="hidden"
          animate="visible"
          transtion={{ delay: 1 }}
        >
          Hi I'm Abhishek
        </motion.h1>
        <div className="flex flex-col items-start">
          <motion.p 
          className="text-5xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.2 }}>
            Developer
            
          </motion.p>
          <motion.div
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.5 }}
          >
            <FlipWords
              className="font-black text-white text-7xl"
              words={words}
            />
          </motion.div>
          <motion.p
            className="text-4xl font-medium text-neutral-300"
            variants={variants}
            initial="hidden"
            animate="visible"
            transition={{ delay: 1.8 }}
          >
            Front end Developer
          </motion.p>
        </div>
      </div>
    </div>
  );
}

export default HeroText;
