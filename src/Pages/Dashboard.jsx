import {
    Bell,
    Settings,
    Users,
    CheckCircle,
    XCircle,
    Percent,
    MoreVertical,
    Filter
} from "lucide-react";

import { useEffect, useState } from "react";
import axios from "axios";
function Dashboard() {

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {

        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);

        return () =>
            window.removeEventListener("resize", handleResize);

    }, []);
    const [totalStudent, setTotalStudent] = useState(0);
    const [todayPresentStudent, setTodayPresentStudent] = useState(0);
    const [todayAbsentStudent, setTodayAbsentStudent] = useState(0);
    const fetchAllCounts = async () => {

        try {

            const totalStudent = await axios.get(
                "https://student-attendance-4ax6.onrender.com/student/get-total-student"
            );

            setTotalStudent(totalStudent.data);

            const presentStudent = await axios.get(
                "https://student-attendance-4ax6.onrender.com/attendance/get-present-attendance"
            );

            setTodayPresentStudent(presentStudent.data);

            const absentStudent = await axios.get(
                "https://student-attendance-4ax6.onrender.com/attendance/get-absent-attendance"
            );

            setTodayAbsentStudent(absentStudent.data);

        } catch (e) {

            console.log("Something Went Wrong");

        }

    };
    useEffect(() => {

        fetchAllCounts();

    }, []);
    const attendanceRate =
        totalStudent > 0
            ? (
                (todayPresentStudent / totalStudent) * 100
            ).toFixed(2)
            : 0;
    const cardData = [

        {
            title: "TOTAL STUDENTS",
            value: totalStudent,
            icon: <Users size={24} color="#2563eb" />,
            extra: "+2.5%",
            extraColor: "#2563eb"
        },

        {
            title: "PRESENT TODAY",
            value: todayPresentStudent,
            icon: <CheckCircle size={24} color="#059669" />,
            extra: "Live",
            extraColor: "#059669"
        },

        {
            title: "ABSENT TODAY",
            value: todayAbsentStudent,
            icon: <XCircle size={24} color="#dc2626" />,
            extra: "-12%",
            extraColor: "#dc2626"
        },

        {
            title: "ATTENDANCE RATE",
            value: attendanceRate,
            icon: <Percent size={24} color="#ea580c" />,
            extra: "Target 95%",
            extraColor: "#ea580c"
        }

    ];
    const recentAttendance = [
        {
            name: "Jordan Smith",
            id: "#ST-2024-001",
            class: "Grade 11-A",
            time: "08:05 AM",
            status: "PRESENT",
            initials: "JS"
        },
        {
            name: "Lydia White",
            id: "#ST-2024-042",
            class: "Grade 09-C",
            time: "08:12 AM",
            status: "PRESENT",
            initials: "LW"
        },
        {
            name: "Marcus Reed",
            id: "#ST-2024-118",
            class: "Grade 12-B",
            time: "--",
            status: "ABSENT",
            initials: "MR"
        },
        {
            name: "Elena Cruz",
            id: "#ST-2024-205",
            class: "Grade 11-A",
            time: "08:45 AM",
            status: "LATE",
            initials: "EC"
        }
    ];
    return (

        // <div style={mainContainer}>
        <div
            style={{
                ...mainContainer,
                marginLeft: isMobile ? "70px" : "260px",
                width: isMobile
                    ? "calc(100% - 70px)"
                    : "calc(100% - 260px)",
                padding: isMobile ? "15px" : "20px"
            }}
        >
            {/* ================= HEADER ================= */}

            <div
                style={{
                    ...headerStyle,
                    flexDirection: isMobile ? "column" : "row",
                    alignItems: isMobile ? "stretch" : "center"
                }}
            >

                <input
                    type="text"
                    placeholder="Search records..."
                    style={{
                        ...searchStyle,
                        width: isMobile ? "100%" : "350px"
                    }}
                />

                <div
                    style={{
                        ...headerRight,
                        width: isMobile ? "100%" : "auto",
                        justifyContent: isMobile
                            ? "space-between"
                            : "flex-end"
                    }}
                >

                    <Bell size={22} color="#374151"/>

                    <Settings size={22} color="#374151"/>

                    <div style={profileStyle}>

                        <img
                            src="https://i.pravatar.cc/100"
                            alt=""
                            style={profileImg}
                        />

                        <div>

                            <h4
                                style={{
                                    margin:0,
                                    fontSize:isMobile ? "13px":"14px"
                                }}
                            >
                                Admin Profile
                            </h4>

                            <p
                                style={{
                                    margin:0,
                                    color:"#6b7280",
                                    fontSize:"12px"
                                }}
                            >
                                SUPER ADMIN
                            </p>

                        </div>

                    </div>

                </div>

            </div>
            <div
                style={{
                    marginBottom:"25px"
                }}
            >

                <h1
                    style={{
                        ...titleStyle,
                        fontSize:isMobile ? "28px" : "38px"
                    }}
                >
                    Welcome back, Registrar
                </h1>

                <p
                    style={{
                        ...subTitle,
                        fontSize:isMobile ? "14px":"16px"
                    }}
                >
                    Here is what's happening in your school today.
                </p>

            </div>
            <div

                style={{

                    ...cardContainer,

                    gridTemplateColumns:isMobile

                        ? "1fr"

                        : "repeat(auto-fit,minmax(240px,1fr))",

                    gap:isMobile ? "15px":"20px"

                }}

            >

                {

                    cardData.map((item,index)=>(

                        <div

                            key={index}

                            style={{

                                ...cardStyle,

                                padding:isMobile ? "18px":"22px"

                            }}

                        >

                            <div style={cardTop}>

                                <div style={iconBox}>
                                    {item.icon}
                                </div>

                                <span

                                    style={{

                                        fontSize:"14px",

                                        fontWeight:"600",

                                        color:item.extraColor

                                    }}

                                >

{item.extra}

</span>

                            </div>

                            <p style={cardTitle}>
                                {item.title}
                            </p>

                            <h1

                                style={{

                                    ...cardValue,

                                    fontSize:isMobile ? "30px":"40px"

                                }}

                            >

                                {item.value}

                            </h1>

                        </div>

                    ))

                }

            </div>
            {/* ================= Attendance Chart ================= */}

            <div
                style={{
                    ...chartCard,
                    padding: isMobile ? "18px" : "25px"
                }}
            >

                <div style={sectionHeader}>

                    <h2
                        style={{
                            ...sectionTitle,
                            fontSize: isMobile ? "22px" : "28px"
                        }}
                    >
                        Attendance Trends
                    </h2>

                    <button
                        style={{
                            ...smallButton,
                            fontSize: isMobile ? "12px" : "14px",
                            padding: isMobile ? "6px 10px" : "8px 14px"
                        }}
                    >
                        Last 7 Days
                    </button>

                </div>

                <div
                    style={{
                        ...chartArea,
                        height: isMobile ? "220px" : "300px",
                        padding: isMobile ? "12px" : "20px",
                        gap: isMobile ? "8px" : "14px"
                    }}
                >

                    {[60,85,75,90,45,80,95].map((height,index)=>(

                        <div
                            key={index}
                            style={barWrapper}
                        >

                            <div
                                style={{
                                    ...barStyle,
                                    height:`${height}%`,
                                    maxWidth:isMobile ? "22px" : "40px"
                                }}
                            />

                            <span
                                style={{
                                    ...barLabel,
                                    fontSize:isMobile ? "10px" : "13px"
                                }}
                            >
                    {["MON","TUE","WED","THU","FRI","SAT","SUN"][index]}
                </span>

                        </div>

                    ))}

                </div>

            </div>
            {/* ================= Top Performers ================= */}

            <div
                style={{
                    ...performerCard,
                    padding:isMobile ? "18px" : "25px"
                }}
            >

                <h2
                    style={{
                        ...sectionTitle,
                        fontSize:isMobile ? "22px" : "28px"
                    }}
                >
                    Top Performers
                </h2>

                {

                    [

                        {name:"Class 10-A",percent:"98%"},

                        {name:"Class 08-C",percent:"94%"},

                        {name:"Class 12-B",percent:"91%"}

                    ].map((item,index)=>(

                        <div
                            key={index}
                            style={{marginBottom:"25px"}}
                        >

                            <div style={performerTop}>

                                <div
                                    style={{
                                        ...circleAvatar,
                                        width:isMobile ? "38px" : "45px",
                                        height:isMobile ? "38px" : "45px"
                                    }}
                                >
                                    {String.fromCharCode(65+index)}
                                </div>

                                <div style={{flex:1}}>

                                    <div style={performerRow}>

                            <span
                                style={{
                                    fontSize:isMobile ? "13px" : "15px"
                                }}
                            >
                                {item.name}
                            </span>

                                        <span
                                            style={{
                                                fontSize:isMobile ? "13px" : "15px"
                                            }}
                                        >
                                {item.percent}
                            </span>

                                    </div>

                                    <div style={progressBg}>

                                        <div
                                            style={{
                                                ...progressFill,
                                                width:item.percent
                                            }}
                                        />

                                    </div>

                                </div>

                            </div>

                        </div>

                    ))

                }

                <button
                    style={{
                        ...viewButton,
                        fontSize:isMobile ? "14px" : "16px"
                    }}
                >
                    View All Classes
                </button>

            </div>
            {/* ==================== RECENT ATTENDANCE ==================== */}

            <div
                style={{
                    ...tableCard,
                    padding: isMobile ? "18px" : "25px"
                }}
            >

                <div
                    style={{
                        ...sectionHeader,
                        flexDirection: isMobile ? "column" : "row",
                        alignItems: isMobile ? "flex-start" : "center",
                        gap: isMobile ? "12px" : "0"
                    }}
                >

                    <h2
                        style={{
                            ...sectionTitle,
                            fontSize: isMobile ? "22px" : "28px"
                        }}
                    >
                        Recent Attendance
                    </h2>

                    <div
                        style={{
                            display: "flex",
                            gap: "15px"
                        }}
                    >
                        <Filter size={20} color="#374151" />
                        <MoreVertical size={20} color="#374151" />
                    </div>

                </div>

                <div
                    style={{
                        width: "100%",
                        overflowX: "auto"
                    }}
                >

                    <table
                        style={{
                            ...tableStyle,
                            minWidth: isMobile ? "650px" : "700px"
                        }}
                    >

                        <thead>

                        <tr>

                            <th style={thStyle}>STUDENT NAME</th>
                            <th style={thStyle}>ID NUMBER</th>
                            <th style={thStyle}>CLASS</th>
                            <th style={thStyle}>TIME</th>
                            <th style={thStyle}>STATUS</th>
                            <th style={thStyle}>ACTION</th>

                        </tr>

                        </thead>

                        <tbody>

                        {

                            recentAttendance.map((item,index)=>(

                                <tr key={index}>

                                    <td style={tdStyle}>

                                        <div style={studentCell}>

                                            <div

                                                style={{

                                                    ...avatarCircle,

                                                    width:isMobile ? "34px":"38px",

                                                    height:isMobile ? "34px":"38px",

                                                    fontSize:isMobile ? "12px":"14px"

                                                }}

                                            >

                                                {item.initials}

                                            </div>

                                            {item.name}

                                        </div>

                                    </td>

                                    <td style={tdStyle}>{item.id}</td>

                                    <td style={tdStyle}>{item.class}</td>

                                    <td style={tdStyle}>{item.time}</td>

                                    <td style={tdStyle}>

                            <span

                                style={{

                                    ...statusBadge,

                                    backgroundColor:

                                        item.status==="PRESENT"

                                            ? "#dcfce7"

                                            : item.status==="ABSENT"

                                                ? "#fee2e2"

                                                : "#fef3c7",

                                    color:

                                        item.status==="PRESENT"

                                            ? "#166534"

                                            : item.status==="ABSENT"

                                                ? "#b91c1c"

                                                : "#92400e"

                                }}

                            >

                                {item.status}

                            </span>

                                    </td>

                                    <td

                                        style={{

                                            ...tdStyle,

                                            color:"#2563eb",

                                            cursor:"pointer",

                                            fontWeight:"600"

                                        }}

                                    >

                                        Details

                                    </td>

                                </tr>

                            ))

                        }

                        </tbody>

                    </table>

                </div>

            </div>

        </div>

    );

}
// const mainContainer = {
//     width: window.innerWidth <= 768 ? "100%" : "calc(100% - 260px)",
//     marginLeft: window.innerWidth <= 768 ? "0" : "260px",
//     minHeight: "100vh",
//     backgroundColor: "#f5f7fb",
//     padding: window.innerWidth <= 768 ? "15px" : "20px",
//     boxSizing: "border-box",
//     overflowX: "hidden",
//     transition: "all .3s ease"
// };
//
const mainContainer = {
    minHeight: "100vh",
    background: "#f5f7fb",
    boxSizing: "border-box",
    overflowX: "hidden",
    transition: ".3s"
};
const headerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
    marginBottom: "30px"
};

const searchStyle = {
    flex: 1,
    minWidth: "220px",
    padding: "12px 18px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    outline: "none",
    background: "#fff",
    fontSize: "15px",
    boxSizing: "border-box"
};

const headerRight = {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    flexWrap: "wrap"
};

const profileStyle = {
    display: "flex",
    alignItems: "center",
    gap: "10px"
};

const profileImg = {
    width: "45px",
    height: "45px",
    borderRadius: "50%"
};
const titleStyle = {
    margin: 0,
    fontWeight: "700",
    color: "#111827"
};

const subTitle = {
    marginTop: "8px",
    color: "#6b7280"
};
const cardContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "20px",
    marginBottom: "25px"
};

const cardStyle = {
    background: "#fff",
    borderRadius: "18px",
    padding: "22px",
    border: "1px solid #e5e7eb",
    boxShadow: "0 2px 10px rgba(0,0,0,.06)"
};

const cardTop = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
};

const iconBox = {
    width: "52px",
    height: "52px",
    background: "#eff6ff",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const cardTitle = {
    fontSize: "14px",
    color: "#6b7280",
    marginBottom: "10px",
    fontWeight: "600"
};

const cardValue = {
    margin: 0,
    fontWeight: "700",
    color: "#111827"
};
const middleContainer = {
    display: "grid",
    gridTemplateColumns: window.innerWidth <= 768 ? "1fr" : "2fr 1fr",
    gap: "20px",
    marginBottom: "25px"
};

const chartCard = {
    background: "#fff",
    borderRadius: "18px",
    padding: "25px",
    border: "1px solid #e5e7eb"
};

const performerCard = {
    background: "#fff",
    borderRadius: "18px",
    padding: "25px",
    border: "1px solid #e5e7eb"
};

const sectionHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "25px"
};

const sectionTitle = {
    margin: 0,
    fontWeight: "700"
};

const smallButton = {
    padding: "8px 14px",
    borderRadius: "10px",
    border: "none",
    cursor: "pointer",
    background: "#f3f4f6"
};
const chartArea = {
    height: "300px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    background: "#f9fafb",
    borderRadius: "14px",
    padding: "20px",
    gap: "14px"
};

const barWrapper = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%"
};

const barStyle = {
    width: "100%",
    maxWidth: "40px",
    background: "#2563eb",
    borderRadius: "10px 10px 0 0"
};

const barLabel = {
    marginTop: "10px",
    fontWeight: "600"
};
const performerTop = {
    display: "flex",
    gap: "15px",
    alignItems: "center"
};

const circleAvatar = {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background: "#dbeafe",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700"
};

const performerRow = {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "8px",
    fontWeight: "600"
};

const progressBg = {
    width: "100%",
    height: "8px",
    background: "#e5e7eb",
    borderRadius: "10px"
};

const progressFill = {
    height: "100%",
    background: "#2563eb",
    borderRadius: "10px"
};

const viewButton = {
    width: "100%",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #2563eb",
    background: "#fff",
    color: "#2563eb",
    fontWeight: "600",
    cursor: "pointer"
};
const tableCard = {
    background: "#fff",
    borderRadius: "18px",
    padding: "25px",
    border: "1px solid #e5e7eb",
    overflow: "hidden"
};

const tableStyle = {
    width: "100%",
    minWidth: "700px",
    borderCollapse: "collapse"
};

const thStyle = {
    textAlign: "left",
    padding: "16px",
    fontSize: "13px",
    color: "#6b7280",
    borderBottom: "1px solid #e5e7eb"
};

const tdStyle = {
    padding: "18px 16px",
    borderBottom: "1px solid #f1f5f9",
    fontSize: "15px"
};

const studentCell = {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontWeight: "600"
};

const avatarCircle = {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: "#dbeafe",
    color: "#2563eb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700"
};

const statusBadge = {
    padding: "6px 12px",
    borderRadius: "20px",
    fontWeight: "700",
    fontSize: "12px"
};

export default Dashboard;