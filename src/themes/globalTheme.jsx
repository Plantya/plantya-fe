import { createTheme } from "@mui/material/styles";

const baseColors = {
  green: "#007C4F",
  greenLight: "#00A86B",
  red: "#DC3545",
  blue: "#1976D2",
  lightBlue: "#60A5FA",
  darkBlue: "#24427D",
  yellow: "#FFC107",

  white: "#FFFFFF",
  black: "#111827",

  grey: "#A3B2AC",
  greyLight: "#6B7280",

  neutralBlack: "#121212",
  darkBlack: "#1A1A1A",
  midnightBlack: "#0D0D0D",

  darkGrey: "#222222",
  lightGrey: "#AAAAAA",

  lightBg: "#F5F7FA",
  lightPaper: "#FFFFFF",
  lightElevated: "#F0F2F5",

  lightInput: "#F3F4F6",
};

const themeConfig = (mode = "dark") => {
  const isDark = mode === "dark";

  const colors = {
    background: {
      default: isDark ? baseColors.neutralBlack : baseColors.lightBg,
      paper: isDark ? baseColors.darkBlack : baseColors.lightPaper,
      elevated: isDark ? baseColors.midnightBlack : baseColors.lightElevated,
    },

    text: {
      primary: isDark ? baseColors.white : baseColors.black,
      secondary: isDark ? baseColors.grey : baseColors.greyLight,
      secondaryLight: isDark ? baseColors.lightGrey : "#9CA3AF",
    },

    inputBg: isDark ? baseColors.darkGrey : baseColors.lightInput,
    inputDisabled: isDark ? "#3A3A3A" : "#E5E7EB",

    divider: isDark ? baseColors.grey : "#D1D5DB",
  };

  return createTheme({
    palette: {
      mode,

      tonalOffset: 0,
      contrastThreshold: 0,

      primary: {
        main: baseColors.green,
        light: baseColors.greenLight,
      },
      secondary: {
        main: baseColors.grey,
        dark: colors.inputBg,
        contrastText: baseColors.white,
      },
      info: {
        main: baseColors.blue,
        light: baseColors.lightBlue,
        dark: baseColors.darkBlue,
      },
      success: { main: baseColors.green },
      error: { main: baseColors.red },
      warning: {
        main: baseColors.yellow,
        contrastText: baseColors.white,
      },

      background: colors.background,
      text: colors.text,
      divider: colors.divider,

      action: {
        hover: isDark ? "#1F1F1F" : "#E5E7EB",
        selected: isDark ? "#1F1F1F" : "#E5E7EB",
      },
    },

    typography: {
      fontFamily: "Poppins, sans-serif",
    },

    components: {
      MuiPaper: {
        styleOverrides: {
          root: () => ({
            backgroundColor: `${colors.background.paper} !important`,
            backgroundImage: "none !important",
          }),
        },
      },

      MuiTextField: {
        styleOverrides: {
          root: ({ theme }) => ({
            "&.auth-field": {
              "& .MuiOutlinedInput-root": {
                marginTop: 1,
                backgroundColor: colors.inputBg,
                borderRadius: "15px",
                transition: "all 0.3s ease",

                "&.Mui-disabled": {
                  backgroundColor: colors.inputDisabled,
                  "& .MuiInputBase-input": {
                    color: colors.text.secondary,
                    WebkitTextFillColor: colors.text.secondary,
                  },
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: colors.divider,
                  },
                  "& .MuiInputAdornment-root .MuiSvgIcon-root": {
                    color: colors.text.secondary,
                  },
                },

                "& fieldset": { borderWidth: "0.7px" },
                "&:hover:not(.Mui-disabled) fieldset": {
                  borderWidth: "2px",
                  borderColor: theme.palette.primary.light,
                },
                "&.Mui-focused fieldset": {
                  borderWidth: "2px",
                  borderColor: theme.palette.primary.light,
                },

                "& input": { color: colors.text.secondaryLight },
                "& input:not(:placeholder-shown)": {
                  color: colors.text.primary,
                },

                "& .MuiInputBase-input::placeholder": {
                  color: colors.text.secondaryLight,
                },

                // Autofill Webkit
                "& input:-webkit-autofill": {
                  WebkitBoxShadow: `0 0 0 1000px ${colors.inputBg} inset !important`,
                  boxShadow: `0 0 0 1000px ${colors.inputBg} inset !important`,
                  WebkitTextFillColor: `${colors.text.primary} !important`,
                  transition: "background-color 5000s ease-in-out 0s !important",
                },

                // Autofill Firefox
                "& input:-moz-autofill": {
                  background: `${colors.inputBg} !important`,
                  color: `${colors.text.primary} !important`,
                },
              },

              "& .MuiFormHelperText-root": {
                position: "absolute",
                top: "100%",
                left: "8px",
                right: "8px",
                marginTop: "4px",
                fontSize: "0.75rem",
                lineHeight: 1.3,
                whiteSpace: "normal",
                wordBreak: "break-word",
                overflowWrap: "break-word",
              },
            },
          }),
        },
      },

      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            "&.auth-button": {
              backgroundColor: theme.palette.primary.main,
              color: theme.palette.text.primary,
              borderRadius: 15,
              fontWeight: 600,
              "&:hover": {
                backgroundColor: theme.palette.primary.light,
              },
            },

            "&.linkto-button": {
              color: theme.palette.primary.main,
              textTransform: "none",
              "&:hover": {
                textDecoration: "underline",
                backgroundColor: "transparent",
              },
            },
          }),
        },
      },

      MuiDivider: {
        styleOverrides: {
          root: () => ({
            borderColor: colors.divider,
          }),
        },
      },
    },
  });
};

export default themeConfig;
