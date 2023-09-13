import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <>
      <motion.div
        variants={fadeIn("", "spring", index * 0.5, 0.75)}
        className="glass-effect shadow-sm shadow-neutral-900 border border-neutral-800 rounded-3xl p-4 md:p-10 w-full sm:w-[320px]"
      >
        <p className="yellow-gradient w-4 h-4 rounded-full font-black text-[44px]"></p>
        <div className="mt-6">
          <p className="custom-shadow py-1 text-neutral-50 text-[18px] tracking-wider">{testimonial}</p>

          <div className="mt-7 flex justify-between gap-4">
            <div className="flex-1 flex flex-col gap-1">
              <p className="text-[16px] font-medium">
                <span className="gradient-text">@</span> {name}
              </p>
              <p className="mt-1 text-[12px] text-neutral-500">
                {designation} of {company}
              </p>
            </div>

            <img
              src={image}
              alt={name}
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
        </div>
      </motion.div>
    </>
  );
};

const Feedbacks = () => {
  return (
    <div 
    
    className={` mt-12 glass-effect  rounded-2xl  relative`}
    >
      <div
        className={`rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>What other's say</p>
          <h2 className={`${styles.sectionHeadText}`}>Testimonials.</h2>
        </motion.div>
      </div>

      <div
        className={` w-full -mt-28 pb-14 flex flex-wrap gap-7`}
      >
        {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
