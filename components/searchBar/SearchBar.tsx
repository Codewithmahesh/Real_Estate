import React, { useState } from "react";

const types = ["buy", "rent"];

const SearchBar = () => {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (value: string) => {
    setQuery((prev) => ({ ...prev, type: value }));
  };

  return (
    <div className="searchBar">
      {/* Mobile responsive type buttons */}
      <div className="type flex flex-col sm:flex-row">
        {types.map((type, index) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`px-[36px] py-[16px] border border-slate-400 border-b-none cursor-pointer capitalize sm:w-auto w-full ${
              query.type === type ? "bg-black text-white" : ""
            }`}
            style={{
              borderTopLeftRadius: index === 0 ? "5px" : "0",
              borderTopRightRadius: index === 1 ? "5px" : "0",
              borderRight: index === 1 ? "2px solid #d1d5db" : "0",
            }}
          >
            {type}
          </button>
        ))}
      </div>
      {/* Mobile responsive form */}
      <form className="border border-slate-400 flex flex-col sm:flex-row justify-between h-auto sm:h-[64px] gap-2 sm:gap-0 p-2 sm:p-0">
        <input
          className="border-none px-[10px] py-[8px] w-full sm:w-[200px]"
          type="text"
          name="location"
          value={query.location}
          onChange={(e) => setQuery({ ...query, location: e.target.value })}
          placeholder="City Location"
        />
        <input
          className="border-none px-[10px] py-[8px] w-full sm:w-[200px]"
          type="number"
          name="minPrice"
          value={query.minPrice}
          onChange={(e) =>
            setQuery({ ...query, minPrice: Number(e.target.value) })
          }
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          className="border-none px-[10px] py-[8px] w-full sm:w-[200px]"
          type="number"
          name="maxPrice"
          value={query.maxPrice}
          onChange={(e) =>
            setQuery({ ...query, maxPrice: Number(e.target.value) })
          }
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button
          type="submit"
          className="border-none cursor-pointer bg-yellow-400 px-7 py-4 w-full sm:w-auto flex justify-center items-center"
        >
          <img
            src="./search.png"
            alt="search icon"
            className="w-[24px] h-[24px] sm:w-[18px] sm:h-[18px]"
          />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
