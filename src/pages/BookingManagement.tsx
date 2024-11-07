/* eslint-disable @typescript-eslint/no-explicit-any */
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useGetAllBookingsForAdminQuery } from "@/redux/features/booking/bookingApi";
import { TBooking } from "@/types/booking.type";

const formatDate = (newDate: any) => {
    const date = new Date(newDate);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return formattedDate
}

const BookingManagement = () => {
    const [page, setPage] = useState(1)

    const limit = 6;
    const queryData = {
        page,
        limit,
    }
    const { data, isLoading } = useGetAllBookingsForAdminQuery(queryData);



    const handleClickPreviousPage = () => {
        return page !== 1 ? setPage((prev: number) => prev - 1) : null;
    };


    const handleClickNextPage = () => {
        return page !== data?.data?.meta?.totalPage ? setPage((prev: number) => prev + 1) : null;
    };

    if (isLoading) {
        return <div className="flex justify-center align-middle items-center w-full h-screen">
            <p>Loading...</p>
        </div>
    }
    return (
        <div className="m-3 bg-gradient rounded-lg text-colorText min-h-screen">
            <div className="px-3">
                <div className="flex justify-between py-3 sm:py-5">
                    <h1 className="text-xl sm:text-2xl font-bold">All Bookings</h1>
                </div>
                <Table className="">
                    <TableCaption className="text-colorText">Recent added bookings.</TableCaption>
                    <TableHeader className="text-xs sm:text-base">
                        <TableRow>
                            <TableHead className=" p-0 text-center font-bold text-colorText">Image</TableHead>
                            <TableHead className=" p-0 text-center pl-1 sm:pl-3 font-bold text-colorText">Facility</TableHead>
                            <TableHead className=" p-0 text-center font-bold text-colorText">User</TableHead>
                            <TableHead className=" p-0 text-center font-bold text-colorText">Email</TableHead>
                            <TableHead className="p-0 text-center  font-bold text-colorText">Payable amount</TableHead>
                            <TableHead className="p-0 text-center  font-bold text-colorText">Date</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody className="text-xs sm:text-base">
                        {
                            data?.data?.result.map((item: TBooking) => (
                                <TableRow className="mb-6" key={item?._id}>
                                    <TableCell className="font-medium p-0 h-14 sm:h-24 w-14 sm:w-24">
                                        <img className="h-14 sm:h-24 w-14 sm:w-24 object-cover object-center" src={item?.facility?.image} alt="" />
                                    </TableCell>
                                    <TableCell className="p-0 text-center pl-1 sm:pl-3">{item?.facility?.name}</TableCell>
                                    <TableCell className="p-0 text-center">{item?.user?.name}</TableCell>
                                    <TableCell className="p-0 text-center">{item?.user?.email}</TableCell>
                                    <TableCell className="p-0 text-center">${item?.payableAmount}</TableCell>
                                    <TableCell className="p-0 text-center ">{formatDate(item?.date)}</TableCell>
                                </TableRow>
                            ))
                        }

                    </TableBody>
                </Table>

                <div className="flex col-span-3 justify-center sm:justify-end py-3">
                    <button onClick={handleClickPreviousPage}>
                        <ArrowLeft size={16} className="text-colorText" />
                    </button>
                    <p className="text-xs mx-2 font-semibold text-colorText">
                        {page}/{data?.data?.meta?.totalPage}
                    </p>
                    <button onClick={handleClickNextPage}>
                        <ArrowRight size={16} className="text-colorText" />
                    </button>
                </div>

            </div>
        </div>
    )
}

export default BookingManagement