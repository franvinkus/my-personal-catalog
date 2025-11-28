
import { sanityClient } from "@/lib/sanityClient";
import Home from '@/app/home/homeClient'
import { Product } from "./type/types";

const productQuery = `*[_type == "product"] | order(name asc)[0..3]{
    "id": _id,
    name,
    details,
    price,
    "imageUrl": imageUrl.asset->url
}`;

export default async function HomeClient(){

    const product: Product[] = await sanityClient.fetch(productQuery);

    return(
      <Home productList={product}/>  
    );
}