"use client";
import cardImage from "@/assets/Food.png";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const DonationCard = ({ data }: { data: any }) => {
  const [displayedData, setDisplayedData] = useState(data?.slice(0, 4));
  const [showAll, setShowAll] = useState(false);

  const handleSeeAll = () => {
    setDisplayedData(data);
    setShowAll(true);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {displayedData.map((item: any) => (
          <div
            key={item.id}
            className="bg-blue-600 bg-opacity-25 rounded-lg overflow-hidden shadow-md flex"
          >
            {/* Left Side */}
            <div className="w-1/3">
              <Image
                src={cardImage}
                alt="Photo 1"
                className="w-full h-full"
                layout="responsive"
                width={1920} // Set the width of the image
                height={1080} // Set the height of the image
              />
            </div>
            {/* Right Side */}
            <div className="p-4 px-5 w-2/3">
              <p className="text-sm text-blue-700 bg-blue-600 bg-opacity-50 rounded-full inline-block px-3 py-1 uppercase font-semibold tracking-wide">
                {item.category}
              </p>
              <h2 className="mt-2  text-black text-xl font-semibold">
                {item.title}
              </h2>
              <p className="text-blue-700 font-semibold mt-2">$100</p>
              <Link href={`/donation/${item.id}`}>
                <Button className="px-6 bg-blue-700" type="primary">
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      {!showAll && (
        <div className="mx-auto justify-center mt-10 w-20">
          <Button
            className="bg-green-700"
            type="primary"
            onClick={handleSeeAll}
          >
            See All
          </Button>
        </div>
      )}
    </>
  );
};

export default DonationCard;
