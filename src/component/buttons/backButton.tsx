"use client";

import { useRouter } from "next/navigation";

export default function BackButton(){

    const router = useRouter();

    return (
        <div>
            <button className="mb-8 text-2xl p-4 border-2 rounded-2xl hover:cursor-pointer hover:bg-[#C48849] hover:border-white hover:text-white" onClick={router.back}>
                {"< Back"}
            </button>
        </div>
    );
}