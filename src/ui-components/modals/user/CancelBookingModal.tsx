import {
    Dialog,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from 'sonner';
import { ReactNode, useState } from 'react'
import { useCancelBookingMutation } from "@/redux/features/booking/bookingApi";


const CancelBookingModal = ({ children, _id }: { children: ReactNode, _id: string }) => {
    const [open, setOpen] = useState<boolean>(false);

    const [cancelBooking] = useCancelBookingMutation()

    const deleteCategoryFromDb = async () => {
        const data = {
            _id
        }
        const res = await cancelBooking(data);
        if (res?.data?.success) {
            toast.success("Booking canceled successfully.")
        } else {
            toast.error("Something went wrong. Unable to cancel booking.")
        }
        setOpen(false);
    };
return (
    <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle className="text-left">Cancel Booking</DialogTitle>
                </DialogHeader>
                <p className="text-sm">
                    {" "}
                    Are you sure, you want to cancel this booking? The action is
                    irreversible.
                </p>
                <DialogFooter>
                    <div className='flex justify-end'>
                        <button
                            className="bg-red-500 text-white font-semibold px-8 mt-3 py-2 rounded-sm text-sm space-x-2"
                            onClick={deleteCategoryFromDb}
                        >Cancel</button>
                    </div>

                </DialogFooter>
            </DialogContent>
        </Dialog>
  )
}

export default CancelBookingModal