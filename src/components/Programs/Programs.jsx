import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData";
import RightArrow from "../../assets/rightArrow.png";
function Programs() {
  return (
    <div className="programes" id="programes">
      {/* Header section  */}
      <div className="programes_header">
        <span className="strok_text">explore our</span>
        <span>programes</span>
        <span className="strok_text">to shape you</span>
      </div>

      <div className="program_categorie">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join_now">
              <span>join now</span>
              <img src={RightArrow} alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
