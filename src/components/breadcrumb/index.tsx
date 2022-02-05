import { IconButton, List, ListItem, ListItemText } from "@mui/material";

const BreadCrumb = () => {
  return (
    <List className="breadCrumb mb-6" sx={{ fontSize: 11 }}>
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
export default BreadCrumb;
