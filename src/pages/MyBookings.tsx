import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { useGetAllBookingsForUserQuery } from "@/redux/features/booking/bookingApi"
import { TBooking } from "@/types/booking.type";
import CancelBookingModal from "@/ui-components/modals/user/CancelBookingModal";
import SeeDetailsModal from "@/ui-components/modals/user/SeeDetailsModal";
import { CircleX, ReceiptText } from "lucide-react";


const MyBookings = () => {
    const { data } = useGetAllBookingsForUserQuery(undefined)
    return (
        <div className="p-3 m-3 bg-gradient rounded-lg min-h-screen text-colorText">
            <h1 className="font-semibold text-lg py-3">All My Bookings</h1>
            <Table className="">
                <TableCaption className="text-colorText">Recent added bookings.</TableCaption>
                <TableHeader className="text-xs sm:text-base">
                    <TableRow>
                        <TableHead className="text-left p-0 font-semibold text-colorText">Facility</TableHead>
                        <TableHead className=" p-0 pl-1 sm:pl-3 font-semibold text-colorText">Name</TableHead>
                        <TableHead className=" p-0 font-semibold text-colorText">Location</TableHead>
                        <TableHead className=" p-0 font-semibold text-colorText">Status</TableHead>
                        <TableHead className=" p-0 font-semibold text-center text-colorText">Facility Details</TableHead>
                        <TableHead className="p-0 text-right font-semibold text-colorText">Cancel Facility</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody className="text-xs sm:text-base">
                    {
                        data?.data?.map((item: TBooking) => (
                            <TableRow className="mb-6 rounded-md" key={item?._id}>
                                <TableCell className="font-medium p-0 h-14 sm:h-24 w-14 sm:w-24 rounded-md">
                                    <img className="h-14 sm:h-24 w-14 sm:w-24 object-cover object-center rounded-md" src={item?.facility?.image} alt="" />
                                </TableCell>
                                <TableCell className="p-0 pl-1 sm:pl-3">{item?.facility?.name}</TableCell>
                                <TableCell className="p-0">{item?.facility?.location.substring(0, 15)}{item?.facility?.location.length > 15 && '...'}</TableCell>
                                <TableCell className="p-0">{item?.isBooked}</TableCell>
                                <TableCell className="p-0">
                                    <div className="flex justify-end md:justify-center">
                                        <SeeDetailsModal data={item}>
                                            <button className="text-xs flex items-center space-x-1 md:space-x-2 p-1 lg:p-2 md:text-sm hover:bg-gray-100  rounded border border-color-simple">
                                                <ReceiptText size={16} />
                                                <p>Details</p>
                                            </button>
                                        </SeeDetailsModal>
                                    </div>

                                </TableCell>
                                <TableCell className="">
                                    <div className="flex justify-end">
                                        <CancelBookingModal _id={item?._id as string}>
                                        <button disabled={item?.isBooked == 'canceled'} className="text-xs flex items-center space-x-1 md:space-x-2 p-1 lg:p-2 md:text-sm hover:bg-red-600 hover:text-white  rounded border border-red-500 text-red-600">
                                            <CircleX className="" size={16} />
                                            <p>Cancel</p>
                                        </button>
                                    </CancelBookingModal>
                                    </div>
                                    
                                </TableCell>
                            </TableRow>
                        ))
                    }

                </TableBody>
            </Table>
        </div>
    )
}

export default MyBookings