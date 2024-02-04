"use client";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import Button from "../button/Button";
import "../faq/faq.css";
import { Faqs } from "@/app/utility/data";
import { useState } from "react";

const Faq = () => {
  const [isOpened, setIsOpened] = useState(1);

  const toggle = (i) => {
    if (isOpened == i) {
      return setIsOpened(null);
    }
    setIsOpened(i);
  };

  return (
    <section id="faq" className="faqSection">
      <div className="label">
        <Button text="Frequently Asked Questions​" />
      </div>
      <div className="faqTitle">
        <h2>You have questions and we have answers.</h2>
      </div>
      {/* Accordion */}

      <div className="accordionWrapper">
        {Faqs.map(({ id, question, answer }) => {
          return (
            <div
              key={id}
              className={
                isOpened == id ? "accordion accordionBackground" : "accordion"
              }
            >
              <div className="question" onClick={() => toggle(id)}>
                <p>{question}</p>
                <span>{isOpened == id ? <FaMinus /> : <FaPlus />}</span>
              </div>
              <div>
                <p className={isOpened == id ? "answer show" : "answer"}>
                  {answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
