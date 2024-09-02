import { useLoginMutation } from "@/redux/features/auth/authApi";
import { setUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { TLogin } from "@/types/login.type"
import { verifyToken } from "@/utils/verifyToken";
import { SubmitHandler, useForm } from "react-hook-form"
import { 
    NavLink, 
    useNavigate 
} from "react-router-dom"
import { toast } from "sonner";


const Login = () => {
const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();

    const {
        register,
        handleSubmit,
        reset
        // formState: { errors },
    } = useForm<TLogin>()
    const onSubmit: SubmitHandler<TLogin> = async (data) => {
        const toastId = toast.loading('Logging in');

        try {
            const res = await login(data);
            console.log(res);
            const user = verifyToken(res?.data?.token)
            dispatch(setUser({
                user,
                token: res?.data?.token
            }))
            toast.success('Logged in', { id: toastId, duration: 2000 })
            navigate(`/${res?.data?.data?.role}`)
            reset({
                email: '',
                password: ''
            })

        } catch (error) {
            console.log(error);
            toast.error('Something went wrong', { id: toastId, duration: 2000 })
        }
        
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient">

            <div className="bg-white p-4 sm:p-8 m-3 sm:m-0 rounded-lg shadow-lg w-full max-w-sm">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Login</h2>

                <form onSubmit={handleSubmit(onSubmit)} action="#" method="POST" className="space-y-5">
                    <div className="">
                        <input type="email" required {...register("email")}
                            className="peer w-full px-4 py-3 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500" placeholder="Your email..." />
                    </div>

                    <div className="">
                        <input type="password" required {...register("password")}
                            className="peer w-full px-4 py-3 text-gray-900  bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" placeholder="Password..." />
                    </div>

                    <button type="submit"
                        className="w-full px-4 py-3 font-semibold text-white bg-gradient hover:bg-hover-gradient rounded-lg  transition ease-in-out duration-300">Sign
                        In</button>


                    <p className="text-xs font-light text-gray-500 text-center">
                        Don’t have an account yet? <NavLink to="/signup" className="text-sm font-medium text-blue-500 hover:underline ">Sign up</NavLink>
                    </p>
                </form>
            </div>

        </div>
    )
}

export default Login