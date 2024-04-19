import { React, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function SignUp() {
  const [isChecked, SetIsChecked] = useState()
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm(formData);
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Form submitted:", formData);
    }
    const result = await axios.post(
      "http://localhost:8080/api/v1/users/register/",
      formData
    );
    alert("You are registered sucessfully");
  };

  const validateForm = (data) => {
    let errors = {};
    if (data.username.length < 3) {
      errors.username = "Username must be at least 3 characters long.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.email = "Invalid email address.";
    }
    if (data.password.length < 6) {
      errors.password = "Password must be at least 6 characters long.";
    }
    if (data.password !== data.confirmPassword) {
      errors.confirmPassword = "Passwords do not match.";
    }
    return errors;
  };
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-600 flex items-center justify-center shrink lg:basis-1/2">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... p-[2px]">
          <div className="  bg-slate-800 shadow-md rounded-2xl py-8 px-8 ">
            <h1 className="text-3xl font-semibold mb-4 text-white">Sign Up</h1>
            <p className="mb-6 text-white">Pleaase create your account</p>
            <form onSubmit={handleSubmit}>
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
                  value={formData.username}
                  className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                  required
                />
                {errors.username && (
                  <span className="text-white">{errors.username}</span>
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
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="text-white">{errors.email}</span>
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
                  value={formData.password}
                  className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                />
                {errors.password && (
                  <span className="text-white">{errors.password}</span>
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
                  value={formData.confirmPassword}
                  className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <span className="text-white">{errors.confirmPassword}</span>
                )}
              </div>
              <div className="flex gap-2 items-baseline ">
                <div>
                  <input type="checkbox" name="" value="" checked={isChecked} onChange={() => SetIsChecked(!isChecked)}/>
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
                  disabled={!isChecked}
                >
                  Sign Up
                </button>
              </div>
            </form>
            <div className="flex items-center justify-between">
              <p
                href="/reset"
                class="inline-block align-baseline font-bold text-sm text-white"
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
