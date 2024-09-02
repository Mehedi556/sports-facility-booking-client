import App from "@/App";
import DashboardLayout from "@/layout/DashboardLayout";
import ProtectedRoute from "@/layout/ProtectedRoute";
import AboutUs from "@/pages/AboutUs";
import AdminManagement from "@/pages/AdminManagement";
import Booking from "@/pages/Booking";
import BookingManagement from "@/pages/BookingManagement";
import ContactUs from "@/pages/ContactUs";
import Dashboard from "@/pages/Dashboard";
import Facilities from "@/pages/Facilities";
import FacilityDetails from "@/pages/FacilityDetails";
import FacilityManagement from "@/pages/FacilityManagement";
import Home from "@/pages/Home";
import Login from "@/pages/Login";
import MyBookings from "@/pages/MyBookings";
import NotFound from "@/pages/NotFound";
import SignUp from "@/pages/SignUp";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "facility-details/:id",
                element: <FacilityDetails />
            },
            {
                path: "facilities",
                element: <Facilities />
            },
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
                index: true,
                element: <Dashboard />
            },
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "facility-management",
                element: <FacilityManagement />
            },
            {
                path: "booking-management",
                element: <BookingManagement />
            },
            {
                path: "admin-management",
                element: <AdminManagement />
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
                index: true,
                element: <Dashboard />
            },
            {
                path: "dashboard",
                element: <Dashboard />
            },
            {
                path: "my-bookings",
                element: <MyBookings />
            },
            {
                path: "booking/:id",
                element: <Booking />
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
    {
        path: "*",
        element: <NotFound />
    }
])