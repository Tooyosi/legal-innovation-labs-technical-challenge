import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Login from "Pages/Auth/Login";
import AuthLayout from "layout/Auth/AuthLayout";
import Signup from "Pages/Auth/Signup";

const DynamicRouting = (Layout: React.FC<any>, Component: React.FC<any>, path:string) =>
    <Route path={path} element={
        <Layout>
            <Component />
        </Layout>
    } />

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {DynamicRouting(AuthLayout,Login, "/auth/login")}
                {DynamicRouting(AuthLayout,Signup, "/auth/signup")}
                <Route path="*" element={<Navigate to="/auth/login" />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;