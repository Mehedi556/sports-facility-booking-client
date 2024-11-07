/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactNode, useState } from "react"
import logo from "../assets/logo.png"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetHeader,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Building2, CircleUserRound, House, LandPlot, LayoutDashboard, ListPlus, LogOut, NotebookPen, NotepadText, PhoneCall, UserCog } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { logout, TUser, useCurrentToken } from "@/redux/features/auth/authSlice"
import { verifyToken } from "@/utils/verifyToken"
import { Separator } from "@/components/ui/separator"


const MobileSheet = ({ children }: { children: ReactNode }) => {
    const token = useAppSelector(useCurrentToken);
    let user;
    if (token) {
        user = verifyToken(token)
    }

    const [sheetOpen, setSheetOpen] = useState(false);

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }

    return (
        <Sheet key="right" open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger>{children}</SheetTrigger>
            <SheetContent className="w-[90%] sm:w-[540px] p-0 m-0">
                <SheetHeader className="bg-gradient p-2 flex justify-center items-center ">
                    <img src={logo} className="h-12 w-12" alt="Nursery Logo" />
                    <span className="text-xl sm:text-2xl font-bold mt-[-5px] text-white">Sports Club</span>
                </SheetHeader>
                <div className="flex flex-col gap-y-4 p-6">
                    {
                        (user as TUser)?.role && (
                            <div>
                                <h1 className="text-center text-zinc-500 text-sm pb-3">Dashboard Navigation</h1>
                                <div className="flex flex-col gap-y-4">
                                    <SheetClose onClick={() => { setSheetOpen(false) }}>
                                        <NavLink to={`/${(user as TUser)?.role}`} className="flex items-center gap-x-3">
                                            <LayoutDashboard className="text-color-primary h-6 w-6" />
                                            <p className="text-md" >Dashboard</p>
                                        </NavLink>
                                    </SheetClose>

                                    {
                                        (user as TUser)?.role == 'user' && (
                                            <SheetClose onClick={() => { setSheetOpen(false) }}>
                                                <NavLink to={`/${(user as TUser)?.role}/my-bookings`} className="flex items-center gap-x-3">
                                                    <NotepadText className="text-color-primary h-6 w-6" />
                                                    <p className="text-md" >My Bookings</p>
                                                </NavLink>
                                            </SheetClose>
                                        )
                                    }
                                    {
                                        (user as TUser)?.role == 'admin' && (
                                            <>
                                                <SheetClose onClick={() => { setSheetOpen(false) }}>
                                                    <NavLink to={`/${(user as TUser)?.role}/facility-management`} className="flex items-center gap-x-3">
                                                        <NotepadText className="text-color-primary h-6 w-6" />
                                                        <p className="text-md" >Facility Management</p>
                                                    </NavLink>
                                                </SheetClose>
                                                <SheetClose onClick={() => { setSheetOpen(false) }}>
                                                    <NavLink to={`/${(user as TUser)?.role}/create-facility`} className="flex items-center gap-x-3">
                                                        <ListPlus className="text-color-primary h-6 w-6" />
                                                        <p className="text-md" >Create Facility</p>
                                                    </NavLink>
                                                </SheetClose>
                                                <SheetClose onClick={() => { setSheetOpen(false) }}>
                                                    <NavLink to={`/${(user as TUser)?.role}/booking-management`} className="flex items-center gap-x-3">
                                                        <NotebookPen className="text-color-primary h-6 w-6" />
                                                        <p className="text-md" >Booking Management</p>
                                                    </NavLink>
                                                </SheetClose>
                                                <SheetClose onClick={() => { setSheetOpen(false) }}>
                                                    <NavLink to={`/${(user as TUser)?.role}/admin-management`} className="flex items-center gap-x-3">
                                                        <UserCog className="text-color-primary h-6 w-6" />
                                                        <p className="text-md" >Admin Management</p>
                                                    </NavLink>
                                                </SheetClose>
                                            </>

                                        )
                                    }

                                </div>
                            </div>
                        )
                    }

                    {
                        (user as TUser)?.role && <Separator />
                    }

                    {
                        (user as TUser)?.role ? (
                            <SheetClose onClick={() => { setSheetOpen(false) }}>
                                <button onClick={handleLogout} className="flex gap-x-2 items-center text-red-600 hover:text-white hover:bg-red-600 p-1 rounded-sm">
                                    <LogOut />
                                    <p>Logout</p>
                                </button>
                            </SheetClose>
                        )
                            :
                            (
                                <SheetClose onClick={() => { setSheetOpen(false) }}>
                                    <div className="flex items-center gap-x-3">
                                        <CircleUserRound className="text-color-primary h-6 w-6" />
                                        <div className="flex gap-x-1 ">
                                            <NavLink to="/login" className="">
                                                <button className="py-0.5">Log in</button>
                                            </NavLink>
                                            <button disabled className="text-xs text-gray-400">-or-</button>
                                            <NavLink to="/signup" className="">
                                                <button className="bg-color-primary text-white rounded-sm px-2 py-0.5">Sign up</button>
                                            </NavLink>
                                        </div>
                                    </div>
                                </SheetClose>
                            )
                    }
                    <SheetClose onClick={() => { setSheetOpen(false) }}>
                        <NavLink to="/" className="flex items-center gap-x-3">
                            <House className="text-color-primary h-6 w-6" />
                            <p className="text-md">Home</p>
                        </NavLink>
                    </SheetClose>
                    <SheetClose onClick={() => { setSheetOpen(false) }}>
                        <NavLink to="/facilities" className="flex items-center gap-x-3">
                            <LandPlot className="text-color-primary h-6 w-6" />
                            <p className="text-md">Facilities</p>
                        </NavLink>
                    </SheetClose>
                    <SheetClose onClick={() => { setSheetOpen(false) }}>
                        <NavLink to="/about" className="flex items-center gap-x-3">
                            <Building2 className="text-color-primary h-6 w-6" />
                            <p className="text-md" >About us</p>
                        </NavLink>
                    </SheetClose>
                    <SheetClose onClick={() => { setSheetOpen(false) }}>
                        <NavLink to="/contact" className="flex items-center gap-x-3">
                            <PhoneCall className="text-color-primary h-6 w-6" />
                            <p className="text-md">Contact us</p>
                        </NavLink>
                    </SheetClose>
                </div>
            </SheetContent>
        </Sheet>

    )
}

export default MobileSheet