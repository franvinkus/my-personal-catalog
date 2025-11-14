"use client";

import Navbar from "@/component/navbar";
import { Product, Category } from "../type/types";
import Footer from "@/component/footer";
import Link from "next/link";
import ProductCard from "@/component/productCard";
import { useState } from "react";

interface ProductProps{
    productList: Product[];
    categoryList: Category[];
}

export default function ProductClient(props: ProductProps){

      const [searchTerm, setSearchTerm] = useState("");
      const [activeCategory, setActiveCategory] = useState("all");

    if(!props){
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

    const filteredProducts = props.productList.filter((product) => {
        if(activeCategory == "all") return true;
        return product.categorySlug === activeCategory; 
    })
    .filter((product) => {
        return product.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    

    return(
        <div>
            <Navbar/>
                <div className="mt-[120px] mb-5 p-8">

                    <div className="flex flex-row space-x-4 justify-center">
                        <input  
                        type="text"
                        placeholder="Search Product.."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="p-3 border-2 rounded-2xl border-gray-600"
                        />

                        <div className="flex justify-center space-x-2">
                            <button 
                            className={`p-3 border-2 rounded-2xl hover:cursor-pointer ${activeCategory === "all"? 'text-white bg-[#C48849]' : ''}`}
                            onClick={() => setActiveCategory("all")}>
                                All
                            </button>
                            {props.categoryList.map((categories) => (
                                <button 
                                key={categories.id}
                                className={`p-3 border-2 rounded-2xl hover:cursor-pointer ${activeCategory === categories.slug? 'text-white bg-[#C48849]' : ''}`}
                                onClick={() => setActiveCategory(categories.slug)}>
                                    {categories.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="mt-16">
                        {filteredProducts.length === 0 ? (
                        <div className="grid grid-cols-4 gap-8 hover:cursor-pointer">
                            {props.productList.map((productList) => (
                                <Link
                                key={productList.id}
                                href={`/product/${productList.id}`}
                                >
                                <ProductCard
                                key={productList.id}
                                {...productList}
                                />
                                </Link>
                            ))}
                        </div>
                        ) : ( 
                        <div className="grid grid-cols-4 gap-8 hover:cursor-pointer">
                            {filteredProducts.map((product) => (
                                <Link
                                key={product.id}
                                href={`/product/${product.id}`}
                                >
                                <ProductCard
                                key={product.id}
                                {...product}
                                />
                                </Link>
                            ))}
                        </div>
                        )}
                    </div>
                </div>
            <Footer/>
        </div>
    );
}