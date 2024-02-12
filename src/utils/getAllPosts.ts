export const getAllPosts = async () => {
  const res = await fetch(
    "https://donation-campaign-backend.vercel.app/api/v1/donation-post",
    {
      cache: "no-store",
    }
  );

  return res.json();
};
