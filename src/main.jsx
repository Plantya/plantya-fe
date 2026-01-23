import React, { useMemo, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from "../src/App"
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from './context/AuthContext';
import '../index.css'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import themeConfig from './themes/globalTheme';
import '@mdi/font/css/materialdesignicons.min.css';

const Root = () => {
  const [mode, setMode] = useState("dark");

  const theme = useMemo(
    () => themeConfig(mode),
    [mode]
  );

  const toggleTheme = () => {
    setMode(prev => (prev === "dark" ? "light" : "dark"))
  }

  return (
    <BrowserRouter basename="/plantya">
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <App
            mode={mode}
            toggleTheme={toggleTheme}
          />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);  