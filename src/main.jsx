import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from "../src/App"
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from './context/AuthContext';
import '../index.css'
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import darkTheme from './themes/globalTheme';
import '@mdi/font/css/materialdesignicons.min.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/plantya">
      <AuthProvider>
        <ThemeProvider theme={darkTheme}> 
          <CssBaseline />
          <App />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode >
)

// // Prepare for dark mode / light
// const Root = () => {
//   const [mode, setMode] = useState("dark")
//   const theme = useMemo(
//     () => createTheme(darkTheme(mode)),
//     [mode]
//   );

//   return (
//     <BrowserRouter basename="/plantya">
//       <AuthProvider>
//         <ThemeProvider theme={theme}>
//           <CssBaseline />
//           <App toggleTheme={() => setMode(p => p === "dark" ? "light" : "dark")} />
//         </ThemeProvider>
//       </AuthProvider>
//     </BrowserRouter>
//   );
// };

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Root />
//   </React.StrictMode>
// );


