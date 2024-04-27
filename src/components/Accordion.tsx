import React from "react";

export interface AccordionProps {
  question: string;
  answer: string;
}

const Accordion: React.FC<AccordionProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="accordion">
      <button className="accordion-header" onClick={() => setIsOpen(!isOpen)}>
        {question}
      </button>
      <div className="accordion-content" hidden={!isOpen}>
        {answer}
      </div>
    </div>
  );
};

export default Accordion;
