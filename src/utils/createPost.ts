export const createPost = async (data: any) => {
  const res = await fetch(
    "https://donation-campaign-backend.vercel.app/api/v1/donation-post/create",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      cache: "no-cache",
    }
  );
  const postInfo = await res.json();

  return postInfo;
};
