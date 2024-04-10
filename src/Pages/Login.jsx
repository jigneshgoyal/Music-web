import React from "react";
import guitar from "../image/guitar.jpg"

function Login() {
  return (
    <div className="flex justify-evenly bg-black" >
    <div className="min-h-screen bg-black flex items-center justify-center shrink lg:basis-1/2">
 
    <div className="w-full max-w-md">
    <div className="bg-black flex justify-center  p-10 ">
            <div className="w-10 h-10 rounded-full bg-red-600"></div>
            <div>
              <p className="text-5xl font-bold ml-3 text-white">LEELOOP</p>
            </div>
          </div>
      <div className="shadow-md rounded-lg py-8 px-8 border border-white-500">
        <h1 className="text-3xl font-semibold mb-4 text-white">
          Welcome back!
        </h1>
        <p className="mb-6 text-white">Pleaase login using your account</p>
        <form >
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
          <div className="mb-6">
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
          <div className="mb-6">
            <button
              type="submit"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
            >
              LOGIN
            </button>
          </div>
          <div className="flex items-center justify-between">
            <a
              href="/reset"
              class="inline-block align-baseline font-bold text-sm text-white"
            >
              Forgot your password?
            </a>
            <a
              href="/reset"
              className="inline-block align-baseline font-bold text-sm text-red-700"
            >
              Reset Here
            </a>
          </div>
        </form>
        <div className="mt-6">
          <button
            type="submit"
            className="bg-transparent text-red-700 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full border border-white-500"
          >
            CREATE AN ACCOUNT
          </button>
        </div>
      </div>
    </div>
    </div>
    <div className="hidden lg:inline">
    <img  className="" src={guitar} alt="" />
    </div>
    </div>
  );
}

export default Login;
