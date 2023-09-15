import React from "react";
// import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { whyUs } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
// Create The Service Card Component to render our services
export const WhyCard = ({ index, title, content, count }) => {
  return (
    // <Tilt className="xs:w-[210px] bg-dark glass-effect w-full  rounded-xl">

    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      // animation pattern
      className="w-full sm:w-72 glass-effect"
    >
      {/* The Tilt options are coming into this div */}
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="w-full  shadow-xl border border-neutral-600 py-5 px-4 rounded-2xl flex flex-col  items-start justify-start gap-4"
      >
        <div>
          <span className="text-xl ">{count}</span>
        </div>
        <h4 className="text-neutral-300 text-xl text-left">{title}</h4>
        <p className="tracking-wide text-neutral-400">{content}</p>
        <span />
      </div>
    </motion.div>

    // </Tilt>
  );
};

const WhyUs = () => {
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
            <p className={`${styles.sectionSubText} uppercase`}>why choose us</p>
          </motion.div>

          <motion.div variants={fadeIn("", "", 0.1, 1)}>
            <h1 className={`${styles.subHeadText}`}>
            We have being in operation since 2016 - started with media buying and consulting for african businesses. we have purchased over a billion Ad Impressions and implemented over a 1000 growth strategies on behalf of african businesses.
            </h1>
          </motion.div>
        </div>

        <div className="w-full mt-10 md:mt-20">
          <motion.div
            className="my-6"
            variants={textVariant()} // textVariant() method is used to animate the texts
            // the vairiants prop is used to define what you're giving motion effects to
          >
            {/* <h2 className="bg-primary">Chech the color here</h2> */}
            <p className={`${styles.sectionSubText} uppercase`}>
              Our services include:
            </p>
          </motion.div>

          <div className="w-full md:max-w-2xl mt-8 grid grid-cols-4">
            {whyUs.map((service, index) => (
              <WhyCard key={service.title} index={index} {...service} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(WhyUs, "#WhyUs");
