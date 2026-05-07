"use client";
import React, { useState } from "react";
import Image from "next/image";
// import ScrollSmoother from "gsap/ScrollSmoother";
import Link from "next/link";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import routes from "@/src/helper/routes";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" w-full relative z-10 bg-gradient-to-r shadow-lg bg-[#2F3FD4] py-4">
      {/* Desktop Navbar */}
      <div className="section-width ">
        <div className="flex items-center justify-between h-16 rounded-full ">
          {/* Logo and Navigation Links Container */}
          <div className="flex items-center min-w-0 ">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/layout/logo.png"
                alt="Kernel Logo"
                width={350}
                height={400}
                className="w-[150px] sm:w-[150px]  lg:w-[150px] lg:h-[50px] object-contain   flex-shrink-0"
              />
            </Link>
          </div>

          <div className="flex items-center gap-10">
            {/* Desktop Navigation Links */}
            <div className="hidden lg:block ">
              <div className="flex text-white cursor-pointer items-baseline space-x-6 xl:space-x-14">
                <a
                  href={routes.home + "#whykernel"}
                  className="  transition-colors text-sm xl:text-base duration-200 font-medium whitespace-nowrap"
                >
                  Why Kernel
                </a>
                <a
                  href={routes.home +"#corebenefits" }
                  className="  transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                 Core Benefits
                </a>
                <a
                  href={routes.home +"#whatyouget" }
                  className="  transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                 What You Get
                </a>
              
               <a
                  href={routes.home +"#whoithelps" }
                  className="  transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                 Who It Helps
                </a>
                  {/* <a
                  href={routes.home +"#" }
                  className="  transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                 Company
                </a> */}
              
              </div>
            </div>
            

            {/* Desktop Sign Up Button */}
            <div className="hidden lg:block flex-shrink-0">
              <button className="bg-[#1281FF]   text-white px-6 xl:px-8 py-2  transition-all duration-200 font-medium text-sm xl:text-base">
                <a
                  href="#"
                  className="text-white  transition-colors duration-200 font-medium text-sm xl:text-base whitespace-nowrap"
                >
                  Request a Demo{" "}
                </a>
              </button>
            </div>
          </div>

          

          {/* Mobile menu button */}
          <div className="lg:hidden flex-shrink-0">
            <button
              onClick={toggleMenu}
              className="text-white  transition-colors duration-200 p-2"
            >
              {isMenuOpen ? (
                <IoClose className="w-12 h-10 sm:w-5 sm:h-5 text-white" />
              ) : (
                <RxHamburgerMenu className="w-12 h-10 sm:w-5 sm:h-5 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-gradient-to-r from-[#63A9F6] to-[#0D75ED] border-t border-gray-200 text-center">
          <div className="px-4 pt-4 pb-6 space-y-4">
            <a
              href={routes.home + "#"}
              className="block text-white  transition-colors duration-200 font-medium py-2 text-sm"
            >
             Why Kernel
            </a>
            <a
              href={routes.home + "#"}
              className="block text-white  transition-colors duration-200 font-medium py-2 text-sm"
            >
            Core Benefits
            </a>
            <a
              href={routes.home + "#"}
              className="block text-white  transition-colors duration-200 font-medium py-2 text-sm"
            >
              What You Get
            </a>

               <a
              href={routes.home + "#"}
              className="block text-white  transition-colors duration-200 font-medium py-2 text-sm"
            >
              Who It Helps
            </a>
               {/* <a
              href={routes.home + "#"}
              className="block text-white  transition-colors duration-200 font-medium py-2 text-sm"
            >
              Company
            </a> */}
          
            <div className="pt-4">
              <button className="w-full bg-[#1281FF] text-white px-4 py-2 rounded-full  transition-all duration-200 font-medium text-sm">
                <a
                  href="#"
                  className="text-white transition-colors duration-200 font-medium text-sm whitespace-nowrap"
                >
                  Request a Demo
                </a>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;