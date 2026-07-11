import {
    Search,
    Bell,
    Settings,
    Download,
    UserPlus,
    ChevronLeft,
    ChevronRight
} from "lucide-react";
import axios from "axios";
import {useEffect, useState} from "react";

function Students() {

    const [totalStudent, setTotalStudent] = useState(0);

    const fetchTotalStudent =async ()=>{
        try {

            // const responce=await axios.get("http://localhost:8080/student/get-total-student");
            const responce=await axios.get("https://student-attendance-4ax6.onrender.com/student/get-total-student");

            console.log(responce.data);
            setTotalStudent(responce.data);

        }catch (e) {
                console.log("Something Wents Wrong ");
        }
    }


    const [getStudent, setGetStudent] = useState([]);

    const fetchAllStudents =async ()=>{
        try {
                // const responce=await axios.get("http://localhost:8080/student/get-all-student");
            const responce=await axios.get("https://student-attendance-4ax6.onrender.com/student/get-all-student");

            console.log(responce.data);
                setGetStudent(responce.data);
        }catch (e) {
            console.log("Something Wents Wrong ")
            alert("Something Wents Wrong");
        }
    };

    useEffect(() => {
        fetchAllStudents();
        fetchTotalStudent();
    }, []);


    return (
        <div style={container}>

            {/* TOP BAR */}

            <div style={topBar}>

                <div style={searchBox}>
                    <Search size={18} color="#666" />
                    <input
                        type="text"
                        placeholder="Search students, IDs or courses..."
                        style={searchInput}
                    />
                </div>

                <div style={topRight}>

                    <Bell size={22} color="#1f2937" />
                    <Settings size={22} color="#1f2937" />

                    <div style={profileBox}>
                        <div>
                            <div style={profileTitle}>Admin Profile</div>
                            <div style={profileSub}>SUPER ADMIN</div>
                        </div>

                        <img
                            src="https://i.pravatar.cc/100"
                            alt="profile"
                            style={profileImage}
                        />
                    </div>

                </div>

            </div>

            {/* PAGE TITLE */}

            <div style={headerSection}>

                <div>
                    <div style={breadcrumb}>
                        Dashboard &nbsp; &gt; &nbsp;
                        <span style={{color:"#2563eb"}}>Students</span>
                    </div>

                    <h1 style={pageTitle}>Student Directory</h1>
                </div>

                <div style={headerButtons}>

                    <button style={exportBtn}>
                        <Download size={16} />
                        Export CSV
                    </button>

                    <button style={addBtn}>
                        <UserPlus size={16} />
                        Add Student
                    </button>

                </div>

            </div>

            {/* CARDS */}

            <div style={cardContainer}>

                <div style={card}>
                    <div style={cardTop}>
                        <div style={iconBoxBlue}>👥</div>
                        <div style={badgeBlue}>+12%</div>
                    </div>

                    <p style={cardLabel}>Total Students</p>
                    <h1 style={cardValue}>{totalStudent}</h1>
                </div>

                <div style={card}>
                    <div style={cardTop}>
                        <div style={iconBoxOrange}>🎓</div>
                        <div style={badgeGray}>Active</div>
                    </div>

                    <p style={cardLabel}>Active Courses</p>
                    <h1 style={cardValue}>42</h1>
                </div>

                <div style={card}>
                    <div style={cardTop}>
                        <div style={iconBoxBlue}>📈</div>
                        <div style={badgeBlue}>94%</div>
                    </div>

                    <p style={cardLabel}>Avg. Attendance</p>
                    <h1 style={cardValue}>94.2%</h1>
                </div>

                <div style={card}>
                    <div style={cardTop}>
                        <div style={iconBoxRed}>📋</div>
                        <div style={badgeRed}>High</div>
                    </div>

                    <p style={cardLabel}>Late Submissions</p>
                    <h1 style={cardValue}>156</h1>
                </div>

            </div>

            {/* TABLE */}

            <div style={tableCard}>

                <div style={tableHeader}>

                    <h2 style={{margin:0}}>Student Listing</h2>

                    <button style={sortBtn}>
                        Sort by: Newest
                    </button>

                </div>

                <div style={tableWrapper}>

                    <table style={table}>

                        <thead>

                        <tr style={tableHeadRow}>
                            <th style={th}>ID</th>
                            <th style={th}>STUDENT NAME</th>
                            <th style={th}>EMAIL</th>
                            <th style={th}>RollNo</th>
                            <th style={th}>MOBILE</th>
                            <th style={th}>Course</th>
                            <th style={th}>Year</th>
                        </tr>

                        </thead>

                        <tbody>
                        {
                            getStudent.map((item,index)=>(
                                <tr key={index}>
                                    <td style={td}>{item.id}</td>
                                    <td style={td}>{item.name}</td>
                                    <td style={td}>{item.email}</td>
                                    <td style={td}>{item.rollNo}</td>
                                    <td style={td}>{item.mobileNo}</td>
                                    <td style={td}>{item.tread}</td>
                                    <td style={td}>{item.year}</td>
                                </tr>
                            ))
                        }
                        </tbody>


                    </table>

                </div>

                {/* PAGINATION */}

                <div style={pagination}>

                    <p style={{margin:0,color:"#555"}}>
                        Showing 5 of 2,482 students
                    </p>

                    <div style={paginationBtns}>

                        <button style={pageBtn}>
                            <ChevronLeft size={16}/>
                        </button>

                        <button style={activePageBtn}>1</button>
                        <button style={pageBtn}>2</button>
                        <button style={pageBtn}>3</button>

                        <button style={pageBtn}>
                            <ChevronRight size={16}/>
                        </button>

                    </div>

                </div>

            </div>

        </div>
    );
}

const container = {
    marginLeft: "260px",
    padding: "20px",
    background: "#f5f7fb",
    minHeight: "100vh",
    fontFamily: "Arial"
};

const topBar = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px",
    marginBottom: "20px"
};

const searchBox = {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    background: "white",
    padding: "12px 15px",
    borderRadius: "12px",
    width: "350px",
    maxWidth: "100%"
};

const searchInput = {
    border: "none",
    outline: "none",
    width: "100%",
    fontSize: "14px",
    background: "transparent"
};

const topRight = {
    display: "flex",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap"
};

const profileBox = {
    display: "flex",
    alignItems: "center",
    gap: "10px"
};

const profileTitle = {
    fontWeight: "700",
    fontSize: "14px"
};

const profileSub = {
    fontSize: "11px",
    color: "#666"
};

const profileImage = {
    width: "45px",
    height: "45px",
    borderRadius: "50%"
};

const headerSection = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px",
    marginBottom: "25px"
};

const breadcrumb = {
    fontSize: "13px",
    color: "#666",
    marginBottom: "5px"
};

const pageTitle = {
    margin: 0,
    fontSize: "42px",
    fontWeight: "700",
    color: "#111827"
};

const headerButtons = {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap"
};

const exportBtn = {
    padding: "12px 18px",
    border: "1px solid #d1d5db",
    borderRadius: "10px",
    background: "white",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "600"
};

const addBtn = {
    padding: "12px 18px",
    border: "none",
    borderRadius: "10px",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    fontWeight: "600"
};

const cardContainer = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: "20px",
    marginBottom: "25px"
};

const card = {
    background: "white",
    borderRadius: "18px",
    padding: "22px",
    border: "1px solid #e5e7eb"
};

const cardTop = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px"
};

const iconBoxBlue = {
    width: "50px",
    height: "50px",
    borderRadius: "12px",
    background: "#dbeafe",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px"
};

const iconBoxOrange = {
    width: "50px",
    height: "50px",
    borderRadius: "12px",
    background: "#ffedd5",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px"
};

const iconBoxRed = {
    width: "50px",
    height: "50px",
    borderRadius: "12px",
    background: "#fee2e2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "22px"
};

const badgeBlue = {
    background: "#dbeafe",
    color: "#2563eb",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600"
};

const badgeGray = {
    background: "#f3f4f6",
    color: "#555",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600"
};

const badgeRed = {
    background: "#fee2e2",
    color: "#dc2626",
    padding: "6px 10px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600"
};

const cardLabel = {
    margin: "0 0 10px 0",
    color: "#6b7280",
    fontSize: "14px"
};

const cardValue = {
    margin: 0,
    fontSize: "42px",
    fontWeight: "700"
};

const tableCard = {
    background: "white",
    borderRadius: "18px",
    overflow: "hidden",
    border: "1px solid #e5e7eb"
};

const tableHeader = {
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "10px",
    borderBottom: "1px solid #e5e7eb"
};

const sortBtn = {
    padding: "10px 15px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    background: "white",
    cursor: "pointer"
};

const tableWrapper = {
    overflowX: "auto"
};

const table = {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "1000px"
};

const tableHeadRow = {
    background: "#f9fafb"
};

const th = {
    padding: "18px",
    textAlign: "left",
    fontSize: "13px",
    color: "#6b7280"
};

const td = {
    padding: "20px 18px",
    borderTop: "1px solid #f1f1f1",
    fontSize: "14px",
    color: "#111827"
};

const tr = {
    background: "white"
};

const studentBox = {
    display: "flex",
    alignItems: "center",
    gap: "12px"
};

const avatar = {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#dbeafe",
    color: "#2563eb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700"
};

const courseBadge = {
    background: "#dbeafe",
    color: "#2563eb",
    padding: "8px 12px",
    borderRadius: "20px",
    fontSize: "12px",
    fontWeight: "600"
};

const viewBtn = {
    padding: "10px 16px",
    border: "none",
    borderRadius: "8px",
    background: "#2563eb",
    color: "white",
    cursor: "pointer"
};

const pagination = {
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px"
};

const paginationBtns = {
    display: "flex",
    gap: "8px"
};

const pageBtn = {
    width: "38px",
    height: "38px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    background: "white",
    cursor: "pointer"
};

const activePageBtn = {
    width: "38px",
    height: "38px",
    borderRadius: "10px",
    border: "none",
    background: "#2563eb",
    color: "white",
    cursor: "pointer",
    fontWeight: "700"
};

export default Students;