import React from "react";
import Accordions from "../Accordions/Accordion";
import { javascriptQuestions } from "../../constants/Constant";

const Javascript = () => {
  return (
    <div className="questions">
      <div className="title">Javascript questions</div>
      {javascriptQuestions?.map(({ question, content, id }) => (
        <Accordions id={`content-${id}`} child={content} acc={question} />
      ))}
    </div>
  );
};

export default Javascript;
