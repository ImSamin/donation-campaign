"use client";
import banner from "@/assets/banner.png";
import PostCard from "@/components/ui/PostCard";
import SearchInput from "@/components/ui/SearchInput";
import { getAllPosts } from "@/utils/getAllPosts";
import Link from "next/link";
import { useEffect, useState } from "react";
interface PostData {
  id: string;
  title: string;
  description: string;
  category: string;
  targetAmount: number;
  raisedAmount: number;
}
const HomePage = () => {
  //const { data } = await getAllPosts();
  const colors = ["red", "green", "cyan", "indigo"];

  const [posts, setPosts] = useState<PostData[]>([]);
  const fetchPosts = async (search?: string) => {
    try {
      const response = await getAllPosts(search);
      setPosts(response.data);
    } catch (error) {
      console.error("Error fetching posts:", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleSearch = async (search: string) => {
    // Fetch posts based on the search query
    await fetchPosts(search);
  };

  return (
    <div className="">
      <div
        className="bg-cover bg-center h-96 relative 	"
        style={{ backgroundImage: `url(${banner.src})` }}
      >
        <div className="absolute inset-0 bg-white opacity-95"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-black">
          <h1 className="text-4xl font-bold mb-10 mx-5">
            I Grow By Helping People In Need
          </h1>
          <SearchInput onSearch={handleSearch} />
        </div>
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {posts?.map((data: PostData, index: number) => {
            const currentColor = colors[index % colors.length];

            return (
              <div
                key={data.id}
                className="flex sm:w-4/4 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8"
              >
                <Link href={`/donation/${data.id}`}>
                  <PostCard data={data} color={currentColor} />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
