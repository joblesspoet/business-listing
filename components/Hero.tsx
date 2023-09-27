import React, { ChangeEvent, useState } from "react";
import { CategoryType, categories } from "@/mock-data/categories";
import Image from "next/image";
import { Category } from "./categories/Category";

export type HeroProps = {
  onSearch: (query: string) => void;
};
function Hero({ onSearch }: HeroProps) {
  const [searchInput, setSearchInput] = useState<string>("");

  const onInputchange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInput(e.target.value);
  };
  const searchHandler = () => {
    if (searchInput === "") return;
    onSearch(searchInput);
  };
  const categorySelectHandler = (selected: string) => {
    setSearchInput(selected);
    onSearch(selected);
  };
  return (
    <div>
      <div className="text-center">
        <Image
          src="/bg.png"
          alt="bg"
          width={800}
          height={200}
          className="w-full absolute mt-[-50px]"
        />
        <div className="mt-[70px]">
          <h2 className="text-[55px] text-red-600 tracking-widest font-semibold">
            DISCOVER
          </h2>
          <h2 className="text-[20px] ">Your Amazing City</h2>
          <div className="mt-5 z-10 flex gap-2 items-center justify-center">
            <input
              onChange={onInputchange}
              type="text"
              placeholder="Search Anything"
              className="z-20 bg-white p-3 border-[1px] rounded-full px-5 w-[36%] shadow-sm
              outline-red-600
                "
              value={searchInput}
            />
            <button
              onClick={searchHandler}
              className="bg-red-600 rounded-full p-3 shadow-md z-10 cursor-pointer hover:scale-105 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          <div className="mt-5 flex flex-col justify-center items-center">
            <h2>Or Browse the category</h2>
            <div className="grid grid-cols-3 md:grid-cols-7 w-[50%] justify-center gap-5 mt-5">
              {categories.map((item: CategoryType) => {
                return (
                  <Category
                    onCategorySelect={categorySelectHandler}
                    key={`item_${item.id}`}
                    item={item}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
