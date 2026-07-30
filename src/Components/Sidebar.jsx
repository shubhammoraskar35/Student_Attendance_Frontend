import {
    LayoutDashboard,
    Users,
    UserPlus,
    CalendarDays,
    FileText,
    LogOut,
    Plus
} from "lucide-react";

import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Sidebar() {

    const navigate = useNavigate();
    const location = useLocation();

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);

    }, []);

    const menuItems = [
        {
            title: "Dashboard",
            icon: <LayoutDashboard size={20} />,
            path: "/dashboard"
        },
        {
            title: "Students",
            icon: <Users size={20} />,
            path: "/students"
        },
        {
            title: "Add Student",
            icon: <UserPlus size={20} />,
            path: "/add-student"
        },
        {
            title: "Attendance",
            icon: <CalendarDays size={20} />,
            path: "/attendance"
        },
        {
            title: "Reports",
            icon: <FileText size={20} />,
            path: "/reports"
        }
    ];

    return (

        <div
            style={{
                ...sidebarStyle,
                width: isMobile ? "70px" : "260px",
                minWidth: isMobile ? "70px" : "260px"
            }}
        >

            {/* TOP */}

            <div>

                <div style={logoSection}>

                    <h1
                        style={{
                            ...logoText,
                            fontSize: isMobile ? "24px" : "34px",
                            textAlign: "center"
                        }}
                    >
                        {isMobile ? "ET" : "EduTrack Admin"}
                    </h1>

                    {!isMobile && (
                        <p style={subText}>
                            School Registrar
                        </p>
                    )}

                </div>

                {/* MENU */}

                <div style={menuContainer}>

                    {
                        menuItems.map((item, index) => (

                            <div
                                key={index}
                                onClick={() => navigate(item.path)}
                                style={
                                    location.pathname === item.path
                                        ? {
                                            ...activeMenuItem,
                                            justifyContent: isMobile ? "center" : "flex-start"
                                        }
                                        : {
                                            ...menuItem,
                                            justifyContent: isMobile ? "center" : "flex-start"
                                        }
                                }
                            >

                                {item.icon}

                                {!isMobile && (
                                    <span style={menuText}>
                                        {item.title}
                                    </span>
                                )}

                            </div>

                        ))
                    }

                </div>

            </div>

            {/* Bottom */}

            <div>

                <button
                    style={{
                        ...attendanceButton,
                        width: isMobile ? "45px" : "calc(100% - 40px)",
                        margin: isMobile ? "0 auto" : "0 20px",
                        padding: isMobile ? "12px" : "15px"
                    }}
                    onClick={() => navigate("/attendance")}
                >

                    <Plus size={18} />

                    {!isMobile && (
                        <span>
                            New Attendance
                        </span>
                    )}

                </button>

                <div
                    style={{
                        ...logoutContainer,
                        justifyContent: isMobile ? "center" : "flex-start"
                    }}
                    onClick={() => navigate("/")}
                >

                    <LogOut size={20} />

                    {!isMobile && (
                        <span style={logoutText}>
                            Logout
                        </span>
                    )}

                </div>

            </div>

        </div>
    );
}

const sidebarStyle = {
    height: "100vh",
    backgroundColor: "#f8f8fc",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRight: "1px solid #e5e7eb",
    padding: "20px 0",
    position: "fixed",
    left: 0,
    top: 0
};

const logoSection = {
    padding: "0 15px",
    marginBottom: "40px"
};

const logoText = {
    color: "#1565d8",
    fontWeight: "700",
    margin: 0
};

const subText = {
    marginTop: "5px",
    color: "#555",
    fontSize: "17px",
    textAlign: "center"
};

const menuContainer = {
    display: "flex",
    flexDirection: "column",
    gap: "8px"
};
//
// const mainContainer = {
//     minHeight: "100vh",
//     background: "#f5f7fb",
//     boxSizing: "border-box",
//     overflowX: "hidden",
//     transition: ".3s"
// };

const menuItem = {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "16px 22px",
    cursor: "pointer",
    color: "#333",
    fontSize: "17px"
};

const activeMenuItem = {
    display: "flex",
    alignItems: "center",
    gap: "14px",
    padding: "16px 22px",
    backgroundColor: "#dbeafe",
    borderLeft: "4px solid #1565d8",
    color: "#1565d8",
    fontSize: "17px",
    fontWeight: "600",
    cursor: "pointer"
};

const menuText = {
    fontSize: "17px"
};

const attendanceButton = {
    backgroundColor: "#1565d8",
    color: "white",
    border: "none",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "10px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600"
};

const logoutContainer = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "25px 22px 10px",
    cursor: "pointer",
    color: "#333"
};

const logoutText = {
    fontSize: "17px"
};

export default Sidebar;