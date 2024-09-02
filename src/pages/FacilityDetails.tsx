import { Button } from "@/components/ui/button";
import { TUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useGetSingleFacilityQuery } from "@/redux/features/facility/facilityApi";
import { useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { NavLink, useParams } from "react-router-dom";


const FacilityDetails = () => {
    const token = useAppSelector(useCurrentToken);
    let user;
    if (token) {
        user = verifyToken(token)
    }
    const { id } = useParams();

    const { data, isLoading } = useGetSingleFacilityQuery(id);

    if (isLoading) {
        return <div className="flex justify-center align-middle items-center w-full h-screen">
            <p>Loading...</p>
        </div>
    }
    return (
        <>
        <div className="max-w-[1024px] mx-3 lg:mx-auto flex flex-col md:flex-row gap-6 py-12">
    <div className="w-full md:w-3/5 flex justify-center">
        <img 
            className="rounded-lg object-cover object-center max-h-[500px] shadow-md bg-gradient shadow-color-simple border p-3 border-color-simple"
            src={data?.data?.image} 
            alt={data?.data?.name || "Facility Image"} 
        />
    </div>
    <div className="w-full md:w-2/5">
        <div className="p-6 border border-color-simple rounded-lg  shadow-md shadow-color-simple">
            {/* Optional tagline */}
            <p className="text-color-primary font-semibold text-lg">Experience Top-Quality Squash Facilities</p>
            <p className="font-bold mt-2">Name: 
                <span className="text-zinc-600 text-3xl ml-1">{data?.data?.name}</span>
            </p>
            <p className="font-bold mt-3">Description: 
                <span className="text-zinc-600 text-base ml-1">{data?.data?.description}</span>
            </p>
            <p className="font-bold mt-4">Location: 
                <span className="bg-color-simple px-2 py-1 text-sm text-black rounded-md font-medium ml-1">{data?.data?.location}</span>
            </p>
            <p className="font-bold mt-6">Price: 
                <span className="font-bold text-3xl bg-color-simple rounded-md px-3 py-1 ml-1">${data?.data?.pricePerHour}</span>
                <span className="text-xs font-medium ml-1">per hour</span>
            </p>
            <NavLink to={`/${(user as TUser)?.role}/booking/${data?.data?._id}`}>
                <Button 
                onClick={() => { }} 
                className="bg-gradient px-3 py-1.5 text-sm font-bold text-white rounded-md mt-12 w-full hover:bg-hover-gradient shadow-sm"
            >
                Book Now
            </Button>
            </NavLink>
            
        </div>
    </div>
</div>
{/* Additional text below the facility details */}
<div className="max-w-[1024px] mx-auto mt-8 text-center text-gray-700 text-base shadow-md p-3 shadow-color-simple rounded-md">
    <p>Ready to Play? Book your spot in just a few clicks and enjoy a premium sports experience. Our facilities are maintained to the highest standards, ensuring a safe and enjoyable environment for all players. Don't miss out—reserve your time now!</p>
</div>

        </>
    )
}

export default FacilityDetails