import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Login from "Pages/Auth/Login";
import AuthLayout from "layout/Auth/AuthLayout";

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/auth/login" element={
                    <AuthLayout>
                        <Login />
                    </AuthLayout>
                } />
                <Route path="*" element={<Navigate to="/auth/login" />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;