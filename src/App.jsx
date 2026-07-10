import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "./Components/Sidebar";

import Dashboard from "./Pages/Dashboard";
import AddStudent from "./Pages/AddStudent";
import Students from "./Pages/Students";
import Attendance from "./Pages/Attendance";
import Reports from "./Pages/Reports";
import Login from "./Login/Login";

function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* LOGIN PAGE */}

                <Route path="/" element={<Login />} />

                {/* ALL PAGES WITH SIDEBAR */}

                <Route
                    path="/dashboard"
                    element={
                        <>
                            <Sidebar />
                            <Dashboard />
                        </>
                    }
                />

                <Route
                    path="/students"
                    element={
                        <>
                            <Sidebar />
                            <Students />
                        </>
                    }
                />

                <Route
                    path="/add-student"
                    element={
                        <>
                            <Sidebar />
                            <AddStudent />
                        </>
                    }
                />

                <Route
                    path="/attendance"
                    element={
                        <>
                            <Sidebar />
                            <Attendance />
                        </>
                    }
                />

                <Route
                    path="/reports"
                    element={
                        <>
                            <Sidebar />
                            <Reports />
                        </>
                    }
                />

            </Routes>

        </BrowserRouter>
    );
}

export default App;