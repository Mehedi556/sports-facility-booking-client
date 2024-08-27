import { z } from "zod";

export const userSchema = z.object({
    name: z.string().min(1, "User name is required."),
    email: z.string().min(1, "User email is required."),
    password: z.string().min(1, "Password is required."),
    phone : z.string().min(1, "Phone number is required."),
    address : z.string().min(1, "Address number is required."),
    // email: z.string({ required_error: "User email is required." }),
    // password: z.string({ required_error: "Password is required." }),
    // phone: z.string({ required_error: "Phone number is required." }),
    // address: z.string({ required_error: "User address is required." })
    
})