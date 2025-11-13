import Footer from "@/component/footer";
import Navbar from "@/component/navbar";

export default function About(){
    return(
        <div className="h-full">
            <Navbar/>
            <div className="mt-[120px] mb-5">
                <div className="flex justify-center text-4xl">
                   About
                </div>
            </div>
            <Footer/>
        </div>
    );
}