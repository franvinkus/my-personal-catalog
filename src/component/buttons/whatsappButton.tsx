"use client";
import { useRouter } from "next/navigation";

interface WhatsappOrder{
    link: string,
}

export default function WhatsappButton({link}: WhatsappOrder){

    return (
        <div className="flex items-center border-2 border-black rounded-2xl bg-green-500 p-4 h-[60px] w-[170px]">
            <div className="flex flex-row items-center space-x-4">
                <img src={"/pictures/whatsapp-removebg-preview.png"} style={{objectFit: "cover"}} className="h-[30px] w-[35px]"/>
                <a href={link}>Whatsapp</a>
            </div>
        </div>
    );
}