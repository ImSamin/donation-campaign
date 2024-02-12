export const updatePost = async (data: any, id: any) => {
  // console.log(id);
  const res = await fetch(
    `https://donation-campaign-backend.vercel.app/api/v1/donation-post/update/${id}`,
    {
      method: "PATCH",
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
