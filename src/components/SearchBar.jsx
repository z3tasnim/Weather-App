import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    onSearch(input.trim());
    setInput("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full flex items-center gap-2 bg-white/20 p-2 rounded-lg max-w-md mx-auto"
    >
      <input
        type="text"
        placeholder="Search city"
        className="flex-1 bg-transparent outline-none text-white placeholder-white"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        <BiSearch className="text-white text-xl" />
      </button>
    </form>
  );
};

export default SearchBar;
