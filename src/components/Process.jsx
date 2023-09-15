import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

function Process() {
  return (
    <div>
      <div>
        <motion.div
          className={`${styles.paddingX} `}
          variants={textVariant()} // textVariant() method is used to animate the texts
          // the vairiants prop is used to define what you're giving motion effects to
        >
          {/* <h2 className="bg-primary">Chech the color here</h2> */}
          <p className={`${styles.sectionSubText} capitalize mb-10`}>our process</p>
        </motion.div>

        <motion.div variants={fadeIn("", "", 0.1, 1)}>
          <div className="w-full md:max-w-4xl flex items-center justify-center">
            <img
              src="./dist/assets/process.png"
              className="w-full object-cover  h-full"
              alt="our process"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default SectionWrapper(Process, "#");
