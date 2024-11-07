import { Button } from "@/components/ui/button";
import { TUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useGetSingleFacilityQuery } from "@/redux/features/facility/facilityApi";
import { useAppSelector } from "@/redux/hooks";
import { verifyToken } from "@/utils/verifyToken";
import { NavLink, useParams } from "react-router-dom";
import { toast } from "sonner";


const FacilityDetails = () => {
    const token = useAppSelector(useCurrentToken);
    let user;
    if (token) {
        user = verifyToken(token)
    }
    const { id } = useParams();

    const { data, isLoading } = useGetSingleFacilityQuery(id);
    console.log(data);

    if (isLoading) {
        return <div className="flex justify-center align-middle items-center w-full h-screen">
            <p>Loading...</p>
        </div>
    }
    return (
<div className="min-h-screen bg-white py-16 px-4">
    {/* Facility Details Container */}
    <div className="w-[1280px] mx-auto bg-white rounded-lg shadow-2xl overflow-hidden">
        {/* Image Section */}
        <div className="relative">
            <img 
                src={data?.data?.image} 
                alt={data?.data?.name || "Facility Image"} 
                className="w-full h-[400px] object-cover rounded-t-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-t-lg"></div>
            <h2 className="absolute bottom-4 left-6 text-white text-3xl font-extrabold">{data?.data?.name}</h2>
        </div>

        {/* Content Section */}
        <div className="p-8 space-y-8">
            {/* Tagline */}
            <div className="text-center">
                <p className="text-lg font-medium text-colorText mb-1">Premium Squash Facilities for Every Player</p>
                <p className="text-sm text-colorText">Our squash courts provide the perfect setting for a top-quality experience.</p>
            </div>

            {/* Information Section */}
            <div className="grid grid-cols-1 gap-6">
                <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="bg-colorBg text-sm text-white font-medium px-2 py-1 rounded-lg inline-block mt-1">
                        {data?.data?.location}
                    </p>
                </div>
                <div>
                    <h3 className="font-semibold text-lg">Description</h3>
                    <p className="text-gray-700 text-sm mt-1">{data?.data?.description}</p>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="flex flex-col items-center border-t border-colorText pt-6">
                <p className="text-lg font-semibold text-colorText">Price</p>
                <p className="text-3xl font-bold text-colorText">${data?.data?.pricePerHour}</p>
                <span className="text-xs text-colorText mt-1">per hour</span>
            </div>

            {/* Action Button */}
            <div className="text-center mt-8">
                {(user as TUser)?.role === 'admin' ? (
                    <Button 
                        onClick={() => { toast.error('Booking page is only for users, not for admins.') }}
                        className="w-full max-w-xs bg-gradient px-4 py-3 font-bold text-colorText rounded-lg transition shadow-md shadow-colorText hover:text-white hover:bg-colorBg"
                    >
                        Book Now
                    </Button>
                ) : (
                    <NavLink to={(user as TUser)?.role === 'user' ? `/${(user as TUser)?.role}/booking/${data?.data?._id}` : '/login'}>
                        <Button 
                            className="w-full max-w-xs bg-gradient px-4 py-3 font-bold text-white rounded-lg transition hover:bg-hover-gradient shadow-md"
                        >
                            Book Now
                        </Button>
                    </NavLink>
                )}
            </div>
        </div>
    </div>

    {/* Additional Info Section */}
    <div className="max-w-7xl mx-auto mt-12 p-6 bg-gradient rounded-lg shadow-md text-center">
        <p className="text-colorText">
            Ready to elevate your game? Book now to secure your spot and enjoy premium facilities in a world-class environment. 
            Our courts are maintained for peak performance and safety. Don't miss out on the ultimate squash experience!
        </p>
    </div>
</div>

    )
}

export default FacilityDetails