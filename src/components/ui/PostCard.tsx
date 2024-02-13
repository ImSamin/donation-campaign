"use client";
import Image from "next/image";

const PostCard = ({ data, color }: any) => {
  const { title, category, image } = data;

  return (
    <div className="rounded-lg overflow-hidden shadow-md   my-5 h-full">
      <Image
        src={image}
        alt="card Image"
        className="w-full h-48 object-cover object-center"
        layout="responsive"
        width={1920}
        height={1080}
      />
      <div
        className={`p-4 flex bg-${color}-600 bg-opacity-50  flex-col h-full`}
      >
        <p
          className={`text-sm w-1/2 text-${color}-600 bg-gray-600 text-center bg-opacity-25 rounded-full inline-block px-3 py-1  uppercase font-semibold tracking-wide`}
        >
          {category}
        </p>
        <h2 className={`mt-2 px-2 text-${color}-600 text-xl font-semibold`}>
          {title}
        </h2>
      </div>
    </div>
  );
};

export default PostCard;
