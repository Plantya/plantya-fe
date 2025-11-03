import React from "react";

const NonAuthLayout = ({ children }) => {
    return (
        <div
            style={{
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#69a7e5",
            }}
        >
            <div style={{ width: "100%", maxWidth: 400 }}>{children}</div>
        </div>
    );
};

export default NonAuthLayout;
