import { NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import facebook from "../assets/icons/facebook.png"
import twitter from "../assets/icons/twitter.png"
import instagram from "../assets/icons/instagram.png"

const Footer = () => {
  return (
    <div className='bg-gradient'>
            <div className="max-w-[1024px] mx-auto text-colorText grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 align-items-center py-5">
                <div className='text-center sm:text-left flex flex-col items-center col-span-3 sm:col-span-1'>
                    <h1 className='font-semibold mb-2'>More Links</h1>
                    <div className='text-sm flex flex-col gap-y-1'>
                        <NavLink to="/home">Home</NavLink>
                        <NavLink to="/facilities">Facilities</NavLink>
                        <NavLink to="/about">About us</NavLink>
                        <NavLink to="/contact">Contact us</NavLink>
                        <NavLink to="#">Career</NavLink>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center col-span-3 sm:col-span-1 mt-6 sm:mt-0 md:mt-0'>
                    <img className='h-20 w-20' src={logo} alt="" />
                    <p className='text-lg font-bold'>Sports Club</p>
                    <div className='flex justify-center gap-x-2 mt-2'>
                        <img className='w-6 h-6' src={facebook} alt="" />
                        <img className='w-6 h-6' src={twitter} alt="" />
                        <img className='w-6 h-6' src={instagram} alt="" />
                    </div>
                </div>
                <div className="col-span-3 sm:col-span-2 md:col-span-1 mt-6 sm:mt-6 md:mt-0">
                    <p className="text-xs text-center font-semibold">Who we are</p>
                    <h1 className='text-xs text-center text-colorText px-1 sm:px-3'>Your go-to platform for easy and seamless sports facility bookings, designed for everyone from casual players to serious athletes.</h1>
                    <div className='text-sm text-center mt-5 '>
                        <p>© 2024 <br /> Sports Club <br /> All Rights Reserved.</p>
                        
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer