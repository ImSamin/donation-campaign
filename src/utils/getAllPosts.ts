export const getAllPosts = async (search?: string) => {
  let url =
    "https://donation-campaign-backend.vercel.app/api/v1/donation-post/";

  if (search) {
    url += `?category=${search}`;
  }

  const res = await fetch(url, {
    next: {
      revalidate: 60,
    },
  });

  return res.json();
};
