import React, { useState, useEffect, ReactEventHandler } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import AddItem from "./AddItem";

const AddNewItem = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <Accordion elevation={0} expanded={expanded}>
      <AccordionSummary
        expandIcon={<span></span>}
        sx={{ bgcolor: "#1e293b", boxShadow: "none", padding: 0 }}
        aria-controls="panel1a-content"
        color="primary"
        onClick={() => setExpanded((prev) => !prev)}
      >
        <Typography color="#ffbb2c ">+ افزودن مسیر ارتباطی </Typography>
      </AccordionSummary>
      <AccordionDetails className="acc-list" sx={{ bgcolor: "#384450" }}>
        <AddItem />
        <div className="flex justify-end mt-6 form-btn">
          <Button
            variant="outlined"
            className=""
            onClick={() => setExpanded(false)}
          >
            انصراف
          </Button>
          <Button
            variant="contained"
            color="warning"
            className="px-10 mr-6 btn-save"
          >
            ثبت مسیر ارتباطی
          </Button>
        </div>
      </AccordionDetails>
    </Accordion>
  );
};

export default AddNewItem;
