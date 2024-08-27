import App from "@/App";
import DashboardLayout from "@/layout/DashboardLayout";
import ProtectedRoute from "@/layout/ProtectedRoute";
import AboutUs from "@/pages/AboutUs";
import ContactUs from "@/pages/ContactUs";
import Login from "@/pages/Login";
import SignUp from "@/pages/SignUp";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "about",
                element: <AboutUs />
            },
            {
                path: "contact",
                element: <ContactUs />
            },
        ]
    },
    {
        path: "/admin",
        element: <ProtectedRoute role="admin">
                    <DashboardLayout />
                </ProtectedRoute>,
        children: [
            {
                path: "about",
                element: <AboutUs />
            },
        ]
    },
    {
        path: "/user",
        element: <ProtectedRoute role="user">
                    <DashboardLayout />
                </ProtectedRoute>,
        children: [
            {
                path: "about",
                element: <AboutUs />
            },
        ]
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
])