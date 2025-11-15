import React from "react";

const NonAuthLayout = ({ children }) => {
    return (
        <div
            style={{
                width: "100vw",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center", // horizontal center
                alignItems: "center",      // vertical center
                backgroundColor: "#0E1621", // modern dark blue
            }}
        >
            <div
                className="d-flex flex-column justify-content-center align-items-center p-4 rounded-4"
                style={{
                    height: "80%",
                    width: "35%",
                    borderRadius: "12px",
                    padding: "40px",
                    // backgroundColor: "#1C2733", // card dark
                    // boxShadow: "0 6px 15px rgba(0,0,0,0.3)",
                    // border: "1px solid #2F3A48", 
                    // boxShadow: "0 5px 18px rgba(0,0,0,0.4)",
                    color: "white",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {children}
            </div>
        </div>
    );
};

export default NonAuthLayout;
