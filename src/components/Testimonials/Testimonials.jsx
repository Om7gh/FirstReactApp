import React from "react";
import "./Testimonials.css";
import { testimonialsData } from "../../data/testimonialsData";
import { useState } from "react";
import leftArrow from "../../assets/leftArrow.png";
import rightArrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";
const Testimonials = () => {
  const transition = { type: "spring", duration: 3 };
  const [select, setselect] = useState(0);
  const tlength = testimonialsData.length;
  return (
    <div className="testimonials" id="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="strok_text">What they</span>
        <span>say about us</span>
        <motion.span
         key={select}
         initial={{opacity: 0, x: -100}}
         animate={{opacity: 1, x: 0}}
         exit={{opacity: 0, x: 100}}
         transition={transition}
        >{testimonialsData[select].review}</motion.span>
        <span>
          <span style={{ color: "var(--orange)" }}>
            {testimonialsData[select].name}
          </span>{" "}
          <span>- {testimonialsData[select].status}</span>
        </span>
      </div>

      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          transition={{ ...transition, duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>
        <motion.img 
        key={select}
        initial={{opacity: 0, x: 100}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: -100}}
        transition={transition}
        src={testimonialsData[select].image} alt="" />
        <div className="arrows">
          <img
            onClick={() => {
              select === 0
                ? setselect(tlength - 1)
                : setselect((prev) => prev - 1);
            }}
            src={leftArrow}
            alt=""
          />
          <img
            onClick={() => {
              select === tlength - 1
                ? setselect(0)
                : setselect((prev) => prev + 1);
            }}
            src={rightArrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
