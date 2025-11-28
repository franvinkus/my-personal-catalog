import Footer from "@/component/footer";
import Navbar from "@/component/navbar";

export default function About(){
    return(
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <div className="mt-[200px] mb-5 grow">
                <div className="flex justify-center text-4xl">
                   About Us
                </div>
                <div className="flex font-sans w-full justify-center align-middle">
                    <label className="flex w-250 text-xl ">
                        At Elewery, we believe true elegance doesn't need to be complicated. Our philosophy is simple: to create jewelry that enhances your style, rather than overshadowing it. <br/><br/><br/>
                        Every piece in our collection is thoughtfully designed for the modern woman who values detail. From morning meetings to evening dates, Elewery is here to add just the perfect touch of sparkle—anytime, anywhere. <br/><br/><br/>
                        Elewery. Elegant in every way.

                    </label>

                </div>

            </div>
            <Footer/>
        </div>
    );
}