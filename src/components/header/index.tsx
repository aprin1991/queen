import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Avatar, Toolbar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "transparent" }}>
      <AppBar position="static" color="primary">
        <Toolbar className="flex justify-between">
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
            <SearchIcon />
          </IconButton>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <Avatar alt="Hamed" src="/" />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
