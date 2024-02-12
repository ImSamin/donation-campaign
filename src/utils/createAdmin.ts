export const createAdmin = async (data:any) => {
    const res = await fetch(
      "https://donation-campaign-backend.vercel.app/api/v1/users/create-user",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-cache",
      }
    );
    const userInfo = await res.json();
  
    return userInfo;
  };
  