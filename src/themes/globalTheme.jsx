// src/theme.jsx

import { createTheme } from "@mui/material/styles";

const globalTheme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    mode: 'dark',
    primary: { main: '#1976D2' },
    secondary: { main: '#16181A' },
    success: { main: '#07AB0E' },
    error: { main: '#DC3545' },
    info: { main: '#1976D2' },
    background: { default: "#121314", paper: "#16181A" },
    text: { primary: "#FAFAFA", secondary: "#676767" },
    divider: "#2c2e31",
    action: { selected: '#1f1f1f', hover: 'rgba(255, 255, 255, 0.08)' },
  },

  components: {

    MuiTextField: {
      styleOverrides: {
        root: ({ theme }) => ({
          "&.auth-field": {
            position: "relative",
            marginTop: 1,

            /** DEFAULT (kosong & tidak hover) */
            "& .MuiOutlinedInput-root": {
              backgroundColor: theme.palette.background.paper,
              borderRadius: "15px",
              transition: "all 0.25s ease",

              "& fieldset": {
                borderColor: "transparent",
                borderWidth: "2px",
              },

              /** HOVER */
              "&:hover fieldset": {
                borderColor: theme.palette.text.secondary,
              },

              /** FOCUSED */
              "&.Mui-focused fieldset": {
                borderColor: theme.palette.text.secondary,
              },

              "&.Mui-autofilled": {
                "& fieldset": {
                  borderColor: theme.palette.text.secondary,
                }
              },

              // Base Placeholder style
              "& .MuiInputBase-input::placeholder": {
                borderColor: theme.palette.text.secondary,
              },


              "& input:-webkit-autofill": {
                WebkitBoxShadow: "0 0 0 1000px transparent inset !important",
                boxShadow: "0 0 0 1000px transparent inset !important",
                backgroundColor: "transparent !important",
                backgroundImage: "none !important",
                WebkitTextFillColor: `${theme.palette.text.primary} !important`,
                transition: "background-color 5000s ease-in-out 0s !important",
              },
              "& input:-webkit-autofill::placeholder": {
                // fontSize: "1rem !important", 
                color: theme.palette.text.secondary,
                // // opacity: "1 !important", 
              },

              "& input:-webkit-autofill:hover::placeholder": {
                // fontSize: "1rem !important", 
                color: theme.palette.text.secondary,
                // // opacity: "1 !important", 
              },
              // 
              "& input:-webkit-autofill:focus::placeholder": {
                // fontSize: "1rem !important", 
                color: theme.palette.text.secondary,
                //  // opacity: "1 !important", 
              },


              /** INPUT TEXT LOGIC */
              "& input": {
                backgroundColor: theme.palette.secondary,
                WebkitTextFillColor: `${theme.palette.text.secondary} !important`,
                color: theme.palette.text.secondary,
                color: theme.palette.text.secondary,
              },



              /** JIKA ADA ISI */
              "& input:not(:placeholder-shown)": {
                backgroundColor: "transparent !important",
                color: theme.palette.text.primary,
                WebkitTextFillColor: `${theme.palette.text.primary} !important`,
              },
            },

            /** PLACEHOLDER */
            "& .MuiInputBase-input::placeholder": {
              color: theme.palette.text.secondary,
            },

            /** HELPER TEXT */
            "& .MuiFormHelperText-root": {
              position: "absolute",
              bottom: -20,
              left: 14,
              margin: 0,
              whiteSpace: "nowrap",
            },
          },
        })
      },
    },

    // Other Component if needed
  },
});

export default globalTheme;
