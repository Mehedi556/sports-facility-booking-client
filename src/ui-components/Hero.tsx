import { Button } from "@/components/ui/button"
import hero from "../assets/hero.jpg"

const Hero = () => {
    return (
        <div className="max-w-full">
            <div className="relative bg-gradient h-[500px] sm:h-[650px] md:h-[750px] text-white overflow-hidden">
                <div className="absolute inset-0">
                    <img src={hero} alt="Background Image" className="object-cover object-center w-full h-full opacity-50" />
                    {/* <div className="absolute inset-0 bg-black opacity-30"></div> */}
                </div>

                <div className="relative z-10 flex flex-col justify-center items-center h-full text-center max-w-[1240px] mx-auto">
                    <h1 className="text-2xl sm:text-2xl md:text-5xl font-bold text-white leading-tight mb-4 w-11/12 mx-auto">Book Your Favorite Sports Facility <br /> Anytime, Anywhere</h1>
                    <p className="text-sm sm:text-lg md:text-xl text-gray-200 mb-8 w-11/12 mx-auto">Welcome to Sports Club – your go-to platform for easy sports facility bookings. From tennis courts to football fields, explore and reserve your spot in just a few clicks. Get ready for your next game today!</p>
                    <Button className="bg-gradient py-2 px-10 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Get Started</Button>
                </div>
            </div>
        </div>
    )
}

export default Hero