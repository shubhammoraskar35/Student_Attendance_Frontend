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
import {useEffect, useState} from "react";
import axios from "axios";

function Dashboard() {

    const [totalStudent, setTotalStudent] = useState(0);
    const [todayPresentStudent, setTodayPresentStudent] = useState(0);
    const [todayAbsentStudent, setTodayAbsentStudent] = useState(0);

    const fetchAllCounts =async ()=>{
        try {
            const totalStudent = await axios.get("http://localhost:8080/student/get-total-student");
            console.log(totalStudent.data);
            setTotalStudent(totalStudent.data);


            const presentStudent=await axios.get("http://localhost:8080/attendance/get-present-attendance");
            console.log(presentStudent.data);
            setTodayPresentStudent(presentStudent.data);

            const absentStudent=await axios.get("http://localhost:8080/attendance/get-absent-attendance");
            console.log(absentStudent.data);
            setTodayAbsentStudent(absentStudent.data);


        }catch (e){
            console.log("Something Wents Wrong ");
        }
    }

    useEffect(() => {
            fetchAllCounts();
    }, []);



    const attendanceRate =
        totalStudent > 0
            ? ((todayPresentStudent / totalStudent) * 100).toFixed(2)
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
        <div style={mainContainer}>

            {/* HEADER */}
            <div style={headerStyle}>

                <input
                    type="text"
                    placeholder="Search records..."
                    style={searchStyle}
                />

                <div style={headerRight}>

                    <Bell size={22} color="#374151" />

                    <Settings size={22} color="#374151" />

                    <div style={profileStyle}>
                        <img
                            src="https://i.pravatar.cc/100"
                            alt="profile"
                            style={profileImg}
                        />

                        <div>
                            <h4 style={{margin: 0,fontSize: "14px"}}>
                                Admin Profile
                            </h4>

                            <p style={{
                                margin: 0,
                                fontSize: "12px",
                                color: "#6b7280"
                            }}>
                                SUPER ADMIN
                            </p>
                        </div>
                    </div>

                </div>

            </div>

            {/* TITLE */}
            <div style={{marginBottom: "25px"}}>

                <h1 style={titleStyle}>
                    Welcome back, Registrar
                </h1>

                <p style={subTitle}>
                    Here is what's happening in your school today.
                </p>

            </div>

            {/* CARDS */}
            <div style={cardContainer}>

                {
                    cardData.map((item, index) => (
                        <div key={index} style={cardStyle}>

                            <div style={cardTop}>

                                <div style={iconBox}>
                                    {item.icon}
                                </div>

                                <span style={{
                                    fontSize: "14px",
                                    fontWeight: "600",
                                    color: item.extraColor
                                }}>
                                    {item.extra}
                                </span>

                            </div>

                            <p style={cardTitle}>
                                {item.title}
                            </p>

                            <h1 style={cardValue}>
                                {item.value}
                            </h1>

                        </div>
                    ))
                }

            </div>

            {/* CHART + TOP PERFORMERS */}
            <div style={middleContainer}>

                {/* ATTENDANCE TREND */}
                <div style={chartCard}>

                    <div style={sectionHeader}>
                        <h2 style={sectionTitle}>
                            Attendance Trends
                        </h2>

                        <button style={smallButton}>
                            Last 7 Days
                        </button>
                    </div>

                    <div style={chartArea}>

                        {[60,85,75,90,45,80,95].map((height,index)=>(
                            <div key={index} style={barWrapper}>

                                <div
                                    style={{
                                        ...barStyle,
                                        height:`${height}%`
                                    }}
                                ></div>

                                <span style={barLabel}>
                                    {["MON","TUE","WED","THU","FRI","SAT","SUN"][index]}
                                </span>

                            </div>
                        ))}

                    </div>

                </div>

                {/* TOP PERFORMERS */}
                <div style={performerCard}>

                    <h2 style={sectionTitle}>
                        Top Performers
                    </h2>

                    {
                        [
                            {name:"Class 10-A",percent:"98%"},
                            {name:"Class 08-C",percent:"94%"},
                            {name:"Class 12-B",percent:"91%"}
                        ].map((item,index)=>(
                            <div key={index} style={{marginBottom:"25px"}}>

                                <div style={performerTop}>
                                    <div style={circleAvatar}>
                                        {String.fromCharCode(65 + index)}
                                    </div>

                                    <div style={{flex:1}}>
                                        <div style={performerRow}>
                                            <span>{item.name}</span>
                                            <span>{item.percent}</span>
                                        </div>

                                        <div style={progressBg}>
                                            <div
                                                style={{
                                                    ...progressFill,
                                                    width:item.percent
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        ))
                    }

                    <button style={viewButton}>
                        View All Classes
                    </button>

                </div>

            </div>

            {/* RECENT ATTENDANCE */}
            <div style={tableCard}>

                <div style={sectionHeader}>

                    <h2 style={sectionTitle}>
                        Recent Attendance
                    </h2>

                    <div style={{display:"flex",gap:"15px"}}>
                        <Filter size={20} color="#374151" />
                        <MoreVertical size={20} color="#374151" />
                    </div>

                </div>

                <div style={{overflowX:"auto"}}>

                    <table style={tableStyle}>

                        <thead>

                        <tr>

                            <th style={thStyle}>STUDENT NAME</th>
                            <th style={thStyle}>ID NUMBER</th>
                            <th style={thStyle}>CLASS</th>
                            <th style={thStyle}>TIME</th>
                            <th style={thStyle}>STATUS</th>
                            <th style={thStyle}>ACTIONS</th>

                        </tr>

                        </thead>

                        <tbody>

                        {
                            recentAttendance.map((item,index)=>(
                                <tr key={index}>

                                    <td style={tdStyle}>

                                        <div style={studentCell}>

                                            <div style={avatarCircle}>
                                                {item.initials}
                                            </div>

                                            {item.name}

                                        </div>

                                    </td>

                                    <td style={tdStyle}>{item.id}</td>

                                    <td style={tdStyle}>{item.class}</td>

                                    <td style={tdStyle}>{item.time}</td>

                                    <td style={tdStyle}>

                                        <span style={{
                                            ...statusBadge,
                                            backgroundColor:
                                                item.status === "PRESENT"
                                                    ? "#dcfce7"
                                                    : item.status === "ABSENT"
                                                        ? "#fee2e2"
                                                        : "#fef3c7",

                                            color:
                                                item.status === "PRESENT"
                                                    ? "#166534"
                                                    : item.status === "ABSENT"
                                                        ? "#b91c1c"
                                                        : "#92400e"
                                        }}>
                                            {item.status}
                                        </span>

                                    </td>

                                    <td style={{
                                        ...tdStyle,
                                        color:"#2563eb",
                                        fontWeight:"600",
                                        cursor:"pointer"
                                    }}>
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

/* MAIN */
const mainContainer = {

    width: "calc(100% - 260px)",

    marginLeft: "260px",

    minHeight: "100vh",

    backgroundColor: "#f5f7fb",

    padding: "20px",

    boxSizing: "border-box",

    overflowX: "hidden"
};

/* HEADER */
const headerStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap"
};

const searchStyle = {
    flex: 1,
    minWidth: "220px",
    maxWidth: "420px",
    padding: "12px 18px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    outline: "none",
    fontSize: "15px",
    backgroundColor: "white"
};

const headerRight = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
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
    borderRadius: "50%",
    objectFit: "cover"
};

/* TITLE */
const titleStyle = {
    margin: 0,
    fontSize: "36px",
    fontWeight: "700",
    color: "#111827"
};

const subTitle = {
    marginTop: "8px",
    fontSize: "16px",
    color: "#6b7280"
};

/* CARDS */
const cardContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
    gap: "20px",
    width: "100%",
    marginBottom: "25px"
};

const cardStyle = {
    backgroundColor: "white",
    borderRadius: "18px",
    padding: "22px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.06)",
    border: "1px solid #e5e7eb"
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
    backgroundColor: "#eff6ff",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const cardTitle = {
    fontSize: "14px",
    color: "#6b7280",
    fontWeight: "600",
    marginBottom: "10px",
    letterSpacing: "1px"
};

const cardValue = {
    margin: 0,
    fontSize: "40px",
    fontWeight: "700",
    color: "#111827"
};

/* MIDDLE */
const middleContainer = {
    display: "grid",
    gridTemplateColumns: "2fr 1fr",
    gap: "20px",
    marginBottom: "25px"
};

const chartCard = {
    backgroundColor: "white",
    borderRadius: "18px",
    padding: "25px",
    border: "1px solid #e5e7eb"
};

const performerCard = {
    backgroundColor: "white",
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
    fontSize: "28px",
    fontWeight: "700",
    color: "#111827"
};

const smallButton = {
    padding: "8px 14px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#f3f4f6",
    cursor: "pointer"
};

const chartArea = {
    height: "300px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "space-between",
    gap: "14px",
    backgroundColor: "#f9fafb",
    borderRadius: "14px",
    padding: "20px"
};

const barWrapper = {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    height: "100%"
};

const barStyle = {
    width: "100%",
    maxWidth: "40px",
    backgroundColor: "#2563eb",
    borderRadius: "10px 10px 0 0"
};

const barLabel = {
    marginTop: "10px",
    fontSize: "13px",
    fontWeight: "600"
};

/* PERFORMER */
const performerTop = {
    display: "flex",
    alignItems: "center",
    gap: "15px"
};

const circleAvatar = {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    backgroundColor: "#dbeafe",
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
    backgroundColor: "#e5e7eb",
    borderRadius: "10px"
};

const progressFill = {
    height: "100%",
    backgroundColor: "#2563eb",
    borderRadius: "10px"
};

const viewButton = {
    width: "100%",
    padding: "12px",
    borderRadius: "12px",
    border: "1px solid #2563eb",
    backgroundColor: "white",
    color: "#2563eb",
    fontWeight: "600",
    cursor: "pointer"
};

/* TABLE */
const tableCard = {
    backgroundColor: "white",
    borderRadius: "18px",
    padding: "25px",
    border: "1px solid #e5e7eb"
};

const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "700px"
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
    backgroundColor: "#dbeafe",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    color: "#2563eb"
};

const statusBadge = {
    padding: "6px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "700"
};

export default Dashboard;