import React, { Children } from "react";
import { styles } from "../styles";
import SectionWrapper from "../hoc/SectionWrapper";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const MyCollection = () => {
  return (
    <>
        <section className="w-full flex gap-3 items-start overflow-x-scroll py-2">
        
        </section>
    </>
  );
};




export default SectionWrapper(MyCollection, "");
