import React from "react";
// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
// Create The Service Card Component to render our services
export const ServiceCard = ({ index, title, content, icon }) => {
  return (
    // <Tilt className="xs:w-[210px] bg-dark glass-effect w-full  rounded-xl">

    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      // animation pattern
      className="w-full sm:w-72 h-fit"
    >
      {/* The Tilt options are coming into this div */}
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full glass-effect shadow-xl hover:shadow transform transition  duration-300  border-2 border-neutral-600 p-6 rounded-xl flex flex-col  items-start justify-evenly gap-2"
      >
        <div>
          <span className="text-3xl ">
            {icon}
          </span>
        </div>
        <h4 className="text-neutral-200 text-xl text-left">{title}</h4>
        <p className="tracking-wide text-neutral-400">{content}</p>
        <span />
      </div>
    </motion.div>

    // </Tilt>
  );
};

const About = () => {
  return (
    <>
      <div className={`glass-effect flex flex-col`}>
        {/* NOTE: that every motion effects must be passed as props in the motion tag */}
        <div>
          <motion.div
            className="my-6"
            variants={textVariant()} // textVariant() method is used to animate the texts
            // the vairiants prop is used to define what you're giving motion effects to
          >
            {/* <h2 className="bg-primary">Chech the color here</h2> */}
            <p className={`${styles.sectionSubText} uppercase`}>what we do</p>
          </motion.div>

          <motion.div variants={fadeIn("", "", 0.1, 1)}>
            <h1 className={`${styles.subHeadText} w-full md:w-[85%]`}>
              We are building africa's biggest audience network, helping
              businesses acquire customers across africa using AI Agents.
            </h1>
          </motion.div>
        </div>

        <div className="w-full md:max-w-3xl mt-10 md:mt-24">
       



          <motion.div
            className="mb-10"
            variants={textVariant()} // textVariant() method is used to animate the texts
            // the vairiants prop is used to define what you're giving motion effects to
          >
            {/* <h2 className="bg-primary">Chech the color here</h2> */}
            <p className={`${styles.sectionSubText} uppercase`}>
              Our services include:
            </p>
          </motion.div>


        <div className="grid grid-cols-1 sm:grid-cols-2">
        {services.map((service, index) => (
              <ServiceCard key={service.title} index={index} {...service} />
            ))}
        </div>
          </div>
        </div>
    </>
  );
};

export default SectionWrapper(About, "about");
