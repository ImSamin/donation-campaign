import { authOptions } from "@/utils/authOptions";
import { getServerSession } from "next-auth";

export const getDonationByUserId = async () => {
  const session = await getServerSession(authOptions);
  const res = await fetch(
    `https://donation-campaign-backend.vercel.app/api/v1/donation/?id=${session?.id}`,
    { cache: "no-store" }
  );

  return res.json();
};
