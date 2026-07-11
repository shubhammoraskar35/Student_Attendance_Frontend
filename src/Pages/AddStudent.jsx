import {
    UserPlus,
    Camera,
    PlusCircle,
    Save,
    BarChart3,
    BadgeCheck,
    BriefcaseBusiness
} from "lucide-react";
import {useState} from "react";
import axios from "axios";

function AddStudent() {

    const [Student, setStudent] = useState({
        "name":"",
        "email":"",
        "mobileNo":"",
        "rollNo":"",
        "year":"",
        "tread":""
    });


    const handleChange =(e)=>{
        setStudent({
            ...Student,
            [e.target.name]:e.target.value
        });
    };

    
    const handleSubmit =async (e)=>{
        try {
            // const responce =await axios.post("http://localhost:8080/student/create-student",Student);
            const responce =await axios.post("https://student-attendance-4ax6.onrender.com/student/create-student",Student);

            console.log(responce.data);
            // setStudent(responce.data);
            alert("Student Added Successfully ");
            
        }catch (e) {
            console.log("Something Wents Wrong ");
            alert("Something Wents Wrong ");
        }
    };

    return (

        <div style={mainContainer}>

            {/* TOP HEADER */}

            <div style={headerContainer}>

                <div>

                    <h1 style={heading}>
                        Add New Student
                    </h1>

                    <p style={subHeading}>
                        Register a new student into the school management system.
                    </p>

                </div>

                <div style={breadcrumb}>

                    <span>Dashboard</span>

                    <span>›</span>

                    <span>Students</span>

                    <span>›</span>

                    <span style={{ color: "#2563eb", fontWeight: "600" }}>
                        Add Student
                    </span>

                </div>

            </div>

            {/* FORM CARD */}

            <div style={cardContainer}>

                {/* CARD HEADER */}

                <div style={cardHeader}>

                    <div style={titleContainer}>

                        <div style={iconBox}>
                            <UserPlus size={26} color="#2563eb" />
                        </div>

                        <h2 style={sectionTitle}>
                            Student Information
                        </h2>

                    </div>

                    <div style={yearBadge}>
                        Academic Year 2025-26
                    </div>

                </div>

                {/* CARD BODY */}

                <div style={cardBody}>

                    {/* PHOTO SECTION */}

                    <div style={photoSection}>

                        <div style={photoWrapper}>

                            <img
                                src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                                alt="student"
                                style={studentImage}
                            />

                            <div style={cameraButton}>
                                <Camera size={18} color="white" />
                            </div>

                        </div>

                        <div>

                            <h3 style={{ marginBottom: "5px" }}>
                                Upload Student Photo
                            </h3>

                            <p style={{ color: "gray" }}>
                                PNG or JPG up to 2MB. 400x400px recommended.
                            </p>

                        </div>

                    </div>

                    {/* FORM */}

                    <div style={formGrid}>

                        {/* NAME */}

                        <div style={inputGroup}>

                            <label style={label}>
                                Full Name *
                            </label>

                            <input

                                type="text"
                                placeholder="Enter Student Name"
                                style={inputStyle}
                                name="name"
                                onChange={handleChange}
                            />

                        </div>

                        {/* EMAIL */}

                        <div style={inputGroup}>

                            <label style={label}>
                                Email Address *
                            </label>

                            <input
                                type="email"
                                placeholder="student@gmail.com"
                                style={inputStyle}
                                name="email"
                                onChange={handleChange}
                            />

                        </div>

                        {/* MOBILE */}

                        <div style={inputGroup}>

                            <label style={label}>
                                Mobile Number *
                            </label>

                            <input
                                type="text"
                                placeholder="9876543210"
                                style={inputStyle}
                                name="mobileNo"
                                onChange={handleChange}
                            />

                        </div>

                        {/* ROLL NUMBER */}

                        <div style={inputGroup}>

                            <label style={label}>
                                Roll Number *
                            </label>

                            <input
                                type="number"
                                placeholder="Enter Roll Number"
                                style={inputStyle}
                                name="rollNo"
                                onChange={handleChange}
                            />

                        </div>

                        {/* TREAD */}

                        <div style={inputGroup}>

                            <label style={label}>
                                Tread *
                            </label>

                            <select style={inputStyle}
                                    name="tread"
                                    onChange={handleChange}
                            >

                                <option>
                                    Select Tread
                                </option>

                                <option>
                                    Computer Engineering
                                </option>

                                <option>
                                    Information Technology
                                </option>

                                <option>
                                    Mechanical Engineering
                                </option>

                                <option>
                                    Civil Engineering
                                </option>

                                <option>
                                    Electronics Engineering
                                </option>

                            </select>

                        </div>

                        {/* YEAR */}

                        <div style={inputGroup}>

                            <label style={label}>
                                Year *
                            </label>

                            <select style={inputStyle}
                                    name="year"
                                    onChange={handleChange}
                            >

                                <option>
                                    Select Year
                                </option>

                                <option>
                                    First Year
                                </option>

                                <option>
                                    Second Year
                                </option>

                                <option>
                                    Third Year
                                </option>

                                <option>
                                    Final Year
                                </option>

                            </select>

                        </div>

                    </div>


                    {/* GUARDIAN */}

                    <div style={guardianContainer}>

                        <PlusCircle size={20} color="#2563eb" />

                        <span style={guardianText}>
                            Add Guardian or Emergency Contact Details
                        </span>

                    </div>

                    {/* BUTTONS */}

                    <div style={buttonContainer}>

                        <button style={resetButton}>
                            Reset
                        </button>

                        <button style={saveButton}
                                onClick={handleSubmit}
                        >

                            <Save size={18} />

                            Save Student Record

                        </button>

                    </div>

                </div>

            </div>

            {/* BOTTOM CARDS */}

            <div style={bottomCards}>

                <div style={smallCard}>

                    <div style={smallIcon}>
                        <BarChart3 size={24} color="#2563eb" />
                    </div>

                    <div>

                        <p style={smallTitle}>
                            TOTAL ENROLLED
                        </p>

                        <h1 style={smallValue}>
                            1,248
                        </h1>

                    </div>

                </div>

                <div style={smallCard}>

                    <div style={smallIcon}>
                        <BadgeCheck size={24} color="#059669" />
                    </div>

                    <div>

                        <p style={smallTitle}>
                            VALIDATED
                        </p>

                        <h1 style={smallValue}>
                            98%
                        </h1>

                    </div>

                </div>

                <div style={smallCard}>

                    <div style={smallIcon}>
                        <BriefcaseBusiness size={24} color="#ea580c" />
                    </div>

                    <div>

                        <p style={smallTitle}>
                            PROCESSING
                        </p>

                        <h1 style={smallValue}>
                            12
                        </h1>

                    </div>

                </div>

            </div>

        </div>
    );
}

/* MAIN */

const mainContainer = {

    padding: "25px",

    marginLeft: "260px",

    backgroundColor: "#f5f7fb",

    minHeight: "100vh",

    width: "calc(100% - 260px)",

    boxSizing: "border-box",

    overflowX: "hidden"
};

/* HEADER */

const headerContainer = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px"
};

const heading = {
    margin: 0,
    fontSize: "38px",
    color: "#111827"
};

const subHeading = {
    color: "gray",
    marginTop: "10px"
};

const breadcrumb = {
    display: "flex",
    gap: "10px",
    fontSize: "15px",
    color: "#555",
    flexWrap: "wrap"
};

/* CARD */

const cardContainer = {
    backgroundColor: "white",
    borderRadius: "20px",
    marginTop: "25px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
};

const cardHeader = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "15px",
    padding: "25px",
    borderBottom: "1px solid #eee"
};

const titleContainer = {
    display: "flex",
    alignItems: "center",
    gap: "15px"
};

const iconBox = {
    width: "60px",
    height: "60px",
    backgroundColor: "#dbeafe",
    borderRadius: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

const sectionTitle = {
    margin: 0,
    fontSize: "30px",
    color: "#111827"
};

const yearBadge = {
    backgroundColor: "#dbeafe",
    color: "#2563eb",
    padding: "10px 18px",
    borderRadius: "30px",
    fontWeight: "600"
};

/* BODY */

const cardBody = {
    padding: "30px"
};

/* PHOTO */

const photoSection = {
    display: "flex",
    alignItems: "center",
    gap: "25px",
    flexWrap: "wrap"
};

const photoWrapper = {
    position: "relative"
};

const studentImage = {
    width: "110px",
    height: "110px",
    borderRadius: "50%",
    border: "4px dashed #cbd5e1",
    padding: "5px",
    objectFit: "cover"
};

const cameraButton = {
    position: "absolute",
    right: "0",
    bottom: "0",
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    backgroundColor: "#2563eb",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer"
};

/* FORM */

const formGrid = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "25px",
    marginTop: "35px"
};

const inputGroup = {
    display: "flex",
    flexDirection: "column"
};

const label = {
    marginBottom: "10px",
    fontWeight: "600",
    color: "#374151"
};

const inputStyle = {
    padding: "15px",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    outline: "none",
    fontSize: "15px",
    backgroundColor: "white"
};

const textareaStyle = {
    width: "100%",
    padding: "15px",
    borderRadius: "12px",
    border: "1px solid #d1d5db",
    outline: "none",
    resize: "none",
    fontSize: "15px",
    marginTop: "10px",
    boxSizing: "border-box"
};

/* GUARDIAN */

const guardianContainer = {
    marginTop: "30px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    color: "#2563eb",
    fontWeight: "600",
    flexWrap: "wrap"
};

const guardianText = {
    fontSize: "15px"
};

/* BUTTONS */

const buttonContainer = {
    marginTop: "40px",
    display: "flex",
    justifyContent: "flex-end",
    gap: "20px",
    flexWrap: "wrap"
};

const resetButton = {
    padding: "14px 28px",
    borderRadius: "12px",
    border: "1px solid #2563eb",
    backgroundColor: "white",
    color: "#2563eb",
    cursor: "pointer",
    fontWeight: "600"
};

const saveButton = {
    padding: "14px 28px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#2563eb",
    color: "white",
    cursor: "pointer",
    fontWeight: "600",
    display: "flex",
    alignItems: "center",
    gap: "10px"
};

/* BOTTOM CARDS */

const bottomCards = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: "20px",
    marginTop: "25px"
};

const smallCard = {
    backgroundColor: "white",
    borderRadius: "18px",
    padding: "25px",
    display: "flex",
    alignItems: "center",
    gap: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)"
};

const smallIcon = {
    width: "60px",
    height: "60px",
    backgroundColor: "#eef2ff",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
};

const smallTitle = {
    margin: 0,
    color: "gray",
    fontSize: "14px"
};

const smallValue = {
    margin: "5px 0 0",
    fontSize: "40px",
    color: "#111827"
};

export default AddStudent;