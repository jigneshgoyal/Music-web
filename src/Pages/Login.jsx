import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const naviagte = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    const res = await axios.post(
      "http://localhost:8080/api/v1/users/login",
      formData
    );    
    alert("You are login sucessfully");
    naviagte("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 flex items-center justify-center shrink lg:basis-1/2">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-gradient-to-r via-purple-500 from-indigo-500 to-pink-500 ... p-[4px]">
          <div className="  bg-slate-800 shadow-md rounded-2xl py-8 px-8 ">
            <h1 className="text-3xl font-semibold mb-4 text-white">
              Welcome back!
            </h1>
            <p className="mb-6 text-white">Pleaase login using your account</p>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-white font-bold mb-2 text-sm"
                >
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                />
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
                  value={formData.password}
                  className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                />
              </div>

              <div className="mb-4">
                <a
                  href="/reset"
                  class="inline-block align-baseline font-bold text-sm text-white"
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
              <p
                href="/reset"
                class="inline-block align-baseline font-bold text-sm text-white"
              >
                Don't have any account?{" "}
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
