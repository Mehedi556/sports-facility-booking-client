/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button";
import { TUser, useCurrentToken } from "@/redux/features/auth/authSlice";
import { useAppSelector } from "@/redux/hooks";
import { TFacility } from "@/types/facility.type";
import { verifyToken } from "@/utils/verifyToken";
import { NavLink } from "react-router-dom";


const FacilityCard = ({ item }: { item: TFacility }) => {
    const token = useAppSelector(useCurrentToken);
    let user;
    if (token) {
        user = verifyToken(token)
    }


    return (
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow-md shadow-color-simple">

            <img className="rounded-t-lg object-cover object-center h-[200px] w-full" src={item?.image} alt="product image" />

            <div className="px-3 pb-3">

                <h5 className="text-lg font-semibold tracking-tight pt-2 text-gray-900">{item?.name}</h5>
                <p className="text-xs text-gray-600 ">{item?.description.substring(0, 100)}</p>
                {/* <div className="flex mt-2 items">
                    <p className="text-xs font-bold mr-2">Category:</p>
                    <p className="text-xs font-semibold px-2  bg-color-primary text-black rounded-sm">{item?.category}</p>
                </div>

                <div className="flex items">
                    <p className="text-xs font-bold mr-2">Available:</p>
                    <p className="text-xs text-gray-600">{item?.quantity} pcs</p>
                </div> */}

                <div className="flex items-center justify-between mt-2">
                    <span className="text-2xl font-bold text-gray-900">${item?.pricePerHour} <span className="text-[10px] font-normal ml-[-5px]">per hour</span></span>
                    <div className="flex justify-around gap-x-2 pt-1">
                        <NavLink to={`/facility-details/${item?._id}`}>
                            <Button className="text-black hover:text-white border border-color-simple bg-white hover:bg-color-simple  focus:outline-none font-medium rounded-sm text-xs px-4 py-2 text-center">See Details</Button>
                        </NavLink>

                        <NavLink to={`/${(user as TUser)?.role}/booking/${item?._id}`}>
                            <Button className="text-white bg-gradient hover:bg-hover-gradient  focus:outline-none font-medium rounded-sm text-xs px-4 py-2 text-center">Book facility</Button>
                        </NavLink>
                        
                    </div>

                </div>
            </div>
        </div>

    )
}

export default FacilityCard