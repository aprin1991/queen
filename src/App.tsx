import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import React, { useState, useMemo } from "react";
import Header from "./components/header";
import HomePage from "./pages/home";
import rtlPlugin from "stylis-plugin-rtl";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import { ToastContainer } from "react-toastify";

interface IColorModeContext {
  mode?: "dark" | "light";
  toggleColorMode: () => void;
}
export const ColorModeContext = React.createContext<IColorModeContext>({
  mode: "light",
  toggleColorMode: () => {},
});
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [rtlPlugin],
});

const App = () => {
  const [mode, setMode] = useState<"light" | "dark">("light");
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );
  const theme = useMemo(
    () =>
      createTheme({
        direction: "rtl",
        palette: {
          mode,
          primary: {
            main: "#0f161f",
            light: "#757ce8",
            dark: "#002884",
            contrastText: "#fff",
          },
          secondary: {
            main: "#384450",
          },
          divider:
            mode === "light"
              ? "rgba(0, 0, 0, 0.12)"
              : "rgba(255, 255, 255, 0.12);",
        },

        typography: {
          fontFamily: "yekan",
          fontSize: 12,
          h6: {
            color: "#fff",
            fontSize: 12,
          },
        },
      }),
    [mode]
  );
  return (
    <ColorModeContext.Provider value={colorMode}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={theme}>
          <div dir="rtl">
            <CssBaseline />
            <Header />
            <Container
              maxWidth={false}
              color="primary"
              sx={{
                bgcolor: "#0f161f",
                overflowY: "auto",
              }}
              className="w-screen h-screen"
            >
              <div className="w-2/3 w-full flex flex-col justify-center  items-start mx-auto py-16">
                <HomePage />
              </div>
            </Container>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={true}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            limit={4}
          />
        </ThemeProvider>
      </CacheProvider>
    </ColorModeContext.Provider>
  );
};
export default App;
