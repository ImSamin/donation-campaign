"use client";
import { SearchOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import React, { useState } from "react";
interface SearchInputProps {
  onSearch: (searchQuery: string) => void;
}
const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [search, setSearch] = useState<string>("");

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div className="flex items-center">
      <Input
        className="w-80 rounded-r-none focus:ring-red-600"
        size="large"
        placeholder="Search Donation Category"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button
        className="rounded-l-none border-r-0"
        type="primary"
        danger
        size="large"
        icon={<SearchOutlined />}
        onClick={handleSearch}
      >
        Search
      </Button>
    </div>
  );
};

export default SearchInput;
