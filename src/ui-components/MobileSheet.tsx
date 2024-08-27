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
import { Building2, CircleUserRound, House, LandPlot, PhoneCall, ShoppingBag, SlidersVertical, Sprout } from "lucide-react"
import { NavLink } from "react-router-dom"


const MobileSheet = ({children}: {children: ReactNode}) => {
    
    const [sheetOpen, setSheetOpen] = useState(false);

    return (
    <Sheet key="right" open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetTrigger>{children}</SheetTrigger>
            <SheetContent className="w-[90%] sm:w-[540px] p-0 m-0">
                <SheetHeader className="bg-gradient p-2 flex justify-center items-center ">
                    <img src={logo} className="h-12 w-12" alt="Nursery Logo" />
                    <span className="text-xl sm:text-2xl font-bold mt-[-5px] text-white">Sports Club</span>
                </SheetHeader>
                <div className="flex flex-col gap-y-4 p-6">
                <SheetClose onClick={() => { setSheetOpen(false) }}>
                    <div className="flex items-center gap-x-3">
                        <CircleUserRound className="text-color-primary h-6 w-6"/>
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
                <SheetClose onClick={() => { setSheetOpen(false) }}>
                    <div className="flex items-center gap-x-3">
                        <House className="text-color-primary h-6 w-6"/>
                        <NavLink className="text-md" to="/">Home</NavLink>
                    </div>
                </SheetClose>
                <SheetClose onClick={() => { setSheetOpen(false) }}>
                    <div className="flex items-center gap-x-3">
                        <LandPlot className="text-color-primary h-6 w-6"/>
                        <NavLink className="text-md" to="/products">Facilities</NavLink>
                    </div>
                </SheetClose>
                <SheetClose onClick={() => { setSheetOpen(false) }}>
                    <div className="flex items-center gap-x-3">
                        <Building2 className="text-color-primary h-6 w-6"/>
                        <NavLink className="text-md" to="/manage-products">About us</NavLink>
                    </div>
                </SheetClose>
                <SheetClose onClick={() => { setSheetOpen(false) }}>
                    <div className="flex items-center gap-x-3">
                        <PhoneCall className="text-color-primary h-6 w-6"/>
                        <NavLink className="text-md" to="/manage-products">Contact us</NavLink>
                    </div>
                </SheetClose>
                </div>
            </SheetContent>
        </Sheet>

  )
}

export default MobileSheet