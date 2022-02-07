import { List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useDarkMode } from "../../hooks";

const BreadCrumb = () => {
  const darkMode = useDarkMode();

  const { mode } = darkMode;
  return (
    <List className={`breadCrumb mb-6 ${mode}`} sx={{ fontSize: 11 }}>
      <ListItem className="inline-block">
        <ListItemText primary={`خانه`} />
      </ListItem>
      <ListItem className="inline-block">
        <ListItemText primary={`کاربر`} />
      </ListItem>
      <ListItem className="inline-block">
        <ListItemText primary={`تنظیمات کاربری`} />
      </ListItem>
    </List>
  );
};
export default React.memo(BreadCrumb);
