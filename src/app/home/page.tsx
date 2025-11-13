"use client";
import { useState } from "react";
import Navbar from "@/component/navbar";
import Footer from "@/component/footer";
import ProductCard from "@/component/productCard";
import { Product } from "../type/types";
import Link from "next/link";

var images = [
 "/pictures/WinnieThePoohDancingGangnam.gif",
 "/pictures/ash-baby.gif",
 "/pictures/Dancing Lizard GIF - Dancing Lizard Dancing Lizard - Discover & Share GIFs (1).gif",
];

interface HomeProps {
  productList: Product[];
}

export default function Home(props: HomeProps) {

  var [count, setCount] = useState(0);
  var [currentIndex, setcurrentIndex] = useState(0);

  const counting = () => {
    setCount(count + 1);
    console.log(count + 1);
  }

  const handleNext = () => {
    var newIndex = (currentIndex + 1) % images.length;
    setcurrentIndex(newIndex);
  }

  const handlePrev = () => {
    var newIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
    setcurrentIndex(newIndex);
  }

  const handleLog = (id: string) => {
    console.log(id);
  }

//   const productList = [
//   {
//     id: 1, 
//     name: "Kalung Indah",
//     details: "Sangat cantik dan berkilau.",
//     price: 211000,
//     imageUrl: "/pictures/icegif-1617.gif"
//   },
//   {
//     id: 2,
//     name: "Cincin Emas",
//     details: "Terbuat dari emas 24 karat.",
//     price: 1500000,
//     imageUrl: "/pictures/bauu.gif"
//   },
//   {
//     id: 3,
//     name: "Gelang Perak",
//     details: "Desain minimalis dan modern.",
//     price: 450000,
//     imageUrl: "/pictures/icegif-dog.gif" 
//   },
//   {
//     id: 4,
//     name: "Gelang silver",
//     details: "Desain minimalis dan modern.",
//     price: 550000,
//     imageUrl: "/pictures/Screenshot 2024-10-04 235311.png" 
//   },
//   {
//     id: 5,
//     name: "Gelang emas",
//     details: "Desain minimalis dan modern.",
//     price: 1250000,
//     imageUrl: "/pictures/Screenshot 2024-10-13 235326.png" 
//   }
// ];

  return (
    <div className="h-full">
      <Navbar/>
      <div className="flex border-2 border-blue-700 justify-center">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="h-[700px] w-7xl content-center">
              <img src={images[currentIndex]} alt="Contoh" style={{objectFit: "cover"}} className="opacity-30 h-full w-full object-cover"/>
              <div className="absolute flex flex-col z-50 bottom-0 w-full items-center">
                <label className="text-black">lorem ipsum</label>
                <div className="space-x-3">
                  {images.map((_, index) => (
                    <button
                      key = {index}
                      onClick={() => setcurrentIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${currentIndex === index ? 'bg-black' : 'bg-gray-600'} `}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="grid grid-cols-4 gap-8 hover:cursor-pointer">
                {props.productList.map((productList) => (
                  <Link
                  key={productList.id}
                  href={`/product/${productList.id}`}
                  onClick={() => handleLog(productList.id)}
                  >
                    <ProductCard
                    key={productList.id}
                    {...productList}
                    />
                  </Link>
                ))}
            </div>
          </div>

          <div className="text-white text-9xl">
            JUST AN EXAMPLE
          </div>

        </div>
      </div>
      <Footer/>

    </div>
  );
}
