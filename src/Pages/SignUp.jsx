import { useForm } from "react-hook-form";
import { Link, Navigate } from "react-router-dom";
import axios from "axios";
import { useRef } from "react";
import { toast } from "react-toastify";
import { baseUrl } from "../constant";
function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();
  const password = useRef({});
  password.current = watch("password", "");

  const onSubmit = async (data) => {
    try {
      console.log(data)
      const result = await axios.post(
        `${baseUrl}/v1/user/register`,
        data
      );

      if (result.status === 200) {
        toast.success("SignUp Successfully");
        reset();
        Navigate('/login')
      }
    } catch (error) {
      toast.error(error.response.data.message);
      reset();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 flex items-center justify-center shrink lg:basis-1/2">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... p-[2px]">
          <div className="bg-slate-800 shadow-md rounded-2xl py-8 px-8">
            <h1 className="text-3xl font-semibold mb-4 text-white">Sign Up</h1>
            <p className="mb-6 text-white">Please create your account</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-white font-bold mb-2 text-sm"
                >
                  NAME
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Name"
                  {...register("username", {
                    required: "Username is required",
                    minLength: {
                      value: 3,
                      message: "Username must be at least 3 characters long.",
                    },
                  })}
                  className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.username && (
                  <span className="text-white">{errors.username.message}</span>
                )}
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white font-bold mb-2 text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.email && (
                  <span className="text-white">{errors.email.message}</span>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-white font-bold mb-2 text-sm"
                >
                  PASSWORD
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters long.",
                    },
                  })}
                  className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.password && (
                  <span className="text-white">{errors.password.message}</span>
                )}
              </div>
              <div className="mb-6">
                <label
                  htmlFor="confirmPassword"
                  className="block text-white font-bold mb-2 text-sm"
                >
                  CONFIRM PASSWORD
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="••••••••"
                  {...register("confirmPassword", {
                    required: "Please confirm your password",
                    validate: (value) =>
                      value === password.current ||
                      "The passwords do not match",
                  })}
                  className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
                {errors.confirmPassword && (
                  <span className="text-white">
                    {errors.confirmPassword.message}
                  </span>
                )}
              </div>
              <div className="flex gap-2 items-baseline ">
                <div>
                  <input
                    type="checkbox"
                    {...register("terms", { required: true })}
                  />
                </div>
                <div>
                  <label
                    htmlFor=""
                    className="block text-white mb-2 text-sm -translate-y-0.5"
                  >
                    I Agree to the LeeLoop
                  </label>
                </div>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
                  disabled={!watch("terms")}
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="flex items-center justify-between">
              <p
                href="/reset"
                className="inline-block align-baseline font-bold text-sm text-white"
              >
                Already have an account?{" "}
                <Link to={"/login"}>
                  <span className="text-blue-400"> Login</span>{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
