import React from "react";
import { reactjsQuestions } from "../../constants/Constant";
import Accordions from "../Accordions/Accordion";

const ReactQuestions = () => {
  return (
    <div className="questions">
      <div className="title">React js questions</div>
      {reactjsQuestions?.map(({ question, content, id }) => (
        <Accordions id={`content-${id}`} child={content} acc={question} />
      ))}
    </div>
  );
};

export default ReactQuestions;
