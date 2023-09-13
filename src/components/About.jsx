import React from "react";
// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
// Create The Service Card Component to render our services
export const ServiceCard = ({index, title, content, icon}) => {
  return (
    // <Tilt className="xs:w-[210px] bg-dark glass-effect w-full  rounded-xl">


    
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        // animation pattern
        className="w-full"
      >



        {/* The Tilt options are coming into this div */}
        <div
        options={{
          max: 45,
          scale: 1,
          speed: 450
        }}
        className="w-full  shadow-xl border border-neutral-600 py-5 px-6 rounded-2xl flex flex-col sm:flex-row items-start justify-evenly gap-2">
         <div>
        <span className="text-3xl ">{icon}</span>
         </div>
          <h4 className="text-neutral-400 text-xl text-center">{title}</h4>
          <p className="tracking-wide">{content}</p>
        </div>
      </motion.div>
      
    // </Tilt>
  );
};


const About = () => {
  return (
    <>
<div className={`glass-effect flex flex-col md:flex-row  items-start justify-between`}>
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

      <motion.div variants={fadeIn("", "", 0.1, 1)} >
     <h1 className={`${styles.subHeadText}`}>
     We are building africa's biggest audience network, helping businesses acquire customers across africa using AI Agents.
     </h1>
      </motion.div>
     </div>

     
<motion.div
      className="my-6"
        variants={textVariant()} // textVariant() method is used to animate the texts
        // the vairiants prop is used to define what you're giving motion effects to
      >
        {/* <h2 className="bg-primary">Chech the color here</h2> */}
        <p className={`${styles.sectionSubText} mt-12 uppercase`}>Our services include:</p>
      </motion.div>

      <div className="mt-8 flex flex-end justify-end flex-wrap gap-10">
      

        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>

    </>
  );
};

export default SectionWrapper(About, "about")
