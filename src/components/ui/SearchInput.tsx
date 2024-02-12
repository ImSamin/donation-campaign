"use client";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import { useForm } from "react-hook-form";

interface FormData {
  search: string;
}

const SearchInput: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    // console.log("Search:", data.search);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center ">
      <Input
        className="w-80 rounded-r-none focus:ring-red-600 "
        size="large"
        placeholder="Search Donation Category"
        {...register("search")}
      />
      <Button
        htmlType="submit"
        className="rounded-l-none border-r-0"
        type="primary"
        danger
        size="large"
        icon={<SearchOutlined />}
      >
        Search
      </Button>
    </form>
  );
};

export default SearchInput;
