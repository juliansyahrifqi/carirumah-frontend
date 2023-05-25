"use client";

import React, { useState } from "react";
import ButtonSidebar from "../Button/ButtonSidebar";
import Image from "next/image";
import Logo from "/public/logo.svg";
import { BsBookmark, BsCart2 } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Button from "../Button";

const menus = [
  { name: "Home", href: "/" },
  { name: "Type",  href: "/type" },
  { name: "Explore", href: "/explore" },
  { name: "Best Sales", href: "/best-sales" },
];

export default function Navbar() {
  const [ sidebarOpen, setSidebarOpen ] = useState<boolean>(false);
  const [loginStatus, setLoginStatus ] = useState<boolean>(true);

  const handleSidebarOpen = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const pathname = usePathname();

  return (
    <>
      <nav className="flex justify-between items-center pt-10 px-6 md:px-12">
        <div className="flex gap-20 items-center font-sfpro">
          <Link href="/" className="hidden md:block">
            <Image src={Logo} alt="Botaniture Logo" width={45} height={45} />
          </Link>

          <ButtonSidebar handleSidebarOpen={handleSidebarOpen}/>
          
          <div className="hidden md:flex md:gap-10">
            {menus.map((menu, i) => {
              return (
                <Link href={menu.href} key={i}>
                  <span className={`text-sm text-primary ${pathname === menu.href ? 'font-bold' : 'font-medium'}`}>
                    {menu.name}
                  </span>
                  {pathname === menu.href && (
                    <hr className="w-5 border border-primary mx-auto"/>
                  )} 
                </Link>
              );
            })}
          </div>
        </div>

        <div>
          {loginStatus ? (
            <div className="flex gap-2 items-center">
              <p className="text-sm text-black-secondary">Hi, Gilang</p>
              <div className="bg-primary rounded-full w-10 h-10"></div>
            </div>
          ) : (
            <Button title="Login" url="/login" />
          )}
        </div>
      </nav>

      
      <nav className={`z-50 fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm pt-12 pb-4 px-10 bg-gray-50 border-r overflow-y-auto ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-all ease-in-out duration-500`}>
        <div className="flex items-center mb-8">
          <a className="mr-auto text-3xl font-bold leading-none" href="/">
            <Image src={Logo} width={200} alt="Botaniture Logo" className="w-16"/>
          </a>
          <button className="navbar-close" onClick={handleSidebarOpen}>
            <svg
              width="30"
              height="30"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 30L30 1M1 1L30 30"
                stroke="black"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li className="mb-2">
              <Link
                className={`${
                  pathname === "/"
                    ? "bg-primary bg-opacity-20 text-primary rounded-lg"
                    : " transition-colors duration-500 cursor-pointer"
                } block p-4 text-lg font-medium text-primary hover:bg-primary hover:bg-opacity-20 hover:text-primary hover:rounded-lg font-roboto`}
                href="/"
              >
                Home
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className={`${
                  pathname === "/belanja"
                    ? "bg-primary bg-opacity-20 text-blue-600 rounded-lg"
                    : " transition-colors duration-500 cursor-pointer"
                } block p-4 text-lg font-medium text-primary hover:bg-primary hover:bg-opacity-20 hover:text-primary hover:rounded-lg font-roboto`}
                href="/belanja"
              >
                Type
              </Link>
            </li>
            <li className="mb-2">
              <Link
                className={`${
                  pathname === "/blog"
                    ? "bg-primary bg-opacity-20 text-blue-600 rounded-lg"
                    : " transition-colors duration-500 cursor-pointer"
                } block p-4 text-lg font-medium text-primary hover:bg-primary hover:bg-opacity-20 hover:text-primary hover:rounded-lg font-roboto`}
                href="/blog"
              >
                Best Sales
              </Link>
            </li>
          </ul>
        </div>
        <div className="mt-auto">
          <div className="pt-6 flex justify-center align-center"></div>
          <p className="my-4 text-sm text-center text-gray-400 font-normal font-roboto">
            <span>Copyright © Cari Rumah 2023</span>
          </p>
        </div>
      </nav>

    </>
  );
}