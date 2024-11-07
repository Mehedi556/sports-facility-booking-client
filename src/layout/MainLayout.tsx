import Footer from "@/ui-components/Footer"
import Navbar from "@/ui-components/Navbar"
import { Outlet } from "react-router-dom"



const MainLayout = () => {
    return (
        <div className="max-w-full ">
            <Navbar width={'[1280px]'}/>
            <div className="min-h-screen">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default MainLayout