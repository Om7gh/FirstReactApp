import React from "react";
import Header from "./Header/Header";
import "./Hero.css";
import Hero_img from "../assets/hero_image.png";
import calories from "../assets/calories.png";
import Hero_img_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import { motion } from "framer-motion";
import NumberCounter from "number-counter";
const Hero = () => {
  const transition = { type: "spring", duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <div className="hero">
      <div className="blur hero_blur"></div>
      <div className="left-h">
        <Header />

        {/* the best ad  */}
        <div className="the_best_ad">
          <motion.div
            initial={{ left: mobile ? "160px" : "238px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div>
          <span>the best fitness club in the town</span>
        </div>

        {/* hero heading  */}
        <div className="hero_text">
          <div>
            <span className="strok_text">shape </span>
            <span>your</span>
          </div>
          <div>
            <span>ideal body</span>
          </div>
          <div className="span">
            <span>
              in here we will help you to shape and build your ideal body and
              live up your life to fullest
            </span>
          </div>
        </div>

        {/* figures  */}

        <div className="figures">
          <div>
            <span>
              +<NumberCounter end={140} start={100} delay="4" prefix="+" />
            </span>
            <span>expert coach</span>
          </div>
          <div>
            <span>
              {" "}
              <NumberCounter end={978} start={900} delay="4" prefix="+" />
            </span>
            <span>members joined</span>
          </div>
          <div>
            <span>
              <NumberCounter end={50} start={0} delay="2" prefix="+" />
            </span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* hero buttons  */}

        <div className="hero_btn">
          <button className="btn">get started</button>
          <button className="btn">learn more</button>
        </div>
      </div>
      <div className="right-h">
        <button className="btn">join now</button>
        <motion.div
          className="heart-rate"
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
        >
          <img src={Heart} alt="" />
          <span>heart rate </span>
          <span>116 bpm</span>
        </motion.div>
        {/* hero images  */}
        <img src={Hero_img} className="hero_image" alt="" />
        <motion.img
          src={Hero_img_back}
          className="hero_image_back"
          alt=""
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={transition}
        />

        {/* calories */}
        <motion.div
          className="calories"
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={transition}
        >
          <img src={calories} alt="" />
          <div>
            <span>calories burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
