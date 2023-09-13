import React from "react";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "../styles";
import { experiences } from "../constants";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const ExperienceCard = ({ experience}) => (
  <VerticalTimelineElement
  // The various Attributes are used to control the appearance of our vertical TimeLineElement

    contentStyle={{ background: "transparent", color: "#fff" }} //this attribute sets the backgroud color of the TimeLineElement
    contentArrowStyle={{ borderRight: "7px soild #00ff70" }} //this is for the arrow
    date={experience.date} //here's the date 
    iconStyle={{ background: experience.iconBg }} // this for the icon background appearance
    icon={
      <div className="w-full h-full flex items-center justify-center">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    } //this for the icon itself
  >
  
  <div className="glass-effect rounded-2xl shadow-2xl">
  <div className=" shadow-2xl p-2 sm:p-3 lg:p-10">
      <h3 className="text-gray-gradient text-[24px]">{experience.title}</h3>
      <h5 className="text-sm gradient-text font-bold mt-2">{experience.company_name}</h5>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li key={index} className="text-sm tracking-wide line-height-2 text-gray-gradient pt-4">{point}</li>
        ))}
      </ul>
    </div>
  </div>
  </VerticalTimelineElement>
);

const Experience = () => {
  return (
    <>
      <div className="">
      <motion.div variants={textVariant} className="text-center flex flex-col justify-center items-center">
       <p className={`${styles.sectionSubText} text-center`}>What i have done so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Experience</h2>
      </motion.div>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

// The VerticalTimeline Tag is used to wrap the VerticalTimelineElement tag and inside of this tag we specify the props that are used to control the appearance of our VerticalTimeline Elements 

/*  <VerticalTimeline>
      <VerticalTimelineElement 
      contentStyle={{your styles come in here}}
      contentArrowStyle={{ your styles come in here}}
      date={{your date comes here}}
      iconStyle={{iconStyles comes here}}
      icon={{
          <div>
              your desired icon come in here
          </div>
      }}
      >


      </VerticalTimelineElement>

    </VerticalTimeline>

    */

export default SectionWrapper(Experience, "Experience");
