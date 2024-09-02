import Lottie from 'lottie-react'
import notFound from '../assets/404.json'
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';


const NotFound = () => {
  return (
    <div className='max-w-full h-screen'>
        <div className='flex justify-center items-center'>
            <div className='flex flex-col items-center '>
                <Lottie animationData={notFound} loop={true} />
                <h1 className='font-semibold text-gray-600 text-xl'><span className='font-bold text-2xl '>Ops..</span> It seems you've hit a dead end. Let's get you back on track.</h1>

                <NavLink to="/" className="mt-10">
                    <Button className='bg-gradient'>Go Home</Button>
                </NavLink>
                
            </div>
        

        
        </div>
    </div>
  )
}

export default NotFound;