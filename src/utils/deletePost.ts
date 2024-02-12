export const deletePost = async (id:string) => {
    const res = await fetch(`https://donation-campaign-backend.vercel.app/api/v1/donation-post/delete/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      
    });
  
    return res.json()
    
  };
  