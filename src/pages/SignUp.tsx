import { useSignupMutation } from "@/redux/features/auth/authApi";
import { userSchema } from "@/schemas/user.schema";
import { TUser } from "@/types/user.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form"
import { NavLink, useNavigate } from "react-router-dom"
import { toast } from "sonner";
import logo from "../assets/logo.png"


const SignUp = () => {
    const navigate = useNavigate();
    const [signup] = useSignupMutation();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<TUser>({ resolver: zodResolver(userSchema) })
    const onSubmit: SubmitHandler<TUser> = async (data) => {
        console.log(errors);
        const toastId = toast.loading('Creating new user...');

        try {
            const res = await signup({ ...data, role: 'user' });

            if (res?.data?.success) {
                toast.success('User created successfully', { id: toastId, duration: 2000 })
                reset({
                    name: '',
                    email: '',
                    phone: '',
                    address: '',
                    password: ''
                })
                navigate('/login')
            }
        } catch (error) {
            console.log(error);
            toast.error('Something went wrong', { id: toastId, duration: 2000 })
        }

    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient text-colorText">

            <div className="bg-white p-4 sm:p-8 m-3 sm:m-0 rounded-lg shadow-lg max-w-md w-full">
                <div className="flex justify-center mb-4">
                    <img src={logo} alt="Project Logo" className="h-16 w-auto" />
                </div>
                <h2 className="text-2xl font-bold mb-6 text-center text-colorText">Sign Up</h2>

                <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-3 sm:space-y-5">
                    <div className="mb-2 space-y-1">
                        <label htmlFor="" className="text-xs font-semibold">Name</label>
                        <input type="text" {...register("name")}
                            className="peer w-full px-4 py-3 text-colorText bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-colorText" placeholder="Your name..." />
                        {
                            errors?.name && (
                                <p className="text-xs text-red-400 font-bold">{errors?.name?.message}</p>
                            )
                        }
                    </div>

                    <div className="mb-2 space-y-1">
                        <label htmlFor="" className="text-xs font-semibold">Email</label>
                        <input type="email" {...register("email")}
                            className="peer w-full px-4 py-3 text-colorText bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-colorText" placeholder="Your email..." />
                        {
                            errors?.email && (
                                <p className="text-xs text-red-400 font-bold">{errors?.email?.message}</p>
                            )
                        }
                    </div>



                    <div className="mb-2 space-y-1">
                        <label htmlFor="" className="text-xs font-semibold">Phone</label>
                        <input type="number" {...register("phone")}
                            className="peer w-full px-4 py-3 text-colorText  bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-colorText transition duration-300" placeholder="Phone..." />
                        {
                            errors?.phone && (
                                <p className="text-xs text-red-400 font-bold">{errors?.phone?.message}</p>
                            )
                        }
                    </div>

                    <div className="mb-2 space-y-1">
                        <label htmlFor="" className="text-xs font-semibold">Address</label>
                        <input type="text" {...register("address")}
                            className="peer w-full px-4 py-3 text-colorText  bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-colorText transition duration-300" placeholder="Address..." />
                        {
                            errors?.address && (
                                <p className="text-xs text-red-400 font-bold">{errors?.address?.message}</p>
                            )
                        }
                    </div>

                    <div className="mb-2 space-y-1">
                        <label htmlFor="" className="text-xs font-semibold">Password</label>
                        <input type="password" {...register("password")}
                            className="peer w-full px-4 py-3 text-colorText  bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-colorText transition duration-300" placeholder="Password..." />
                        {
                            errors?.password && (
                                <p className="text-xs text-red-400 font-bold">{errors?.password?.message}</p>
                            )
                        }
                    </div>







                    <button type="submit"
                        className="w-full px-4 py-3 font-semibold text-colorText bg-gradient rounded-lg  transition duration-300">Sign
                        Up</button>
                    <p className="text-xs font-light text-colorText text-center">
                        Already have an account? <NavLink to="/login" className="text-sm font-medium text-blue-500 hover:underline ">Log In</NavLink>
                    </p>
                </form>
            </div>

        </div>
    )
}

export default SignUp