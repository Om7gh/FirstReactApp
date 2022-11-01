import React from "react";
import "./Plan.css";
import { plansData } from "../../data/plansData";
import whiteTick from '../../assets/whiteTick.png'

const Plans = () => {
  return (
    <div className="plans_container" id='plans'>
      <div className="blur plan_blur1"></div>
      <div className="blur plan_blur2"></div>
      <div className="programes_header" style={{ gap: "2rem" }}>
        <span className="strok_text">READY TO START</span>
        <span>YOUR JOURNEY</span>
        <span className="strok_text">NOW WHITUS</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan" key={i}>
            {plan.icon}
            <span>{plan.name}</span>
            <span> ${plan.price}</span>

            <div className="features">
               {plan.features.map((feature, i)=>(
                <div className="feature">
                    <img src={whiteTick} alt="" />
                    <span key={i}>{feature}</span>
                </div>
               ))}
               </div>
               <div><span>See more Benefits -></span></div>
               <button className="btn">join now</button>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
