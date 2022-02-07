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
import { darkTheme, lightTheme } from "./theme";
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
  const [mode, setMode] = useState<"light" | "dark">("dark");
  const colorMode = useMemo(
    () => ({
      mode,
      toggleColorMode: () => {
        setMode((prev) => (prev === "light" ? "dark" : "light"));
      },
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <CacheProvider value={cacheRtl}>
        <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
          <div dir="rtl">
            <CssBaseline />
            <Header />
            <Container
              maxWidth={false}
              color="primary"
              sx={{
                bgcolor: `${mode === "dark" ? "#0f161f" : "#fff"}`,
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
