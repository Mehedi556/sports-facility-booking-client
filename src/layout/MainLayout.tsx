import Navbar from "@/ui-components/Navbar"
import { Outlet } from "react-router-dom"
import hero from "../assets/hero.jpg"


const MainLayout = () => {
    return (
        <div className="max-w-full">
            <Navbar />
            <div className="relative bg-gradient h-[650px] text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img src={hero} alt="Background Image" className="object-cover object-center w-full h-full opacity-50" />
                    <div className="absolute inset-0 bg-black opacity-30"></div>
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center w-4/5 mx-auto">
                    <h1 className="text-5xl font-bold text-white leading-tight mb-4">Book Your Favorite Sports Facility <br /> Anytime, Anywhere</h1>
                    <p className="text-lg text-gray-200 mb-8">Welcome to Sports Club – your go-to platform for easy sports facility bookings. From tennis courts to football fields, explore and reserve your spot in just a few clicks. Get ready for your next game today!</p>
                    <a href="#" className="bg-gradient py-2 px-10 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</a>
                </div>
            </div>
            <Outlet />
        </div>
    )
}

export default MainLayout