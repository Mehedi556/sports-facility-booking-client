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
import { useDeleteFacilityMutation } from "@/redux/features/facility/facilityApi";


const DeleteFacilityModal = ({ children, _id }: { children: ReactNode, _id: string }) => {
    const [open, setOpen] = useState<boolean>(false);

    const [deleteFacility] = useDeleteFacilityMutation()

    const deleteProductFromDb = async () => {
        const res = await deleteFacility(_id);
        if (res?.data?.success) {
            toast.success("Facility deleted successfully.")
        } else {
            toast.error("Something went wrong. Unable to delete facility.")
        }
        setOpen(false);
    };
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{children}</DialogTrigger>
            <DialogContent className="sm:max-w-[400px]">
                <DialogHeader>
                    <DialogTitle className="text-left">Delete Facility</DialogTitle>
                </DialogHeader>
                <p className="text-sm">
                    {" "}
                    Are you sure, you want to delete this facility? The action is
                    irreversible.
                </p>
                <DialogFooter>
                    <div className='flex justify-end'>
                        <button
                            className="bg-red-500 text-white font-semibold px-8 mt-3 py-2 rounded-sm text-sm space-x-2"
                            onClick={deleteProductFromDb}
                        >Delete</button>
                    </div>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default DeleteFacilityModal