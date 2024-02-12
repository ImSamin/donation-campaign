export const getPostDetails = async (id: string) => {
  const res = await fetch(
    `https://donation-campaign-backend.vercel.app/api/v1/donation-post/${id}`,
    {
      next: {
        revalidate: 3600,
      },
    }
  );

  return res.json();
};
