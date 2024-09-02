import { ReactNode } from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { TBooking } from '@/types/booking.type';


const SeeDetailsModal = ({ children, data }: { children: ReactNode, data: TBooking }) => {
    console.log(data);
    const date = new Date(data?.date);
    const formattedDate = date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
    return (
        <Dialog>
            <DialogTrigger>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='py-2 text-left'>Booking Details</DialogTitle>
                    <DialogDescription>
                        <div>
                            <img className='rounded-md shadow-lg shadow-color-simple p-2' src={data?.facility?.image} alt="" />

                            <div className='p-2 mt-2 text-left'>
                                <p className='font-semibold text-black'>Facility Name: <span className='font-medium text-slate-600'>{data?.facility?.name}</span></p>
                                <p className='font-semibold text-black'>Booked In: <span className='font-medium text-slate-600'>{formattedDate}</span></p>
                                <p className='font-semibold text-black'>Start from: <span className='font-medium text-slate-600'>{data?.startTime}</span></p>
                                <p className='font-semibold text-black'>End in: <span className='font-medium text-slate-600'>{data?.endTime}</span></p>
                                <p className='font-semibold text-black'>Price: <span className='font-medium text-slate-600'>${data?.facility?.pricePerHour} per hour.</span></p>
                                <p className='font-semibold text-black'>Payable Amount: <span className='font-medium text-slate-600'>${data?.payableAmount}</span></p>
                                <p className='font-semibold text-black'>Description: <span className='font-medium text-slate-600'>{data?.facility?.description}</span></p>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    )
}

export default SeeDetailsModal