import { useState } from "react";
import {
    User,
    Lock,
    Eye,
    EyeOff,
    GraduationCap
} from "lucide-react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login() {

    const navigate =useNavigate();


    const [showPassword, setShowPassword] = useState(false);

    const [loginData, setLoginData] = useState({

        username: "",

        password: ""
    });

    const handleChange = (e) => {

        setLoginData({

            ...loginData,

            [e.target.name]: e.target.value
        });
    };

    const handleLogin = async (e) => {

        e.preventDefault();

        try {

            // const response = await axios.post(
            //     "http://localhost:8080/login/login",
            //     loginData
            // );
            const response = await axios.post(
                "https://student-attendance-4ax6.onrender.com/login/login",
                loginData
            );
            console.log(response.data);

            alert("Login Successful");

            navigate("/dashboard");

        } catch (error) {

            console.log(error);

            alert("Invalid Username or Password");
        }
    };

    const mobile = window.innerWidth < 768;

    return (

        <div style={mainContainer}>

            {/* Background Pattern */}

            <div style={backgroundPattern}></div>

            {/* Login Section */}

            <div
                style={{
                    ...loginWrapper,

                    width: mobile ? "92%" : "380px"
                }}
            >

                {/* Logo */}

                <div style={logoSection}>

                    <div style={logoBox}>

                        <GraduationCap
                            size={26}
                            color="white"
                        />

                    </div>

                    <h1 style={titleStyle}>
                        VVIT Admin
                    </h1>



                </div>

                {/* Card */}

                <div style={cardStyle}>

                    <h2 style={loginTitle}>
                        Login to your account
                    </h2>

                    <form onSubmit={handleLogin}>

                        {/* Username */}

                        <div style={inputGroup}>

                            <label style={labelStyle}>
                                USERNAME
                            </label>

                            <div style={inputWrapper}>

                                <User
                                    size={17}
                                    color="#6b7280"
                                />

                                <input
                                    type="text"
                                    name="username"
                                    placeholder="Enter Username"
                                    value={loginData.username}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />

                            </div>

                        </div>

                        {/* Password */}

                        <div style={inputGroup}>

                            <div style={passwordTop}>

                                <label style={labelStyle}>
                                    PASSWORD
                                </label>

                                <span style={forgotStyle}>
                                    Forgot?
                                </span>

                            </div>

                            <div style={inputWrapper}>

                                <Lock
                                    size={17}
                                    color="#6b7280"
                                />

                                <input
                                    type={
                                        showPassword
                                            ? "text"
                                            : "password"
                                    }
                                    name="password"
                                    placeholder="Password"
                                    value={loginData.password}
                                    onChange={handleChange}
                                    style={inputStyle}
                                />

                                <div
                                    style={eyeStyle}
                                    onClick={() =>
                                        setShowPassword(
                                            !showPassword
                                        )
                                    }
                                >

                                    {
                                        showPassword ?

                                            <EyeOff
                                                size={17}
                                                color="#6b7280"
                                            />

                                            :

                                            <Eye
                                                size={17}
                                                color="#6b7280"
                                            />
                                    }

                                </div>

                            </div>

                        </div>

                        {/* Remember */}

                        <div style={rememberContainer}>

                            <input type="checkbox" />

                            <span style={rememberText}>
                                Keep me logged in
                            </span>

                        </div>

                        {/* Button */}

                        <button
                            type="submit"
                            style={buttonStyle}
                        >

                            Login

                        </button>

                    </form>

                    {/* Divider */}

                    <div style={divider}></div>

                    {/* Support */}

                    <p style={supportText}>

                        Need technical assistance?

                        <span style={supportLink}>
                            {" "}Contact IT Support
                        </span>

                    </p>

                </div>



            </div>

        </div>
    );
}

export default Login;





const mainContainer = {

    width: "100%",

    minHeight: "100vh",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    backgroundColor: "#f5f7ff",

    position: "relative",

    overflow: "hidden",

    fontFamily: "Arial"
};

const backgroundPattern = {

    position: "absolute",

    width: "100%",

    height: "100%",

    backgroundImage:
        "radial-gradient(#dbe4ff 1px, transparent 1px)",

    backgroundSize: "24px 24px",

    opacity: 0.5
};

const loginWrapper = {

    position: "relative",

    zIndex: 5,

    display: "flex",

    flexDirection: "column",

    alignItems: "center"
};

const logoSection = {

    textAlign: "center",

    marginBottom: "24px"
};

const logoBox = {

    width: "55px",

    height: "55px",

    borderRadius: "15px",

    backgroundColor: "#2563eb",

    display: "flex",

    justifyContent: "center",

    alignItems: "center",

    margin: "0 auto 14px"
};

const titleStyle = {

    fontSize: "30px",

    margin: 0,

    fontWeight: "700",

    color: "#111827"
};

const subtitleStyle = {

    marginTop: "8px",

    fontSize: "14px",

    color: "#6b7280"
};

const cardStyle = {

    width: "100%",

    backgroundColor: "white",

    borderRadius: "18px",

    padding: "28px",

    boxShadow:
        "0 5px 18px rgba(0,0,0,0.08)",

    border: "1px solid #e5e7eb"
};

const loginTitle = {

    marginBottom: "25px",

    fontSize: "26px",

    color: "#111827"
};

const inputGroup = {

    marginBottom: "20px"
};

const labelStyle = {

    display: "block",

    marginBottom: "8px",

    fontSize: "12px",

    fontWeight: "700",

    letterSpacing: "1px",

    color: "#374151"
};

const inputWrapper = {

    width: "100%",

    height: "48px",

    border: "1px solid #d1d5db",

    borderRadius: "10px",

    display: "flex",

    alignItems: "center",

    padding: "0 12px",

    backgroundColor: "#f9fafb",

    boxSizing: "border-box"
};

const inputStyle = {

    flex: 1,

    height: "100%",

    border: "none",

    outline: "none",

    background: "transparent",

    paddingLeft: "10px",

    fontSize: "15px",

    color: "#111827"
};

const passwordTop = {

    display: "flex",

    justifyContent: "space-between",

    alignItems: "center",

    marginBottom: "8px"
};

const forgotStyle = {

    color: "#2563eb",

    fontSize: "13px",

    fontWeight: "600",

    cursor: "pointer"
};

const eyeStyle = {

    cursor: "pointer",

    display: "flex",

    alignItems: "center"
};

const rememberContainer = {

    display: "flex",

    alignItems: "center",

    gap: "8px",

    marginBottom: "22px"
};

const rememberText = {

    fontSize: "14px",

    color: "#4b5563"
};

const buttonStyle = {

    width: "100%",

    height: "48px",

    border: "none",

    borderRadius: "12px",

    backgroundColor: "#2563eb",

    color: "white",

    fontSize: "18px",

    fontWeight: "700",

    cursor: "pointer"
};

const divider = {

    width: "100%",

    height: "1px",

    backgroundColor: "#e5e7eb",

    margin: "28px 0"
};

const supportText = {

    textAlign: "center",

    fontSize: "14px",

    color: "#6b7280"
};

const supportLink = {

    color: "#2563eb",

    fontWeight: "600",

    cursor: "pointer"
};

const footerStyle = {

    marginTop: "25px",

    textAlign: "center",

    color: "#6b7280",

    fontSize: "13px"
};

const footerLinks = {

    display: "flex",

    justifyContent: "center",

    gap: "10px",

    marginTop: "8px"
};