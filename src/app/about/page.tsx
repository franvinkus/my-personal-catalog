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
                <div>
                    <label className="flex justify-center text-xl">
                        Guk. Guk guk. (Terjemahan: Elegan bertemu pesona harian.) <br/>

                        Woof woof bark, awoo! (Terjemahan: Kami percaya aksesori adalah ekspresi diri.)<br/>

                        Sniff sniff... grrr... tail wag. (Terjemahan: Desain simpel, nyaman, dan hangat.)<br/>

                        Bark bark! Zoomies! (Terjemahan: Cocok buat acara formal maupun santai.)<br/>

                        Awoo. (Terjemahan: Elegan dan apa adanya.)<br/>
                    </label>

                </div>

            </div>
            <Footer/>
        </div>
    );
}