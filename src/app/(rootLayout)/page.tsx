import banner from "@/assets/banner.png";
import PostCard from "@/components/ui/PostCard";
import SearchInput from "@/components/ui/SearchInput";
import { getAllPosts } from "@/utils/getAllPosts";
import Link from "next/link";
interface PostData {
  id: string;
  title: string;
  description: string;
  category: string;
  targetAmount: number;
  raisedAmount: number;
}
const HomePage = async () => {
  const { data } = await getAllPosts();

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
          <SearchInput />
        </div>
      </div>
      <div className=" ">
        <div className=" flex flex-wrap justify-center gap-8  mx-auto  py-20 ">
          {data?.map((data: PostData) => (
            <Link key={data.id} href={`/donation/${data.id}`}>
              <PostCard key={data.id} data={data} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
