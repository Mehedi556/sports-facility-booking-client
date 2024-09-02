import Navbar from "@/ui-components/Navbar"
import { NavLink, Outlet } from "react-router-dom"

import { useAppSelector } from "@/redux/hooks";
import { TUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { verifyToken } from "@/utils/verifyToken";
import { useGetUserQuery } from "@/redux/features/auth/authApi";
import userIcon from '../assets/user.png'
import { LayoutDashboard, NotebookPen, NotepadText, UserCog } from "lucide-react";



const DashboardLayout = () => {
  const token = useAppSelector(useCurrentToken);

  let user;
  if (token) {
    user = verifyToken(token)
  }
  const { data } = useGetUserQuery((user as TUser)?._id)
  return (
    <div className="max-w-full">
      <Navbar width='full' />
      <div className="grid grid-cols-12 h-screen">
        <div className="col-span-0 md:col-span-3 lg:col-span-2 hidden md:block bg-[#8BB7F8] sticky top-0 z-50">
          <div className="w-full flex flex-col">
            <div className="mt-5 text-center w-full flex flex-col items-center">
              <img className="h-32 w-32" src={userIcon} alt="" />
              <p className="font-semibold text-sm">Name: {data?.data?.name}</p>
              <p className="font-semibold text-sm">Email: {data?.data?.email}</p>
            </div>
            <div className="w-[100%] border border-color-simple my-3"></div>
            <div className="text-white p-5 flex flex-col gap-y-4">
              <NavLink to={`/${(user as TUser)?.role}`} className="flex items-center gap-2">
                <LayoutDashboard className="h-5 w-5"/>
                <p className="text-sm md:text-base">Dashboard</p>
              </NavLink>

              {
                (user as TUser)?.role == 'user' && (
                  <NavLink to={`/${(user as TUser)?.role}/my-bookings`} className="flex items-center gap-2">
                    <NotepadText className="h-5 w-5"/>
                    <p className="text-sm md:text-base">My Bookings</p>
                  </NavLink>
                )
              }
              
              {
                (user as TUser)?.role == 'admin' && (
                  <>
                    <NavLink to={`/${(user as TUser)?.role}/facility-management`} className="flex items-center gap-2">
                      <NotepadText className="h-5 w-5"/>
                      <p className="text-sm md:text-base">Facility Management</p>
                    </NavLink>
                    <NavLink to={`/${(user as TUser)?.role}/booking-management`} className="flex items-center gap-2">
                      <NotebookPen className="h-5 w-5"/>
                      <p className="text-sm md:text-base ">Booking Management</p>
                    </NavLink>
                    <NavLink to={`/${(user as TUser)?.role}/admin-management`} className="flex items-center gap-2">
                      <UserCog className="h-5 w-5"/>
                      <p className="text-sm md:text-base">Admin Management</p>
                    </NavLink>
                  </>
                  
                )
              }

            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-9 lg:col-span-10">
          <Outlet />
        </div>
      </div>
    </div>

  )
}

export default DashboardLayout