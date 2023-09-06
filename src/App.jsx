/* eslint-disable no-unused-vars */
import Navbar from "./Components/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Home from "./pages/Home";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Account from "./pages/Account";
import ProtectedRoute from "./Components/ProtectedRoute";
function App() {
    return (
        <>
            <AuthContextProvider>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/account" element={<ProtectedRoute />}>
                        <Route path="/account" element={<Account />} />
                    </Route>
                </Routes>
            </AuthContextProvider>
        </>
    );
}

export default App;
