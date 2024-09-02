import { z } from "zod";

export const facilitySchema = z.object({
    name: z.string().min(1, "Facility name is required."),
    description: z.string().min(1, "Description is required."),
    location: z.string().min(1, "Location is required."),
    image : z.string().min(1, "Image link is required."),
    pricePerHour : z.number().min(1, "Price is required."),
})