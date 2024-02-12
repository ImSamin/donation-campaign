import cardImage from "@/assets/Food.png";
import Image from "next/image";

const PostCard = ({ data }: { data: any }) => {
  const { title, category } = data;
  return (
    <div className="  rounded-lg overflow-hidden shadow-md bg-blue-600 bg-opacity-25 my-5">
      <Image
        src={cardImage}
        alt="Card Image"
        className="w-full h-48 object-cover object-center"
      />

      <div className="p-4  ">
        <p className="text-sm text-blue-700 bg-blue-600 bg-opacity-50 rounded-full inline-block px-3 py-1 uppercase font-semibold tracking-wide">
          {category}
        </p>
        <h2 className="mt-2 px-2  text-blue-700 text-xl font-semibold">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default PostCard;
