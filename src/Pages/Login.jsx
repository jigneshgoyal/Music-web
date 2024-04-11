import React from "react";
import logo from "../image/logo.png";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ... flex items-center justify-center shrink lg:basis-1/2">
      <div className="w-full max-w-md">
        <div className="rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ... p-[2px]">
          <div className="  bg-black shadow-md rounded-2xl py-8 px-8 ">
            <h1 className="text-3xl font-semibold mb-4 text-white">
              Welcome back!
            </h1>
            <p className="mb-6 text-white">Pleaase login using your account</p>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-white font-bold mb-2 text-sm"
                >
                  USERNAME
                </label>
                <input
                  type="text"
                  id="username"
                  placeholder="Username"
                  className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-white font-bold mb-2 text-sm"
                >
                  PASSWORD
                </label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
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
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
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
                Don't have any account? <Link to={"/signup"}><span className="text-blue-400"> Signup</span> </Link> 
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
