import React, { useState, useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import AddItem from "./AddItem";
import { InformationProps } from "../types";
import { useDarkMode } from "../../../hooks";

const Information: React.FC<InformationProps> = ({
  save,
  isEditMode,
  editItem,
  cancelEdit,
  saveEdit,
  itemsList,
}) => {
  const darkMode = useDarkMode();
  const { mode } = darkMode;
  const [expanded, setExpanded] = useState(false);
  useEffect(() => {
    setExpanded(isEditMode);
  }, [isEditMode]);
  return (
    <Accordion elevation={0} expanded={expanded}>
      <AccordionSummary
        expandIcon={<span></span>}
        sx={{
          background: mode === "dark" ? "#1e293b" : "#fff",
          boxShadow: "none",
          padding: 0,
        }}
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
          itemsList={itemsList}
        />
      </AccordionDetails>
    </Accordion>
  );
};

export default React.memo(Information);
