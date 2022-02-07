import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Avatar, Toolbar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useDarkMode } from "../../hooks";
export default function Header() {
  const darkMode = useDarkMode();
  const { toggleColorMode, mode } = darkMode;
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="primary"
        elevation={0}
        sx={{ background: mode === "dark" ? "#0f161f" : "" }}
      >
        <Toolbar className="flex justify-between">
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <SearchIcon />
            </IconButton>

            <IconButton
              sx={{ ml: 1 }}
              onClick={toggleColorMode}
              color="inherit"
            >
              {mode === "light" ? <Brightness7Icon /> : <Brightness4Icon />}
            </IconButton>
          </div>
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
