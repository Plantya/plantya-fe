import React from "react";
import {
    Box,
    List,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Divider,
} from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

const Sidebar = () => {
    const location = useLocation();

    // Mapping dari index.jsx route path
    const menuItems = [
        { text: "Dashboard", path: "/dashboard", icon: <DashboardIcon /> },
        { text: "Master Data", path: "/master-data", icon: <PeopleIcon /> },
        { text: "Settings", path: "/settings", icon: <SettingsIcon /> },
    ];

    return (
        <Box
            sx={{
                height: "100vh",
                bgcolor: "#ffffff",
                borderRight: "3px solid #352F44",
                // position: "fixed",
                top: 0,
                left: 0,
                width: 240,
                zIndex: 1200,
                boxShadow: "none",
                backgroundColor: "#0F1624",
                color: '#ffffff',
                overflowY: "auto",
            }}
            className='d-flex flex-column fixed-sidebar'
        >
            {/* Header Sidebar */}
            <Box
                sx={{
                    height: "10%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottom: "3px solid #352F44",
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    letterSpacing: 0.5,
                }}
            >
                <img
                    src="/BaseLogo.png"
                    alt="Logo"
                    style={{ height: 40 }}
                />
            </Box>

            {/* Menu List */}
            <List sx={{ flex: 1, p: 0, mt: 1 }}>
                {menuItems.map((item, index) => (
                    <ListItemButton
                        key={index}
                        component={Link}
                        to={item.path}
                        selected={location.pathname === item.path}
                        sx={{
                            "&.Mui-selected": {
                                bgcolor: "#e3f2fd",
                                borderLeft: "3px solid #352F44",
                            },
                            "&:hover": {
                                bgcolor: "#f5f5f5",
                            },
                            py: 1.2,
                        }}
                    >
                        <ListItemIcon sx={{ minWidth: 36, color: "#1976d2" }}>
                            {item.icon}
                        </ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItemButton>
                ))}
            </List>

            <Divider />

        </Box>
    );
};

export default Sidebar;
