import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

const SIDEBAR_COLLAPSE_WIDTH = 70;
const SIDEBAR_WIDTH = 240;
const HEADER_HEIGHT = 70;

const AuthLayout = ({ children }) => {

    const [isCollapsed, setIsCollapsed] = useState(false); // State untuk collapse sidebar
    const toggleSidebar = () => {
        setIsCollapsed((prev) => !prev); // Toggle state
    };

    return (
        <div style={{ display: 'flex', minHeight: "100vh" }}>

            {/* Sidebar */}
            <aside
                style={{
                    width: isCollapsed ? SIDEBAR_COLLAPSE_WIDTH : SIDEBAR_WIDTH, // Lebar sidebar berubah sesuai state
                    position: "fixed",
                    top: 0,
                    left: 0,
                    height: '100vh',
                    backgroundColor: "#0F1624",
                    borderRight: "3px solid #352F44",
                    overflow: "hidden",
                    transition: "width 0.3s ease",
                    zIndex: 1200,
                }}
            >
                <Sidebar
                    isCollapsed={isCollapsed}
                />
            </aside>

            <div
                style={{
                    marginLeft: isCollapsed ? SIDEBAR_COLLAPSE_WIDTH : SIDEBAR_WIDTH,
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    transition: "margin-left 0.3s ease",
                }}
            >

                {/* Header */}
                <header
                    style={{
                        height: HEADER_HEIGHT,
                        backgroundColor: "#0F1624",
                        borderBottom: "3px solid #352F44",
                        position: "sticky",
                        top: 0,
                        zIndex: 1100,
                    }}
                >
                    <Header toggleSidebar={toggleSidebar} isCollapsed={isCollapsed} />
                </header>


                {/* Main Content */}
                <main
                    style={{
                        flex: 1,
                        padding: "24px",
                        backgroundColor: "#0F1624",
                        color: "#fff",
                        minHeight: "calc(100vh - 70px)",
                        overflowY: "auto",
                    }}
                >
                    {children}
                </main>
            </div>
        </div>

    );
};

export default AuthLayout;