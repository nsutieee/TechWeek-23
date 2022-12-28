import React, { useState, useEffect, useRef } from "react";
import "./Accordian.css";
import logo from "./plus.png";

export default function Accordion(props) {
  const [toggle, setToggle] = useState(false);
  const [heightEl, setHeightEl] = useState();

  const refHeight = useRef();

  useEffect(() => {
    setHeightEl(`${refHeight.current.scrollHeight}px`);
  }, []);

  const toggleState = () => {
    setToggle(!toggle);
  };

  return (
    <div className='accordion'>
      <button onClick={toggleState} className='accordion-visible'>
        <h2>{props.ques}</h2>
        <img className={toggle && "active"} src={logo} alt='' s />
      </button>

      <div
        className={toggle ? "accordion-toggle animated" : "accordion-toggle"}
        style={{ height: toggle ? `${heightEl}` : "0px" }}
        ref={refHeight}
      >
        <p aria-hidden={toggle ? "true" : "false"}>{props.ans}</p>
      </div>
    </div>
  );
}
