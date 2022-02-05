import Typography from "@mui/material/Typography";

const PageTitle = ({ title = "" }) => {
  return (
    <Typography
      variant="h1"
      className={"text-white text-sm"}
      sx={{ fontSize: 16 }}
    >
      {title}
    </Typography>
  );
};

export default PageTitle;
