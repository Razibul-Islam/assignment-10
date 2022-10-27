import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assest/logo.png";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  const { user, logout } = useContext(AuthContext);
  // console.log(user);
  const handlelogout = () => {
    logout()
      .then(() => {})
      .catch((error) => {});
  };

  return (
    <nav className="w-full bg-purple-500 shadow sticky top-0 pb-3 z-50">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link className="flex items-center" to="/">
              <img src={logo} style={{ height: "40px" }} alt="" />
              <h2 className="text-2xl font-bold ">Teach Density</h2>
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div className="">
          <div
            className={`flex-1 justify-self-center pb-3  mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <div className="md:flex md:justify-between block">
              <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                <li className="text-gray-700 text-xl pr-4">
                  <Link to="/course">Courses</Link>
                </li>
                <li className="text-gray-700 text-xl pr-4">
                  <Link to="/faq">FAQ</Link>
                </li>
                <li className="text-gray-700 text-xl pr-4">
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
              <div className="mt-3 space-y-2  block">
                {!user?.uid ? (
                  <>
                    <Link
                      to="/login"
                      className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
                    >
                      Sign in
                    </Link>
                    <Link
                      to="/register"
                      className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
                    >
                      Sign up
                    </Link>
                  </>
                ) : (
                  <>
                    <div className="flex flex-col-reverse md:flex-row-reverse md:items-center ">
                      <div className="flex md:flex-row-reverse items-center mt-5 md:mt-0">
                        <Link
                          className="group max-w-max relative mx-1 flex flex-col items-center justify-center rounded-full border border-gray-500 p-1 text-gray-500 hover:bg-gray-200 hover:text-gray-600"
                          href="#"
                        >
                          <img
                            src={user?.photoURL ? user?.photoURL : <FaUser />}
                            className="h-12 rounded-full md:ml-5"
                            alt=""
                            title={user.displayName}
                          />
                          <div className="[transform:perspective(50px)_translateZ(0)_rotateX(10deg)] group-hover:[transform:perspective(0px)_translateZ(0)_rotateX(0deg)] absolute bottom-0 mb-6 origin-bottom transform rounded text-white opacity-0 transition-all duration-300 group-hover:opacity-100">
                            <div className="flex max-w-xs flex-col items-center">
                              <div className="rounded bg-gray-900 p-2 text-xs text-center shadow-lg">
                                {user.displayName}
                              </div>
                              <div className="clip-bottom h-2 w-4 bg-gray-900"></div>
                            </div>
                          </div>
                        </Link>

                        <div className="md:text-right ml-5 md:ml-0">
                          <h4 className="text-xl">{user.displayName}</h4>
                          <h4 className="text-sm">{user.email}</h4>
                        </div>
                      </div>
                      <div className="mr-5">
                        <button
                          onClick={handlelogout}
                          className="py-2 px-3 rounded-md bg-gray-600"
                        >
                          Sign Out
                        </button>
                      </div>
                    </div>
                  </>
                )}
              </div>
              <label
                htmlFor="Toggle1"
                className=" md:mt-0 mt-3 inline-flex items-center space-x-4 cursor-pointer ml-2 dark:text-gray-100"
              >
                <label
                  htmlFor="AcceptConditions"
                  className="relative h-8 w-14 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    id="AcceptConditions"
                    className="peer sr-only [&:checked_+_span_svg[data-unchecked-icon]]:hidden [&:checked_+_span_svg[data-checked-icon]]:block"
                  />

                  <span className="absolute inset-0 z-10 m-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white text-gray-400 transition peer-checked:translate-x-6 peer-checked:text-green-600">
                    <svg
                      data-unchecked-icon
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>

                    <svg
                      data-checked-icon
                      xmlns="http://www.w3.org/2000/svg"
                      className="hidden h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>

                  <span className="absolute inset-0 rounded-full bg-gray-300 transition peer-checked:bg-green-500"></span>
                </label>
                <span>Dark</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
