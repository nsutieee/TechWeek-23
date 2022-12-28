import React from "react";
import { Fade } from "react-reveal";
import Accordian from "./Accordian";
import "./faq.css";
export default function faq() {
  return (
    <section className='faq'>
      <Fade up>
        <div className='header'>FAQs</div>
      </Fade>
      <Fade left>
        <Accordian
          ques='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          ans=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sapiente quibusdam et! Ut repellendus voluptas eos! Fugiat numquam explicabo porro quos fuga perspiciatis libero natus expedita vel. Neque, illo nostrum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sapiente quibusdam et! Ut repellendus voluptas eos! Fugiat numquam explicabo porro quos fuga perspiciatis libero natus expedita vel. Neque, illo nostrum.'
        />
      </Fade>
      <Fade right>
        <Accordian
          ques='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          ans=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sapiente quibusdam et! Ut repellendus voluptas eos! Fugiat numquam explicabo porro quos fuga perspiciatis libero natus expedita vel. Neque, illo nostrum.'
        />
      </Fade>
      <Fade left>
        <Accordian
          ques='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          ans=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sapiente quibusdam et! Ut repellendus voluptas eos! Fugiat numquam explicabo porro quos fuga perspiciatis libero natus expedita vel. Neque, illo nostrum.'
        />
      </Fade>
      <Fade right>
        <Accordian
          ques='Lorem ipsum dolor sit amet consectetur adipisicing elit.'
          ans=' Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore sapiente quibusdam et! Ut repellendus voluptas eos! Fugiat numquam explicabo porro quos fuga perspiciatis libero natus expedita vel. Neque, illo nostrum.'
        />
      </Fade>
    </section>
  );
}
