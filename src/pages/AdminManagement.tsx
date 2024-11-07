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
    <div className="min-h-screen flex flex-col items-center bg-gradient text-colorText m-3 rounded-lg">
      {/* Header */}
      <header className="max-w-3xl w-full mt-12 mb-8 text-center">
        <h1 className="text-4xl font-bold">Create New Admin Account</h1>
        <p className="mt-3 text-sm ">
          Fill out the form below to add a new admin user. Make sure all information is accurate and meets platform guidelines.
        </p>
      </header>

      {/* Form */}
      <main className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              type="text"
              {...register("name")}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm  focus:border-indigo-500"
              placeholder="Admin name..."
            />
            {errors?.name && <p className="text-xs text-red-500 mt-1">{errors?.name?.message}</p>}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium ">Email</label>
            <input
              type="email"
              {...register("email")}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-colorText"
              placeholder="Admin email..."
            />
            {errors?.email && <p className="text-xs text-red-500 mt-1">{errors?.email?.message}</p>}
          </div>

          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium ">Phone</label>
            <input
              type="number"
              {...register("phone")}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-colorText"
              placeholder="Phone number..."
            />
            {errors?.phone && <p className="text-xs text-red-500 mt-1">{errors?.phone?.message}</p>}
          </div>

          {/* Address Field */}
          <div>
            <label className="block text-sm font-medium ">Address</label>
            <input
              type="text"
              {...register("address")}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-colorText"
              placeholder="Address..."
            />
            {errors?.address && <p className="text-xs text-red-500 mt-1">{errors?.address?.message}</p>}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium ">Password</label>
            <input
              type="password"
              {...register("password")}
              className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:border-colorText"
              placeholder="Password..."
            />
            {errors?.password && <p className="text-xs text-red-500 mt-1">{errors?.password?.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 font-semibold  hover:text-white bg-gradient hover:bg-colorBg rounded-md transition duration-300"
          >
            Create Admin Account
          </button>
        </form>
      </main>
    </div>
  )
}

export default AdminManagement