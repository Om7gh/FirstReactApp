import React from "react";
import { useRef } from "react";
import "./Join.css";
import EmailJSResponseStatus from "@emailjs/browser";
const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    EmailJSResponseStatus
      .sendForm(
        "service_0dytcbi",
        "template_c2mswtl",
        form.current,
        "mGWPBVsVI0Ax-dUfA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="strok_text">READY TO</span>
          <span> LEVEL UP </span>
        </div>
        <div>
          <span>YOUR BODY </span>
          <span>WITH US?</span>
        </div>
      </div>
      <div className="right-j">
        <form ref={form} className="email_container" onSubmit={sendEmail}>
          <input
            type="email"
            name="user_email"
            placeholder="Enter your email adress"
          />
          <button className="btn btn-j">join now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
