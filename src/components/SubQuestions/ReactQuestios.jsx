import React from "react";
import { reactjsQuestions } from "../../constants/Constant";
import Accordions from "../Accordions/Accordion";

const ReactQuestions = () => {
  return (
    <div className="questions">
      <div className="title">React js questions</div>
      {reactjsQuestions?.map(({ question, content, id } , idx) => (
        <Accordions id={`content-${id}`} child={content} acc={question} index={idx}/>
      ))}
    </div>
  );
};

export default ReactQuestions;
