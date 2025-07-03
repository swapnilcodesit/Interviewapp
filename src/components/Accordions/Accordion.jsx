import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function Accordions({ acc, child, id , index }) {
  return (
    <div key={id} className="accordion-wrapper">
      <Accordion>
        <div className="summary-wrapper">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={id}
            id={id}
          >
            <Typography component="span"><span className="titles"><span>{`${index+1})`}</span> {acc}</span></Typography>
          </AccordionSummary>
        </div>
        <AccordionDetails>{child}</AccordionDetails>
      </Accordion>
    </div>
  );
}
