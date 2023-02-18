"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);

  const pathname = usePathname();

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);
    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const currentUser = {
    id: 1,
    username: "John",
    isSeller: false,
    isloggedIn: false,
  };
  return (
    <div
      className={` ${
        active || pathname !== "/" ? "navbar !bg-white !text-black" : "navbar"
      } `}
    >
      <div className="flex items-center justify-between w-[1400px] px-0 py-5">
        <div className="text-4xl font-bold">
          <Link className="link" href="/">
            <span className="text">fiverr</span>
          </Link>
          <span className="font-bold text-green-600">.</span>
        </div>
        {/* LINKS */}
        <div className="flex items-center font-bold gap-6 font-sans">
          <span className="whitespace-no-wrap cursor-pointer">
            Fiverr Business
          </span>
          <span className="whitespace-no-wrap cursor-pointer">Explore</span>
          <span className="whitespace-no-wrap cursor-pointer">English</span>
          {currentUser?.isSeller && (
            <span className="whitespace-no-wrap cursor-pointer">
              Become a Seller
            </span>
          )}
          {currentUser.isloggedIn ? (
            <div
              className="flex items-center cursor-pointer relative gap-[10px]"
              onClick={() => setOpen(!open)}
            >
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
                className="w-8 h-8 object-cover rounded-full"
              />
              <span className="whitespace-no-wrap">
                {currentUser?.username}
              </span>
              {open && (
                <div className="absolute right-0 p-5 bg-white flex flex-col w-48 font-light text-gray-600 top-[50px] rounded-lg z-50 border border-gray-300">
                  {currentUser.isSeller && (
                    <>
                      <Link className="link" href="/mygigs">
                        Gigs
                      </Link>
                      <Link className="link" href="/add">
                        Add New Gig
                      </Link>
                    </>
                  )}
                  <Link className="link" href="/orders">
                    Orders
                  </Link>
                  <Link className="link" href="/messages">
                    Messages
                  </Link>
                  <Link className="link" href="/">
                    Logout
                  </Link>
                </div>
              )}
            </div>
          ) : (
            <>
              <span className="whitespace-no-wrap cursor-pointer">Sign in</span>
              <Link className="link" href="/register">
                <button
                  className={`${
                    active || pathname !== "/"
                      ? "text-green-600 border-green-600 hover:text-white"
                      : "text-white border-white"
                  }  rounded bg-transparent cursor-pointer border px-3 py-2 hover:bg-green-600 transition duration-300 ease-linear`}
                >
                  Join
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr className="h-0 w-full border-b border-gray-300" />
          <div className="flex justify-between text-gray-600 font-medium w-[1400px] px-[10px] py-3">
            <Link className="link menuLink hover:underline" href="/">
              Graphics & Design
            </Link>
            <Link className="link menuLink hover:underline" href="/">
              Video & Animation
            </Link>
            <Link className="link menuLink hover:underline" href="/">
              Writing & Translation
            </Link>
            <Link className="link menuLink hover:underline" href="/">
              AI Services
            </Link>
            <Link className="link menuLink hover:underline" href="/">
              Digital Marketing
            </Link>
            <Link className="link menuLink hover:underline" href="/">
              Music & Audio
            </Link>
            <Link className="link menuLink hover:underline" href="/">
              Programming & Tech
            </Link>
            <Link className="link menuLink hover:underline" href="/">
              Business
            </Link>
            <Link className="link menuLink hover:underline" href="/">
              Lifestyle
            </Link>
          </div>
          <hr className="h-0 w-full border-b border-gray-300" />
        </>
      )}
    </div>
  );
};

export default Navbar;
