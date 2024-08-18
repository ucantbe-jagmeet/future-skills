import React from "react";

interface SearchBarProps {
  setSearchTerm: (term: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ setSearchTerm }) => {
  return (
    <main className="w-full h-96  bg-blue-100 ">
      <div className="w-4/5 h-full flex item-center justify-center flex-col mx-auto">
        <h2 className="text-5xl mb-20 w-fit mx-auto">How Can we Help?</h2>
        <div className="md:w-1/2 w-full mx-auto relative">
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full p-2 md:w-full mx-auto border border-gray-500 h-14 "
          />
          <button
            className="absolute right-0 -top-[3px] w-fit text-3xl h-14 px-4 "
            disabled
          >
            {"->"}
          </button>
        </div>
      </div>
    </main>
  );
};

export default SearchBar;
