import { useForm, SubmitHandler } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
// import { ReactNode } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useCreateFacilityMutation } from "@/redux/features/facility/facilityApi";
import { TFacility } from "@/types/facility.type";
import { facilitySchema } from "@/schemas/facility.schema";

const CreateFacility = () => {
    const [createFacility] = useCreateFacilityMutation();

    const { register, handleSubmit, reset, formState: { errors } } = useForm<TFacility>({ resolver: zodResolver(facilitySchema) });
    
    const onSubmit: SubmitHandler<TFacility> = async (data) => {
        const result = await createFacility(data);

        if (result?.data?.success) {
            toast.success("Facility created successfully.");
            reset({
                name: "",
                location: "",
                pricePerHour: 0,
                image: "",
                description: ""
            });
        } else {
            toast.error("Please fill all fields. All fields are required. Otherwise, something went wrong, please contact the support.");
        }
    };
  return (
    <div className="min-h-screen flex flex-col bg-color-primary m-3 w-full rounded-lg text-colorText">
    <header className="bg-gradient  p-7 rounded-lg">
        <div className=" mx-auto">
            <h1 className="text-2xl font-bold">Add New Facility</h1>
            <p className="text-sm mt-1">Provide details about the sports facility you want to add.</p>
        </div>
    </header>

    <main className="w-full mx-auto p-6 flex flex-col lg:flex-row gap-10">
        {/* Sidebar (optional) */}
        <aside className="lg:w-1/4 bg-white shadow rounded-lg p-4 border border-gray-200">
    <h2 className="font-semibold mb-3">Instructions</h2>
    <p className="text-sm mb-2">
        Please follow the guidelines below to add a new facility accurately and ensure it meets platform standards:
    </p>
    <ul className="list-disc pl-4 space-y-2 text-sm">
        <li>
            <strong>Name:</strong> Enter the official name of the facility. Avoid using symbols or unnecessary special characters.
        </li>
        <li>
            <strong>Location:</strong> Provide a specific and clear location. Avoid using vague descriptions; instead, specify the city or area if possible.
        </li>
        <li>
            <strong>Price per Hour:</strong> Input only numeric values (e.g., 50, 100). Do not include currency symbols; the system will handle formatting.
        </li>
        <li>
            <strong>Image URL:</strong> Paste a valid URL link to an image of the facility. Ensure the link is direct and accessible; do not enter descriptive text or add any symbols. The image should accurately represent the facility and be of high quality.
        </li>
        <li>
            <strong>Description:</strong> Provide a concise but informative description of the facility, covering its features, availability, and any unique aspects. Use full sentences, avoid all-caps, and keep the text professional.
        </li>
    </ul>
    <p className="text-sm mt-4">
        <strong>Note:</strong> All fields are required. Please double-check your entries for accuracy before submission to ensure that your listing meets the platform's standards.
    </p>
</aside>


        {/* Main Form Section */}
        <section className="lg:w-3/4 bg-white shadow rounded-lg p-6 border border-gray-200">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-6">
                    {/* Name Field */}
                    <div className="space-y-1">
                        <label className="text-sm font-semibold">Name</label>
                        <input
                            type="text"
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register("name")}
                            placeholder="Enter facility name"
                        />
                        {errors.name && <p className="text-red-500 text-xs">{errors.name.message}</p>}
                    </div>

                    {/* Location Field */}
                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-">Location</label>
                        <input
                            type="text"
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register("location")}
                            placeholder="Facility location"
                        />
                        {errors.location && <p className="text-red-500 text-xs">{errors.location.message}</p>}
                    </div>

                    {/* Price Per Hour Field */}
                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-">Price Per Hour</label>
                        <input
                            type="number"
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register("pricePerHour", { valueAsNumber: true })}
                            placeholder="Enter price per hour"
                        />
                        {errors.pricePerHour && <p className="text-red-500 text-xs">{errors.pricePerHour.message}</p>}
                    </div>

                    {/* Image URL Field */}
                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-">Image URL</label>
                        <input
                            type="text"
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register("image")}
                            placeholder="URL of facility image"
                        />
                        {errors.image && <p className="text-red-500 text-xs">{errors.image.message}</p>}
                    </div>

                    {/* Description Field */}
                    <div className="space-y-1">
                        <label className="text-sm font-semibold text-">Description</label>
                        <Textarea
                            className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            {...register("description")}
                            placeholder="Enter a short description of the facility"
                        />
                        {errors.description && <p className="text-red-500 text-xs">{errors.description.message}</p>}
                    </div>
                </div>

                <div className="mt-6">
                    <Button
                        type="submit"
                        className="w-full text-base bg-gradient p-3 rounded-md font-bold hover:bg-colorText text-colorText hover:text-white transition"
                    >
                        Create Facility
                    </Button>
                </div>
            </form>
        </section>
    </main>
</div>
  )
}

export default CreateFacility