import {
    Bell,
    Settings,
    Search,
    Download,
    Filter,
    Lightbulb,
    AlertTriangle
} from "lucide-react";

function Reports() {

    const students = [
        {
            id: "#1029",
            name: "Arjun Jaiswal",
            course: "Computer Science",
            status: "REGULAR",
            present: 21,
            absent: 0,
            late: 1,
            leave: 0,
            percentage: "95.4%"
        },
        {
            id: "#1030",
            name: "Beatrix Thorne",
            course: "Physics Major",
            status: "AT RISK",
            present: 16,
            absent: 5,
            late: 1,
            leave: 0,
            percentage: "72.7%"
        },
        {
            id: "#1031",
            name: "Caleb Liao",
            course: "Mathematics",
            status: "CRITICAL",
            present: 10,
            absent: 12,
            late: 0,
            leave: 0,
            percentage: "45.4%"
        },
        {
            id: "#1032",
            name: "Dana Rivers",
            course: "Computer Science",
            status: "REGULAR",
            present: 22,
            absent: 0,
            late: 0,
            leave: 0,
            percentage: "100%"
        }
    ];

    return (

        <div
            style={{
                background: "#f5f7fb",
                minHeight: "100vh",
                marginLeft: "260px",
                width: "calc(100% - 260px)",
                overflowX: "hidden",
                boxSizing: "border-box"
            }}
        >

            {/* HEADER */}

            <div
                style={{
                    background: "white",
                    padding: "18px 30px",
                    borderBottom: "1px solid #dfe3eb",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "20px"
                }}
            >

                {/* SEARCH */}

                <div
                    style={{
                        background: "#f3f4f6",
                        borderRadius: "12px",
                        padding: "12px 18px",
                        width: "420px",
                        maxWidth: "100%",
                        display: "flex",
                        alignItems: "center",
                        gap: "12px"
                    }}
                >

                    <Search size={20} color="#6b7280" />

                    <input
                        type="text"
                        placeholder="Search students, classes, or reports..."
                        style={{
                            border: "none",
                            outline: "none",
                            background: "transparent",
                            width: "100%",
                            fontSize: "15px"
                        }}
                    />

                </div>

                {/* RIGHT */}

                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "20px",
                        flexWrap: "wrap"
                    }}
                >

                    <Bell color="#374151" />

                    <Settings color="#374151" />

                    <div
                        style={{
                            width: "1px",
                            height: "40px",
                            background: "#d1d5db"
                        }}
                    />

                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "12px"
                        }}
                    >

                        <div>
                            <h4
                                style={{
                                    margin: 0,
                                    fontSize: "15px"
                                }}
                            >
                                Admin Profile
                            </h4>

                            <p
                                style={{
                                    margin: 0,
                                    color: "#6b7280",
                                    fontSize: "13px"
                                }}
                            >
                                School Registrar
                            </p>
                        </div>

                        <img
                            src="https://i.pravatar.cc/100"
                            alt="admin"
                            style={{
                                width: "45px",
                                height: "45px",
                                borderRadius: "50%"
                            }}
                        />

                    </div>

                </div>

            </div>

            {/* MAIN */}

            <div
                style={{
                    padding: "25px"
                }}
            >

                {/* TOP TEXT */}

                <p
                    style={{
                        color: "#6b7280",
                        marginBottom: "5px"
                    }}
                >
                    Dashboard / Attendance Reports
                </p>

                <h1
                    style={{
                        fontSize: "48px",
                        margin: 0,
                        color: "#111827"
                    }}
                >
                    Monthly Attendance Summary
                </h1>

                <p
                    style={{
                        color: "#6b7280",
                        marginTop: "10px",
                        fontSize: "17px"
                    }}
                >
                    Review student attendance consistency and performance metrics for the selected period.
                </p>

                {/* ACTION BUTTONS */}

                <div
                    style={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "15px",
                        marginTop: "20px",
                        flexWrap: "wrap"
                    }}
                >

                    <button style={exportBtn}>
                        <Download size={18} />
                        Export PDF
                    </button>

                    <button style={exportBtn}>
                        <Download size={18} />
                        Export Excel
                    </button>

                </div>

                {/* STATS */}

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
                        gap: "20px",
                        marginTop: "25px"
                    }}
                >

                    <div style={cardStyle}>

                        <p style={cardTitle}>
                            OVERALL ATTENDANCE
                        </p>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                            }}
                        >

                            <h1 style={blueText}>
                                94.2%
                            </h1>

                            <span
                                style={{
                                    color: "#dc2626",
                                    fontWeight: "600"
                                }}
                            >
                                ↘ -1.2%
                            </span>

                        </div>

                        <div style={progressBar}>
                            <div
                                style={{
                                    width: "94%",
                                    height: "100%",
                                    background: "#2563eb",
                                    borderRadius: "20px"
                                }}
                            />
                        </div>

                    </div>

                    <div style={cardStyle}>

                        <p style={cardTitle}>
                            TOTAL STUDENTS
                        </p>

                        <h1 style={blackText}>
                            1,248
                        </h1>

                        <p style={smallText}>
                            Across 42 active sections
                        </p>

                    </div>

                    <div style={cardStyle}>

                        <p style={cardTitle}>
                            ABSENTEE RATE
                        </p>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px"
                            }}
                        >

                            <h1
                                style={{
                                    color: "#dc2626",
                                    margin: 0,
                                    fontSize: "48px"
                                }}
                            >
                                3.8%
                            </h1>

                            <span
                                style={{
                                    color: "#dc2626",
                                    fontWeight: "600"
                                }}
                            >
                                ↘ -0.5%
                            </span>

                        </div>

                        <div style={progressBar}>
                            <div
                                style={{
                                    width: "15%",
                                    height: "100%",
                                    background: "#dc2626",
                                    borderRadius: "20px"
                                }}
                            />
                        </div>

                    </div>

                    <div style={cardStyle}>

                        <p style={cardTitle}>
                            AVG. PUNCTUALITY
                        </p>

                        <h1 style={blackText}>
                            8:05 AM
                        </h1>

                        <p style={smallText}>
                            Standard start time: 8:15 AM
                        </p>

                    </div>

                </div>

                {/* FILTERS */}

                <div
                    style={{
                        marginTop: "30px",
                        background: "white",
                        borderRadius: "18px",
                        border: "1px solid #dfe3eb",
                        padding: "20px",
                        display: "flex",
                        gap: "20px",
                        flexWrap: "wrap",
                        alignItems: "center"
                    }}
                >

                    <div
                        style={{
                            flex: 1,
                            minWidth: "250px",
                            background: "#f3f4f6",
                            borderRadius: "10px",
                            padding: "12px 15px",
                            display: "flex",
                            alignItems: "center",
                            gap: "10px"
                        }}
                    >

                        <Search size={18} color="#6b7280" />

                        <input
                            type="text"
                            placeholder="Filter by student name or ID..."
                            style={{
                                border: "none",
                                outline: "none",
                                background: "transparent",
                                width: "100%"
                            }}
                        />

                    </div>

                    <select style={selectStyle}>
                        <option>October 2023</option>
                        <option>November 2023</option>
                    </select>

                    <select style={selectStyle}>
                        <option>Grade 10 - Section A</option>
                        <option>Grade 11 - Section B</option>
                    </select>

                    <button
                        style={{
                            background: "#dbeafe",
                            color: "#2563eb",
                            border: "none",
                            padding: "12px 22px",
                            borderRadius: "10px",
                            cursor: "pointer",
                            fontWeight: "600",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px"
                        }}
                    >

                        <Filter size={18} />

                        Apply Filters

                    </button>

                </div>

                {/* TABLE */}

                <div
                    style={{
                        marginTop: "30px",
                        background: "white",
                        borderRadius: "18px",
                        overflowX: "auto",
                        border: "1px solid #dfe3eb"
                    }}
                >

                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            minWidth: "1000px"
                        }}
                    >

                        <thead
                            style={{
                                background: "#f3f4f6"
                            }}
                        >

                        <tr>

                            <th style={thStyle}>ID</th>
                            <th style={thStyle}>STUDENT NAME</th>
                            <th style={thStyle}>STATUS</th>
                            <th style={thStyle}>PRESENT</th>
                            <th style={thStyle}>ABSENT</th>
                            <th style={thStyle}>LATE</th>
                            <th style={thStyle}>LEAVE</th>
                            <th style={thStyle}>PERCENTAGE</th>

                        </tr>

                        </thead>

                        <tbody>

                        {
                            students.map((item, index) => (

                                <tr
                                    key={index}
                                    style={{
                                        borderTop: "1px solid #e5e7eb"
                                    }}
                                >

                                    <td style={tdStyle}>
                                        {item.id}
                                    </td>

                                    <td style={tdStyle}>

                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "15px"
                                            }}
                                        >

                                            <div
                                                style={{
                                                    width: "42px",
                                                    height: "42px",
                                                    borderRadius: "50%",
                                                    background: "#dbeafe",
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    alignItems: "center",
                                                    fontWeight: "700",
                                                    color: "#2563eb"
                                                }}
                                            >
                                                {item.name.charAt(0)}
                                            </div>

                                            <div>

                                                <h4
                                                    style={{
                                                        margin: 0
                                                    }}
                                                >
                                                    {item.name}
                                                </h4>

                                                <p
                                                    style={{
                                                        margin: 0,
                                                        color: "#6b7280",
                                                        fontSize: "13px"
                                                    }}
                                                >
                                                    {item.course}
                                                </p>

                                            </div>

                                        </div>

                                    </td>

                                    <td style={tdStyle}>

                                        <span
                                            style={{
                                                padding: "6px 14px",
                                                borderRadius: "20px",
                                                fontSize: "12px",
                                                fontWeight: "700",
                                                background:
                                                    item.status === "REGULAR"
                                                        ? "#dcfce7"
                                                        : item.status === "AT RISK"
                                                            ? "#fef3c7"
                                                            : "#fee2e2",
                                                color:
                                                    item.status === "REGULAR"
                                                        ? "#15803d"
                                                        : item.status === "AT RISK"
                                                            ? "#b45309"
                                                            : "#dc2626"
                                            }}
                                        >
                                            ● {item.status}
                                        </span>

                                    </td>

                                    <td style={tdStyle}>
                                        {item.present}
                                    </td>

                                    <td style={tdStyle}>
                                        {item.absent}
                                    </td>

                                    <td style={tdStyle}>
                                        {item.late}
                                    </td>

                                    <td style={tdStyle}>
                                        {item.leave}
                                    </td>

                                    <td style={tdStyle}>

                                        <div
                                            style={{
                                                display: "flex",
                                                alignItems: "center",
                                                gap: "10px"
                                            }}
                                        >

                                            <strong
                                                style={{
                                                    color:
                                                        item.percentage === "45.4%"
                                                            ? "#dc2626"
                                                            : "#111827"
                                                }}
                                            >
                                                {item.percentage}
                                            </strong>

                                            <div
                                                style={{
                                                    width: "80px",
                                                    height: "5px",
                                                    background: "#e5e7eb",
                                                    borderRadius: "10px"
                                                }}
                                            >

                                                <div
                                                    style={{
                                                        width: item.percentage,
                                                        height: "100%",
                                                        background:
                                                            item.percentage === "45.4%"
                                                                ? "#dc2626"
                                                                : "#2563eb",
                                                        borderRadius: "10px"
                                                    }}
                                                />

                                            </div>

                                        </div>

                                    </td>

                                </tr>

                            ))
                        }

                        </tbody>

                    </table>

                    {/* FOOTER */}

                    <div
                        style={{
                            padding: "20px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexWrap: "wrap",
                            gap: "20px"
                        }}
                    >

                        <p
                            style={{
                                margin: 0,
                                color: "#4b5563"
                            }}
                        >
                            Showing 1-10 of 1,248 students
                        </p>

                        <div
                            style={{
                                display: "flex",
                                gap: "10px",
                                alignItems: "center"
                            }}
                        >

                            <button style={pageBtn}>
                                ‹
                            </button>

                            <button
                                style={{
                                    ...pageBtn,
                                    background: "#2563eb",
                                    color: "white"
                                }}
                            >
                                1
                            </button>

                            <button style={pageBtn}>
                                2
                            </button>

                            <button style={pageBtn}>
                                3
                            </button>

                            <span>...</span>

                            <button style={pageBtn}>
                                125
                            </button>

                            <button style={pageBtn}>
                                ›
                            </button>

                        </div>

                    </div>

                </div>

                {/* BOTTOM SECTION */}

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "2fr 1fr",
                        gap: "20px",
                        marginTop: "30px"
                    }}
                >

                    {/* CHART */}

                    <div
                        style={{
                            background: "white",
                            borderRadius: "18px",
                            border: "1px solid #dfe3eb",
                            padding: "25px",
                            minHeight: "350px"
                        }}
                    >

                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                flexWrap: "wrap",
                                gap: "20px"
                            }}
                        >

                            <h2
                                style={{
                                    margin: 0
                                }}
                            >
                                Attendance Trend (Current Semester)
                            </h2>

                            <div
                                style={{
                                    display: "flex",
                                    gap: "20px"
                                }}
                            >

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    }}
                                >

                                    <div
                                        style={{
                                            width: "10px",
                                            height: "10px",
                                            borderRadius: "50%",
                                            background: "#2563eb"
                                        }}
                                    />

                                    <span>Present</span>

                                </div>

                                <div
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "8px"
                                    }}
                                >

                                    <div
                                        style={{
                                            width: "10px",
                                            height: "10px",
                                            borderRadius: "50%",
                                            background: "#dc2626"
                                        }}
                                    />

                                    <span>Absent</span>

                                </div>

                            </div>

                        </div>

                        {/* GRAPH */}

                        <div
                            style={{
                                marginTop: "50px",
                                height: "220px",
                                display: "flex",
                                justifyContent: "space-around",
                                alignItems: "flex-end"
                            }}
                        >

                            {
                                [60, 110, 170, 140].map((height, index) => (

                                    <div
                                        key={index}
                                        style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "center",
                                            gap: "15px"
                                        }}
                                    >

                                        <div
                                            style={{
                                                width: "50px",
                                                height: `${height}px`,
                                                background: "#2563eb",
                                                borderRadius: "12px 12px 0 0"
                                            }}
                                        />

                                        <span
                                            style={{
                                                color: "#6b7280",
                                                fontWeight: "600"
                                            }}
                                        >
                                            {
                                                ["AUG", "SEP", "OCT", "NOV"][index]
                                            }
                                        </span>

                                    </div>

                                ))
                            }

                        </div>

                    </div>

                    {/* INSIGHTS */}

                    <div
                        style={{
                            background: "white",
                            borderRadius: "18px",
                            border: "1px solid #dfe3eb",
                            padding: "25px"
                        }}
                    >

                        <h2
                            style={{
                                marginTop: 0
                            }}
                        >
                            Quick Insights
                        </h2>

                        <div
                            style={{
                                marginTop: "25px",
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px"
                            }}
                        >

                            <div style={insightCard}>

                                <Lightbulb color="#2563eb" />

                                <div>

                                    <h4
                                        style={{
                                            margin: 0
                                        }}
                                    >
                                        Peak Absence Day
                                    </h4>

                                    <p
                                        style={{
                                            marginTop: "8px",
                                            color: "#6b7280",
                                            fontSize: "14px"
                                        }}
                                    >
                                        Mondays show a 4% higher absence rate than the weekly average.
                                    </p>

                                </div>

                            </div>

                            <div style={insightCard}>

                                <AlertTriangle color="#dc2626" />

                                <div>

                                    <h4
                                        style={{
                                            margin: 0
                                        }}
                                    >
                                        Declining Punctuality
                                    </h4>

                                    <p
                                        style={{
                                            marginTop: "8px",
                                            color: "#6b7280",
                                            fontSize: "14px"
                                        }}
                                    >
                                        Grade 11-B lateness increased by 12% this month.
                                    </p>

                                </div>

                            </div>

                        </div>

                        <button
                            style={{
                                width: "100%",
                                marginTop: "30px",
                                padding: "15px",
                                borderRadius: "12px",
                                border: "2px solid #2563eb",
                                background: "white",
                                color: "#2563eb",
                                fontWeight: "700",
                                cursor: "pointer",
                                fontSize: "15px"
                            }}
                        >
                            View Detailed Analytics
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );
}

/* STYLES */

const cardStyle = {
    background: "white",
    borderRadius: "18px",
    border: "1px solid #dfe3eb",
    padding: "25px"
};

const cardTitle = {
    color: "#6b7280",
    fontWeight: "700",
    fontSize: "13px",
    letterSpacing: "1px"
};

const blueText = {
    color: "#2563eb",
    margin: 0,
    fontSize: "48px"
};

const blackText = {
    color: "#111827",
    margin: 0,
    fontSize: "48px"
};

const smallText = {
    color: "#6b7280",
    marginTop: "12px",
    fontSize: "14px"
};

const progressBar = {
    width: "100%",
    height: "6px",
    background: "#e5e7eb",
    borderRadius: "20px",
    marginTop: "18px"
};

const exportBtn = {
    padding: "12px 20px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    background: "white",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    fontWeight: "600"
};

const selectStyle = {
    padding: "12px 16px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    outline: "none",
    fontSize: "14px"
};

const thStyle = {
    padding: "20px",
    textAlign: "left",
    color: "#374151",
    fontSize: "14px"
};

const tdStyle = {
    padding: "20px",
    color: "#111827",
    fontSize: "15px"
};

const pageBtn = {
    width: "38px",
    height: "38px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    background: "white",
    cursor: "pointer",
    fontWeight: "600"
};

const insightCard = {
    background: "#f9fafb",
    border: "1px solid #e5e7eb",
    borderRadius: "14px",
    padding: "18px",
    display: "flex",
    gap: "15px",
    alignItems: "flex-start"
};

export default Reports;