import { useGetUserQuery } from "@/redux/features/auth/authApi";
import { TUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import Lottie from "lottie-react"
import welcome from "../assets/welcome.json"


const Dashboard = () => {
    const token = useAppSelector(useCurrentToken);
    const date = new Date();
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });

    let user;
    if (token) {
      user = verifyToken(token)
    }
    const { data } = useGetUserQuery((user as TUser)?._id)
    return (
        <div className="flex flex-col-reverse md:flex-row h-full justify-center m-3 bg-gradient rounded-lg w-12/12">
            <div className="p-5 lg:p-10 flex-1 mt-0 md:mt-10 lg:mt-20">
                <p className="text-colorText font-semibold pt-0 sm:pt-5">{formattedDate}</p>
                <p className="text-colorText font-bold text-xl sm:text-3xl mt-5 sm:mt-10">Welcome back, <span className="text-3xl sm:text-5xl">{data?.data?.name}</span>! <br /> Let's achieve something great today.</p>
            </div>
            <div className="flex-1 mt-0 md:mt-4 lg:mt-10">
                <Lottie animationData={welcome} loop={true} />
            </div>
        </div>
    )
}

export default Dashboard