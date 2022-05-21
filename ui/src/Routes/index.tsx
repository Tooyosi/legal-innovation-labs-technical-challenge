import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import Login from "Pages/Auth/Login";
import AuthLayout from "layout/Auth/AuthLayout";
import Signup from "Pages/Auth/Signup";
import { Landing } from "Pages/Landing";
import BaseLayout from "layout/Auth/BaseLayout";
import Post from "Pages/Post";
import EditPost from "Pages/Post/Edit";
import AddPost from "Pages/Post/Add";

const DynamicRouting = (Layout: React.FC<any>, Component: React.FC<any>, path: string) =>
    <Route path={path} element={
        <Layout>
            <Component />
        </Layout>
    } />

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                {DynamicRouting(AuthLayout, Login, "/auth/login")}
                {DynamicRouting(AuthLayout, Signup, "/auth/signup")}
                {DynamicRouting(BaseLayout, EditPost, "/post/:id/edit")}
                {DynamicRouting(BaseLayout, Post, "/post/:id/view")}
                {DynamicRouting(BaseLayout, AddPost, "/post")}
                {DynamicRouting(BaseLayout, Landing, "/")}
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;