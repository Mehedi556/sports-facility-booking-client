import { useForm, SubmitHandler } from "react-hook-form"
import { Textarea } from "@/components/ui/textarea";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ReactNode, useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useUpdateFacilityMutation } from "@/redux/features/facility/facilityApi";
import { TFacility } from "@/types/facility.type";
import { facilitySchema } from "@/schemas/facility.schema";


const UpdateFacilityModal = ({ children, data:oldData }: { children: ReactNode, data: TFacility }) => {
    const [open, setOpen] = useState(false);

    const [updateFacility] = useUpdateFacilityMutation();


    const {
        register,
        handleSubmit,
        reset,
        // setValue,
        formState: { errors },
    } = useForm<TFacility>({ resolver: zodResolver(facilitySchema) })

    useEffect(() => {
        reset(oldData)
    }, [oldData])

    const onSubmit: SubmitHandler<TFacility> = async (data) => {

        const result = await updateFacility({...data, _id: oldData?._id});

        if (result?.data?.success) {
            setOpen(false);
            toast.success('Facility updated successfully.');
        } else {
            toast.error('Please fill all the fields. Because all are required. Otherwise something went wrong, please contact to the author please.')
        }
    }
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                {children}
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Update facility details</DialogTitle>
                    <DialogDescription></DialogDescription>
                </DialogHeader>
                <div>
                    <div onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-2 space-y-1">
                            <label htmlFor="" className="text-xs font-semibold">
                                Name
                            </label>
                            <input
                                type="text"
                                placeholder=""
                                className="text-sm focus:outline-color-primary pl-4 pr-4 py-2 border border-color-simple rounded w-full"
                                {...register("name")}
                            />
                            {errors.name && (
                                <p className="text-xs text-red-400 font-bold">
                                    {errors?.name?.message}
                                </p>
                            )}
                        </div>
                            <div className="mb-2 space-y-1">
                                <label htmlFor="" className="text-xs font-semibold">
                                    Location
                                </label>
                                <input
                                    type="text"
                                    placeholder="Type 1 to 5"
                                    className="text-sm focus:outline-color-primary pl-4 pr-4 py-2 border border-color-simple rounded w-full"
                                    {...register("location")}
                                />
                                {errors.location && (
                                    <p className="text-xs text-red-400 font-bold">
                                        {errors?.location?.message}
                                    </p>
                                )}
                                    
                            </div>

                            <div className="mb-2 space-y-1">
                                <label htmlFor="" className="text-xs font-semibold">
                                    Price per hour
                                </label>
                                <input
                                    type="number"
                                    placeholder=""
                                    className="text-sm focus:outline-color-primary pl-4 pr-4 py-2 border border-color-simple rounded w-full"
                                    {...register("pricePerHour", {
                                        valueAsNumber: true,
                                    })}
                                />
                                {errors.pricePerHour && (
                                    <p className="text-xs text-red-400 font-bold">
                                        {errors?.pricePerHour?.message}
                                    </p>
                                )}
                            </div>

                            <div className="mb-2 space-y-1">
                                <label htmlFor="" className="text-xs font-semibold">
                                    Image URL
                                </label>
                                <input
                                    type="text"
                                    placeholder=""
                                    className="text-sm focus:outline-color-primary pl-4 pr-4 py-2 border border-color-simple rounded w-full"
                                    {...register("image")}
                                />
                                {errors.image && (
                                    <p className="text-xs text-red-400 font-bold">
                                        {errors?.image?.message}
                                    </p>
                                )}
                            </div>

                        <div className="mb-5">
                            <label htmlFor="" className="text-xs font-semibold">
                                Description
                            </label>
                            <Textarea
                                placeholder="Type short description about this plant here.."
                                className="text-sm focus:outline-none pl-4 pr-4 py-2 border border-color-simple rounded w-full"
                                {...register("description")}
                            />
                            {errors.description && (
                                <p className="text-xs text-red-400 font-bold">
                                    {errors?.description?.message}
                                </p>
                            )}
                        </div>

                    </div>
                </div>
                <DialogFooter className="">
                    <DialogClose asChild>
                        <Button
                            onClick={handleSubmit(onSubmit)}
                            className="py-2 w-full bg-gradient text-sm font-bold text-white rounded mb-4 hover:bg-hover-gradient transition ease-in-out duration-500 space-x-2 flex items-center justify-center"
                        >
                            Update Facility
                        </Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default UpdateFacilityModal