import React from "react";
import Accordions from "../Accordions/Accordion";
import { javascriptQuestions } from "../../constants/Constant";

const Javascript = () => {
  return (
    <div className="questions">
      <div className="title">Javascript questions</div>
      {javascriptQuestions?.map(({ question, content, id } , idx) => (
        <Accordions id={`content-${id}`} child={content} acc={question} index={idx} />
      ))}
    </div>
  );
};

export default Javascript;
