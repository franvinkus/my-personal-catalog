"use client";
import { useState } from "react";
import Link from "next/link";

interface NavbarProps{
    isFixed?: boolean;
}

export default function Navbar({isFixed = true}: NavbarProps){
    var [isHover, setIsHover] = useState(false);

    
    return(
        <div className={`${isFixed? 'fixed z-50 top-0 w-full' : ''}`}>
            <div className={`flex justify-center p-8 transition-colors ease-in-out duration-800 ${isHover? 'bg-[#C48849]' : ''}`}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
                <div className="absolute top-10 left-10">
                    <label>Your Company Name / logo {"or both"}</label>
                </div>

                <div className="justify-between border-black space-x-10 text-black  p-4"
                >
                    <Link href="/"  className="transition duration-300 hover:cursor-pointer hover:underline hover:text-white">Home</Link>
                    <Link href="../productList" className="transition duration-300 hover:cursor-pointer hover:underline hover:text-white">Products</Link>
                    <Link href="../about" className="transition duration-300 hover:cursor-pointer hover:underline hover:text-white">About</Link>
                </div>
            </div>
        </div>

    );
}