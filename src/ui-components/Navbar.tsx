import { House, LayoutDashboard, LayoutList, LogOut, Menu } from "lucide-react"
import MobileSheet from "./MobileSheet"
import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import { logout, TUser, useCurrentToken } from "@/redux/features/auth/authSlice"
import { useAppDispatch, useAppSelector } from "@/redux/hooks"
import { verifyToken } from "@/utils/verifyToken"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = ({ width }: { width: string }) => {
    const token = useAppSelector(useCurrentToken);
    let user;
    if (token) {
        user = verifyToken(token)
    }

    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logout());
    }



    return (
        <div className="max-w-full">
            <nav className="bg-gradient text-colorText px-5">
                <div className={`max-w-${width} flex items-center justify-between mx-auto py-1 sm:py-3 px-0 lg:px-0`}>
                    <NavLink to="/" className="flex items-center space-x-3">
                        <img src={logo} className="h-12 w-14" alt="Nursery Logo" />
                        <span className="self-center text-xl sm:text-2xl font-bold whitespace-nowrap">Sports Club</span>
                    </NavLink>

                    {
                        width == "[1280px]" && (
                            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
                                {/* <div className="relative mt-3 md:hidden">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="text" id="search-navbar" className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                        </div> */}
                                <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">

                                    <NavLink to="/" className="block py-2 px-3 hover:text-colorHover md:p-0">Home</NavLink>

                                    <NavLink to="/facilities" className="block py-2 px-3 hover:text-colorHover md:p-0">Facilities</NavLink>

                                    <NavLink to="/about" className="block py-2 px-3 hover:text-colorHover md:p-0">About us</NavLink>

                                    <NavLink to="/contact" className="block py-2 px-3 hover:text-colorHover md:p-0">Contact us</NavLink>

                                </ul>
                            </div>
                        )
                    }


                    <div className="flex justify-center items-center md:order-2">
                        {
                            (user as TUser)?.role ?
                                (
                                    <Popover>
                                        <PopoverTrigger className="hidden md:block">
                                            <Avatar>
                                                <AvatarImage src="https://github.com/shadcn.png" />
                                                <AvatarFallback>CN</AvatarFallback>
                                            </Avatar>
                                        </PopoverTrigger>
                                        <PopoverContent className="flex flex-col gap-y-2 max-w-[220px]">
                                            {
                                                width !== "full" && <NavLink to={`/${(user as TUser)?.role}`} className="flex gap-x-2 items-center hover:bg-slate-100 p-2 rounded-sm text-colorText hover:text-colorHover font-semibold">
                                                <LayoutDashboard />
                                                <button>Dashboard</button>
                                            </NavLink>
                                            }
                                            
                                            {
                                                width == "full" && <NavLink to={`/`} className="text-colorText hover:text-colorHover font-semibold flex gap-x-2 items-center hover:bg-slate-100 p-2 rounded-sm">
                                            <House />
                                                <button>Home</button>
                                            </NavLink>
                                            }

                                            {
                                                width == "full" && <NavLink to={`/facilities`} className="text-colorText hover:text-colorHover font-semibold flex gap-x-2 items-center hover:bg-slate-100 p-2 rounded-sm">
                                                <LayoutList />
                                                    <button>Facilities</button>
                                                </NavLink>
                                            }
                                            
                                            

                                            {/* <NavLink to="/" className="font-semibold text-colorText mr-5 block py-2 px-3 md:hover:text-gray-200 md:p-0">Home</NavLink>

                                            <NavLink to="/facilities" className="font-semibold text-colorText mr-5 block py-2 px-3 md:hover:text-gray-200 md:p-0">Facilities</NavLink> */}
                                            <button onClick={handleLogout} className="font-semibold flex gap-x-2 items-center text-red-600 hover:text-white hover:bg-red-600 p-2 rounded-sm">
                                                <LogOut />
                                                <p>Logout</p>
                                            </button>
                                        </PopoverContent>
                                    </Popover>




                                )
                                :
                                (
                                    <div className="hidden md:flex gap-x-1 ">
                                        <NavLink to="/login" className="">
                                            <button className="py-0.5 text-colorText font-semibold">Log in</button>
                                        </NavLink>
                                        <button disabled className="text-xs text-colorText">-or-</button>
                                        <NavLink to="/signup" className="">
                                            <button className="border border-colorText rounded-sm px-2 py-0.5 text-colorText font-semibold">Sign up</button>
                                        </NavLink>
                                    </div>
                                )
                        }







                        <MobileSheet>
                            <button className="block md:hidden focus:outline-none">
                                <Menu className="h-8 w-8" />
                            </button>
                        </MobileSheet>

                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar