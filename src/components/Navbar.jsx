import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Navbar = () => {
  const [loginLogout, setLoginLogout] = useState("Login");
  const navigate = useNavigate("");
  const onlineStatus = useOnlineStatus();

  const handleLoginLogout = () => {
    if (loginLogout === "Login") {
      setLoginLogout("Logout");
    } else {
      setLoginLogout("Login");
    }
  };

  return (
    <nav className="p-4 bg-gray-800 text-white h-32">
      <h1 className=" text-xl text-orange-400 font-bold text-center">
        Online Status: {onlineStatus ? "✅" : "❌"}
      </h1>

      <div className="nav-items mt-4">
        <ul className="flex space-x-4 justify-evenly align-middle">
          <li
            className="hover:text-gray-400 text-2xl"
            onClick={() => {
              navigate("/");
            }}
          >
            Home
          </li>
          <li
            className="hover:text-gray-400 text-2xl  "
            onClick={() => {
              navigate("/about");
            }}
          >
            About us
          </li>
          <li
            className="hover:text-gray-400 text-2xl"
            onClick={() => {
              navigate("/contact");
            }}
          >
            Contact Us
          </li>
          <li
            className="hover:text-gray-400 mr-4 text-2xl"
            onClick={() => {
              navigate("/cart");
            }}
          >
            Cart
          </li>
          <li
            onClick={() => {
              navigate("/res");
            }}
            className="hover:text-gray-400 mr-4 text-2xl"
          >
            Resturent
          </li>
          <li>
            {" "}
            <button
              onClick={handleLoginLogout}
              className="w-24  h-8 rounded-md ml-3  text-black shadow-lg bg-red-100 font-semibold hover:text-white hover:bg-red-300"
            >
              {loginLogout}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
