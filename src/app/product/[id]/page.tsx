import { Product } from "@/app/type/types";
import Footer from "../../../component/footer";
import Navbar from "../../../component/navbar";
import { sanityClient } from "@/lib/sanityClient";
import BackButton from "@/component/buttons/backButton";
import WhatsappButton from "@/component/buttons/whatsappButton";

type Props = {
  params: Promise<{ id: string }>
}

const productQuery = `*[_type == "product" && _id == $id][0]{
    "id": _id,
    name,
    details,
    price,
    "imageUrl": imageUrl.asset->url
}`; 

export default async function ProductDetail({params}: Props){
    const { id } = await params;

    const product: Product = await sanityClient.fetch(
        productQuery,
        { id: id}
    )
    
    if(!product){
        return(
            <div className="h-full">
            <Navbar/>
                <div className="mt-[120px] mb-5">
                    <div className="flex justify-center text-4xl">
                    No Data
                    </div>
                </div>
            <Footer/>
        </div>
        )
    }

    const phoneNumber = "087884296811";
    const message = `Hello, I'm Interested in ${product.name} with the price ${product.price.toLocaleString('id-ID')}`;
    const link = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; 


    return (
        <div className="h-full">
            <Navbar/>
                <div className="mt-[120px] mb-5 p-8">
                    <BackButton/>
                    <div>
                        <div className="flex flex-row">
                            <img src={product.imageUrl} style={{objectFit: "cover"}} className="h-[470px] w-[450px] rounded-2xl mr-4 border-2 border-gray-600" />
                            <div className="flex flex-col space-y-4 p-4">
                                <label className="text-7xl ">{product.name}</label>
                                <label className="text-4xl">{product.details}</label>
                                <label className="text-3xl">Rp. {product.price.toLocaleString('id-ID')}</label>
                                <label className="text-xl">Order Now!!</label>

                                <div>
                                    <WhatsappButton
                                    link={link}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <Footer/>
        </div>
    );
}