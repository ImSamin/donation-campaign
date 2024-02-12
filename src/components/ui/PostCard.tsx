"use client";
import Image from "next/image";

import cardImage from "@/assets/Food.png";

const PostCard = ({ data }: { data: any }) => {
  const { title, category } = data;

  return (
    <div className="rounded-lg overflow-hidden shadow-md bg-red-600 bg-opacity-25 my-5 h-full">
      <Image
        src={cardImage}
        alt="card Image"
        className="w-full h-48 object-cover object-center"
        layout="responsive"
        width={1920} 
        height={1080} 
      />
      <div className="p-4 flex   flex-col h-full">
        <p className="text-sm w-1/2 text-red-600 text-center bg-red-600 bg-opacity-50 rounded-full inline-block px-3 py-1  uppercase font-semibold tracking-wide">
          {category}
        </p>
        <h2 className="mt-2 px-2 text-red-500 text-xl font-semibold">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default PostCard;
