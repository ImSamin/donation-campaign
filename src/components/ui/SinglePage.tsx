"use client";
import detailsImage from "@/assets/Rectangle 4288.png";
import { sendDonate } from "@/utils/sendDonate";
import { Button } from "antd";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const SinglePage = ({ data }: { data: any }) => {
  const { data: session, status } = useSession();

  const router = useRouter();

  const handleDonate = async () => {
    if (status !== "authenticated") {
      router.push("/login");
      return;
    }

    const result = await sendDonate({
      userId: (session as any)?.id,

      postId: data.data._id,
      donateAmount: 290,
    });

    if (result.success) {
      toast.success("Donate $290 successfully");
    } else {
      toast.error("Failed");
    }
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
