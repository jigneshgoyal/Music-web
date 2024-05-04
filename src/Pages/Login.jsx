import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { baseUrl } from "../constant";

function Login(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { setTokenChanges, setAdminEmailChange } = props;
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (data.email == "admin@gmail.com" && data.password == "123456") {
      localStorage.setItem("adminEmail", data.email)
      toast.success("Admin Login Successfully");
      navigate("/")
      setAdminEmailChange((prev) => !prev);
    } else {
      try {
        const response = await axios.post(
          `${baseUrl}/api/v1/user/login`,
          data
        );
        if (response.status === 200) {
          toast.success("Login Successfully");
          navigate("/");
          const token = response.data.token;
          localStorage.setItem("token", token);
          Cookies.set("token", token);
          setTokenChanges((prev) => !prev);
        }
      } catch (error) {
        toast.error("Please login with correct ID and Password");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 flex items-center justify-center shrink lg:basis-1/2">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-gradient-to-r via-purple-500 from-indigo-500 to-pink-500 ... p-[4px]">
          <div className="  bg-slate-800 shadow-md rounded-2xl py-8 px-8 ">
            <h1 className="text-3xl font-semibold mb-4 text-white">
              Welcome back!
            </h1>
            <p className="mb-6 text-white">Please login using your account</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-white font-bold mb-2 text-sm"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
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
                  className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="text-red-500">Password is required</span>
                )}
              </div>

              <div className="mb-4">
                <a
                  href="/reset"
                  className="inline-block align-baseline font-bold text-sm text-white"
                >
                  Forgot your password?
                </a>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
                >
                  LOGIN
                </button>
              </div>
            </form>
            <div className="flex items-center justify-between">
              <p className="inline-block align-baseline font-bold text-sm text-white">
                Don't have an account?{" "}
                <Link to={"/signup"}>
                  <span className="text-blue-400">Sign Up</span>{" "}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
