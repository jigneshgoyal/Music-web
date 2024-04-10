import React from 'react'
import guitar from "../image/guitar.jpg"
import { Link } from 'react-router-dom'

function SignUp() {
  return (
    <div>
    <div className="flex justify-evenly bg-black">
      <div className="min-h-screen bg-black flex items-center justify-center  lg:basis-1/2">
        <div className="w-full max-w-md">
          <div className="bg-black flex justify-center  p-10 ">
            <div className="w-10 h-10 rounded-full bg-red-600"></div>
            <div>
              <p className="text-3xl font-bold ml-3 text-white">LEELOOP</p>
            </div>
          </div>
          <div className="shadow-md rounded-lg py-8 px-8 border border-white-500">
            <h1 className="text-3xl font-bold mb-4  text-white">Register</h1>
            <form>
              <div className="flex justify-around">
                <div className="flex items-baseline ">
                  <input type="radio" name="user" />
                  <label
                    htmlFor="ARTIST"
                    className="block text-white font-bold mb-2 text-sm pl-2"
                  >
                    ARTIST
                  </label>
                </div>
                <div className="flex items-baseline ">
                  <input type="radio" name="user" />
                  <label
                    htmlFor="COMPANY"
                    className="block text-white font-bold mb-2 text-sm pl-2"
                  >
                    COMPANY
                  </label>
                </div>
              </div>
              <div className="mb-4 lg:flex lg:justify-between">
                <div>
                  <label
                    htmlFor="E-Mail/Phone number"
                    className="block text-white font-bold mb-2 text-sm"
                  >
                    E-Mail/Phone number
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="username"
                    placeholder=""
                    className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4 lg:flex lg:justify-between">
                <div>
                  <label
                    htmlFor="Name/Prename"
                    className="block text-white font-bold mb-2 text-sm"
                  >
                    Name/Prename
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="username"
                    placeholder=""
                    className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4 lg:flex lg:justify-between">
                <div>
                  <label
                    htmlFor="Birthday"
                    className="block text-white font-bold mb-2 text-sm"
                  >
                    Birthday
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="username"
                    placeholder=""
                    className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4 lg:flex lg:justify-between">
                <div>
                  <label
                    htmlFor="Address"
                    className="block text-white font-bold mb-2 text-sm"
                  >
                    Address
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="username"
                    placeholder=""
                    className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4 lg:flex lg:justify-between">
                <div>
                  <label
                    htmlFor="Country"
                    className="block text-white font-bold mb-2 text-sm"
                  >
                    Country
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="username"
                    placeholder=""
                    className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4 lg:flex lg:justify-between">
                <div>
                  <label
                    htmlFor="Land/postal"
                    className="block text-white font-bold mb-2 text-sm"
                  >
                    Land/postal
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="username"
                    placeholder=""
                    className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4 lg:flex lg:justify-between">
                <div>
                  <label
                    htmlFor="Artistname"
                    className="block text-white font-bold mb-2 text-sm"
                  >
                    Artistname
                  </label>
                </div>
                <div>
                  <input
                    type="text"
                    id="username"
                    placeholder=""
                    className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div className="mb-4 lg:flex lg:justify-between">
                <div>
                  <label
                    htmlFor="Upload Profile Picture"
                    className="block text-white font-bold mb-2 text-sm"
                  >
                    Upload Profile Picture
                  </label>
                </div>
                <div>
                  <input
                    type="file"
                    id="username"
                    placeholder=""
                    className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                  />
                </div>
              </div>
              <div>
                <div className="">
                  <div className="flex items-baseline ">
                    <input type="checkbox" name="" value="" />
                    <label
                      htmlFor=""
                      className="block text-white font-bold mb-2 text-sm pl-2"
                    >
                      &plusmn;Leeloop CONNECT Community 5.- (unique)
                    </label>
                  </div>
                  <div className="flex items-baseline ">
                    <input type="checkbox" name="" value="" />
                    <label
                      htmlFor=""
                      className="block text-white font-bold mb-2 text-sm pl-2"
                    >
                      General terms, Cookie police and conditions read and
                      accepted
                    </label>
                  </div>
                </div>
              </div>
              <div className="mb-6">
                <button
                  type="submit"
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline w-full"
                >
                  SIGN UP
                </button>
              </div>
            </form>
            <div className="mt-6 flex items-baseline">
              <span
                htmlFor=""
                className="block text-white font-bold mb-2 text-sm pl-2"
              >
                Already have an account ?
              </span>
              <span>
                <a
                  href="/reset"
                  class="inline-block align-baseline font-bold text-sm text-red-500"
                >
                  &nbsp;LOGIN
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:inline lg:mt-28">
        <img className="" src={guitar} alt="" />
      </div>
    </div>
  </div>
  )
}

export default SignUp
