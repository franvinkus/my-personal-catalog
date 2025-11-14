import { sanityClient } from "@/lib/sanityClient";
import { Category, Product } from "../type/types";
import ProductClient from "./productClient";

const categoryQuery = `*[_type == "category"]{
    "id": _id,
    name,
    "slug": slug.current
}`;

const productQuery = `*[_type == "product"] | order(name asc){
    "id": _id,
    name,
    details,
    price,
    "imageUrl": imageUrl.asset->url,
    "categorySlug": category->slug.current
}`;

export default async function ProductList(){

    const [product, categories]: [Product[], Category[]] = await Promise.all ([
        sanityClient.fetch(productQuery),
        sanityClient.fetch(categoryQuery)
    ]);

    return(
        <ProductClient productList={product} categoryList={categories}/>
    );
}