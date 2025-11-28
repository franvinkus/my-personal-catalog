

export default function Footer(){
    return(
        <div className="flex bg-[#C48849] bottom-0 h-25 w-full p-8">

            <div className="flex justify-end w-full">
                <div className="flex flex-col items-start">
                    <div className="mb-1 ml-2">
                        <label>Contact Us:</label>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex relative">
                            <img src={"/pictures/instagrampng-removebg-preview.png"} className="h-7.5 w-10 mr-0.5"/>
                            <img src={"/pictures/whatsapp-removebg-preview.png"} className="h-7.5 w-7.5 mr-0.5"/>
                            <img src={"/pictures/facebook-removebg-preview.png"} className="h-7.5 w-7.5 ml-1"/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}