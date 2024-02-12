"use client";
import detailsImage from "@/assets/Rectangle 4288.png";
import { sendDonate } from "@/utils/sendDonate";
import { Button } from "antd";
import Image from "next/image";

const SinglePage = ({ data, id }: {data:any, id: string}) => {
  console.log(data);
  const handleDonate = async () => {
    const result = await sendDonate({
      userId: id,
      postId: data.data._id,
      donateAmount: 290,
    });
    console.log(result);
  };
  const { title, description } = data.data;
  return (
    <div className="relative bg-cover h-full ">
      <div className="relative overflow-hidden  rounded">
        <Image
          src={detailsImage}
          alt="Banner"
          className="w-full cover h-96  object-fill "
        />
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-10 w-full">
          <Button onClick={handleDonate} type="primary" danger size={"large"}>
            Donate $290
          </Button>
        </div>
      </div>

      <div className="   py-8">
        <h1 className="text-3xl font-bold mb-4">{title}</h1>

        <p className="text-sm text-gray-400">{description}</p>
      </div>
    </div>
  );
};

export default SinglePage;
