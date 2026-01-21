import { createContext, useContext, useState } from "react";
import MainGame from "../Pages/Main";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme, CssBaseline } from "@mui/material";

const PageContext = createContext();
export const usePage = () => useContext(PageContext);

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#90caf9" },
    secondary: { main: "#f48fb1" },
    success: { main: "#81c784" },
    warning: { main: "#ffb74d" },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
  },
});

export default function PageProvider() {
  const [page, setPage] = useState(<MainGame />);

  return (
    <PageContext.Provider value={{ page, setPage }}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {page}
      </ThemeProvider>
    </PageContext.Provider>
  );
}
