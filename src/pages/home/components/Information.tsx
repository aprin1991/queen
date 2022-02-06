import React, { useState, useEffect, ReactEventHandler } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddItem from "./AddItem";
import { InformationProps } from "../types";

const Information: React.FC<InformationProps> = ({
  save,
  isEditMode,
  editItem,
  cancelEdit,
  saveEdit,
}) => {
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    setExpanded(isEditMode);
  }, [isEditMode]);
  return (
    <Accordion elevation={0} expanded={expanded}>
      <AccordionSummary
        expandIcon={<span></span>}
        sx={{ bgcolor: "#1e293b", boxShadow: "none", padding: 0 }}
        aria-controls="panel1a-content"
        color="primary"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <Typography color="#ffbb2c ">
          {isEditMode ? " ویرایش " : "+  افزودن"} مسیر ارتباطی{" "}
        </Typography>
      </AccordionSummary>
      <AccordionDetails className="acc-list" sx={{ bgcolor: "#384450" }}>
        <AddItem
          expand={() => setExpanded(false)}
          save={save}
          isEditMode={isEditMode}
          editItem={editItem}
          cancelEdit={cancelEdit}
          saveEdit={saveEdit}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default Information;
