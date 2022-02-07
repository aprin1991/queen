import Typography from "@mui/material/Typography";
import React from "react";
import { useDarkMode } from "../../hooks";
const PageTitle = ({ title = "" }) => {
  const darkMode = useDarkMode();
  const { mode } = darkMode;
  return (
    <Typography
      variant="h1"
      className={`text-white text-sm ${
        mode === "dark" ? "text-white" : "text-black"
      }`}
      sx={{ fontSize: 16 }}
    >
      {title}
    </Typography>
  );
};

export default React.memo(PageTitle);
