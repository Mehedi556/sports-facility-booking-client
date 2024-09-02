import { useSignupMutation } from "@/redux/features/auth/authApi";
import { userSchema } from "@/schemas/user.schema";
import { TUser } from "@/types/user.type";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";

const AdminManagement = () => {
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
      const res = await signup({ ...data, role: 'admin' });

      if (res?.data?.success) {
        toast.success('New Admin created successfully', { id: toastId, duration: 2000 })
        reset({
          name: '',
          email: '',
          phone: '',
          address: '',
          password: ''
        })
      }
    } catch (error) {
      console.log(error);
      toast.error('Something went wrong', { id: toastId, duration: 2000 })
    }

  }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-300 to-indigo-600">

      <div className="bg-white p-4 sm:p-8 m-3 sm:m-0 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">Create New Admin</h2>

        <form onSubmit={handleSubmit(onSubmit)}>

          <div className="space-y-3 sm:space-y-1">
            <div className="mb-2 space-y-1">
            <label htmlFor="" className="text-xs font-semibold">Name</label>
            <input type="text" {...register("name")}
              className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500" placeholder="Admin name..." />
            {
              errors?.name && (
                <p className="text-xs text-red-400 font-bold">{errors?.name?.message}</p>
              )
            }
          </div>

          <div className="mb-2 space-y-1">
            <label htmlFor="" className="text-xs font-semibold">Email</label>
            <input type="email" {...register("email")}
              className="peer w-full px-4 py-2 text-gray-900 bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none transition duration-300 focus:border-blue-500" placeholder="Admin email..." />
            {
              errors?.email && (
                <p className="text-xs text-red-400 font-bold">{errors?.email?.message}</p>
              )
            }
          </div>

          <div className="mb-2 space-y-1">
            <label htmlFor="" className="text-xs font-semibold">Phone</label>
            <input type="number" {...register("phone")}
              className="peer w-full px-4 py-2 text-gray-900  bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" placeholder="Phone..." />
            {
              errors?.phone && (
                <p className="text-xs text-red-400 font-bold">{errors?.phone?.message}</p>
              )
            }
          </div>

          <div className="mb-2 space-y-1">
            <label htmlFor="" className="text-xs font-semibold">Address</label>
            <input type="text" {...register("address")}
              className="peer w-full px-4 py-2 text-gray-900  bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" placeholder="Address..." />
            {
              errors?.address && (
                <p className="text-xs text-red-400 font-bold">{errors?.address?.message}</p>
              )
            }
          </div>

          <div className="mb-2 space-y-1">
            <label htmlFor="" className="text-xs font-semibold">Password</label>
            <input type="password" {...register("password")}
              className="peer w-full px-4 py-2 text-gray-900  bg-gray-100 border-b-2 border-gray-300 rounded-md focus:outline-none focus:border-blue-500 transition duration-300" placeholder="Password..." />
            {
              errors?.password && (
                <p className="text-xs text-red-400 font-bold">{errors?.password?.message}</p>
              )
            }
          </div>
          </div>

          

          <button type="submit"
            className=" mt-10 w-full px-4 py-3 font-semibold text-white bg-gradient-to-r from-blue-300 to-indigo-700 hover:bg-hover-gradient rounded-lg  transition duration-300">Create New Admin</button>
        </form>
      </div>

    </div>
  )
}

export default AdminManagement