import {useEffect, useState} from "react";
import {
    Bell,
    Settings,
    Check,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import axios from "axios";

function Attendance() {

    const [getStudent, setGetStudent] = useState([]);

    // const fetchAllStudents =async ()=>{
    //     try {
    //         const responce=await axios.get("http://localhost:8080/student/get-all-student");
    //         console.log(responce.data);
    //         setGetStudent(responce.data);
    //     }catch (e) {
    //         console.log("Something Wents Wrong ")
    //         alert("Something Wents Wrong");
    //     }
    // };

    const fetchAllStudents = async () => {
        try {
            const response = await axios.get(
                "http://localhost:8080/student/get-all-student"
            );

            const updatedStudents = response.data.map(student => ({
                ...student,
                status: "Present"
            }));

            setGetStudent(updatedStudents);

        } catch (e) {
            console.log(e);
        }
    };


    useEffect(() => {
        fetchAllStudents();
    }, []);

    const handleStatus = (index, status) => {

        const updatedStudents = [...getStudent];

        updatedStudents[index].status = status;

        setGetStudent(updatedStudents);
    };

    // TODAY DATE

    const todayDate = new Date().toISOString().split("T")[0];


    const submitAttendance = async () => {

        try {

            const attendanceData = getStudent.map(student => ({

                date: todayDate,

                status: student.status,

                studentDto: {
                    id: student.id
                }

            }));

            await axios.post(
                "http://localhost:8080/attendance/save-all-attendance",
                attendanceData
            );

            alert("Attendance Saved Successfully");

        } catch (error) {

            console.log(error);

            alert("Something Went Wrong");
        }
    };


    // const presentCount = students.filter(
    //     (item) => item.status === "Present"
    // ).length;
    //
    // const absentCount = students.filter(
    //     (item) => item.status === "Absent"
    // ).length;

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

            {/* Header */}

            <div
                style={{
                    width: "100%",
                    background: "white",
                    padding: "18px 30px",
                    borderBottom: "1px solid #dfe3eb",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexWrap: "wrap",
                    gap: "15px",
                    boxSizing: "border-box"
                }}
            >

                <h1
                    style={{
                        fontSize: "34px",
                        fontWeight: "700",
                        margin: 0,
                        color: "#111827"
                    }}
                >
                    Student Attendance Management
                </h1>

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
                            <h3
                                style={{
                                    margin: 0,
                                    fontSize: "16px"
                                }}
                            >
                                Admin Profile
                            </h3>

                            <p
                                style={{
                                    margin: 0,
                                    color: "#6b7280",
                                    fontSize: "13px"
                                }}
                            >
                                REGISTRAR
                            </p>
                        </div>

                        <img
                            src="https://i.pravatar.cc/100"
                            alt="admin"
                            style={{
                                width: "50px",
                                height: "50px",
                                borderRadius: "50%"
                            }}
                        />

                    </div>

                </div>

            </div>

            {/* Main */}

            <div
                style={{
                    padding: "25px"
                }}
            >

                {/* Top Card */}

                <div
                    style={{
                        background: "white",
                        borderRadius: "18px",
                        padding: "30px",
                        border: "1px solid #dfe3eb",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "20px"
                    }}
                >

                    <div>

                        <h1
                            style={{
                                color: "#0b57d0",
                                fontSize: "52px",
                                margin: 0,
                                fontWeight: "700"
                            }}
                        >
                            Mark Attendance
                        </h1>

                        <div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginTop: "18px",
                                flexWrap: "wrap"
                            }}
                        >

                            <span
                                style={{
                                    fontSize: "18px"
                                }}
                            >
                                📅
                            </span>

                            <p
                                style={{
                                    margin: 0,
                                    fontSize: "22px",
                                    color: "#4b5563"
                                }}
                            >
                                Current Date:
                            </p>

                            <strong
                                style={{
                                    fontSize: "24px"
                                }}
                            >
                                {todayDate}
                            </strong>

                        </div>

                    </div>

                </div>

                {/* Table */}

                <div
                    style={{
                        marginTop: "30px",
                        background: "white",
                        borderRadius: "18px",
                        overflowX: "auto",
                        border: "1px solid #dfe3eb",
                        width: "100%",
                        boxSizing: "border-box"
                    }}
                >

                    <table
                        style={{
                            width: "100%",
                            borderCollapse: "collapse",
                            minWidth: "1100px"
                        }}
                    >

                        <thead
                            style={{
                                background: "#f3f4f6"
                            }}
                        >
                        <tr>

                            <th style={thStyle}>Student ID</th>

                            <th style={thStyle}>Student Name</th>

                            <th style={thStyle}>Date</th>

                            <th style={thStyle}>Status</th>


                        </tr>
                        </thead>

                        <tbody>

                        {
                            getStudent.map((item,index)=>(
                                <tr
                                    key={index}
                                    style={{
                                        borderTop: "1px solid #e5e7eb"
                                    }}
                                >

                                    <td style={tdStyle}>
                                        {item.id}
                                    </td>

                                    <td
                                        style={{
                                            ...tdStyle,
                                            fontWeight: "600",
                                            fontSize: "24px"
                                        }}
                                    >
                                        {item.name}
                                    </td>

                                    {/* DATE COLUMN */}

                                    <td style={tdStyle}>
                                        {todayDate}
                                    </td>

                                    <td style={tdStyle}>

                                        <div
                                            style={{
                                                display: "flex",
                                                gap: "30px",
                                                flexWrap: "wrap"
                                            }}
                                        >

                                            <label
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "10px",
                                                    cursor: "pointer",
                                                    fontWeight: "500"
                                                }}
                                            >

                                                <input
                                                    type="radio"
                                                    name={`status-${index}`}
                                                    checked={item.status === "Present"}
                                                    onChange={() =>
                                                        handleStatus(index, "Present")
                                                    }
                                                />

                                                Present

                                            </label>

                                            <label
                                                style={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    gap: "10px",
                                                    cursor: "pointer",
                                                    fontWeight: "500"
                                                }}
                                            >

                                                <input
                                                    type="radio"
                                                    name={`status-${index}`}
                                                    checked={item.status === "Absent"}
                                                    onChange={() =>
                                                        handleStatus(index, "Absent")
                                                    }
                                                />

                                                Absent

                                            </label>

                                        </div>

                                    </td>



                                </tr>


                            ))
                        }
                        </tbody>

                    </table>

                    {/* Footer */}

                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            padding: "25px",
                            flexWrap: "wrap",
                            gap: "20px"
                        }}
                    >

                        <p
                            style={{
                                margin: 0,
                                color: "#374151",
                                fontWeight: "500"
                            }}
                        >
                            Showing 5 of 32 Students
                        </p>

                        <div
                            style={{
                                display: "flex",
                                gap: "10px"
                            }}
                        >

                            <button style={pageBtn}>
                                <ChevronLeft size={18} />
                            </button>

                            <button
                                style={{
                                    ...pageBtn,
                                    background: "#0b57d0",
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

                            <button style={pageBtn}>
                                <ChevronRight size={18} />
                            </button>

                        </div>

                    </div>

                </div>

                {/* Bottom */}

                <div
                    style={{
                        marginTop: "30px",
                        background: "white",
                        borderRadius: "18px",
                        border: "1px solid #dfe3eb",
                        padding: "30px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        flexWrap: "wrap",
                        gap: "30px"
                    }}
                >

                    <div
                        style={{
                            display: "flex",
                            gap: "40px",
                            flexWrap: "wrap"
                        }}
                    >

                        <div>

                            <p
                                style={{
                                    margin: 0,
                                    color: "#374151",
                                    fontWeight: "600",
                                    letterSpacing: "1px"
                                }}
                            >
                                PRESENT
                            </p>

                            <h1
                                style={{
                                    color: "#0b57d0",
                                    marginTop: "10px",
                                    fontSize: "55px"
                                }}
                            >
                                {/*{String(presentCount).padStart(2, "0")}*/}
                            </h1>

                        </div>

                        <div
                            style={{
                                width: "1px",
                                background: "#d1d5db"
                            }}
                        />

                        <div>

                            <p
                                style={{
                                    margin: 0,
                                    color: "#374151",
                                    fontWeight: "600",
                                    letterSpacing: "1px"
                                }}
                            >
                                ABSENT
                            </p>

                            <h1
                                style={{
                                    color: "#dc2626",
                                    marginTop: "10px",
                                    fontSize: "55px"
                                }}
                            >
                                {/*{String(absentCount).padStart(2, "0")}*/}
                            </h1>

                        </div>

                    </div>

                    <div
                        style={{
                            display: "flex",
                            gap: "20px",
                            flexWrap: "wrap"
                        }}
                    >

                        <button
                            style={{
                                padding: "18px 45px",
                                borderRadius: "14px",
                                border: "none",
                                background: "#d1d5db",
                                fontSize: "22px",
                                fontWeight: "600",
                                cursor: "pointer"
                            }}
                        >
                            Save as Draft
                        </button>

                        <button
                            onClick={submitAttendance}
                            style={{
                                padding: "18px 45px",
                                borderRadius: "14px",
                                border: "none",
                                background: "#0b57d0",
                                color: "white"
                            }}
                        >
                            Submit Attendance
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

const thStyle = {
    padding: "22px",
    textAlign: "left",
    color: "#374151",
    fontSize: "18px"
};

const tdStyle = {
    padding: "30px 22px",
    fontSize: "22px",
    color: "#111827"
};

const pageBtn = {
    width: "45px",
    height: "45px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    background: "white",
    cursor: "pointer",
    fontWeight: "600"
};

export default Attendance;