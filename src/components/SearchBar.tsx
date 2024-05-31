"use client";

import { FormEvent, useState } from "react";
import { SearchManufacturer } from "./";
import Image from "next/image";
import { SearchBarProps } from "@/types";

const SearchButton = ({ otherClasses }: { otherClasses: String }) => {
  return (
    <button className={`-ml-3 z-10 ${otherClasses}`} type="submit">
      <Image
        src="/magnifying-glass.svg"
        width={40}
        height={40}
        alt="magnifying glass"
        className="object-contain"
      />
    </button>
  );
};

const SearchBar = ({ setManufacturer, setModel }: SearchBarProps) => {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (searchManufacturer === "" && searchModel === "") {
      alert("Please enter a manufacturer and model");
      return;
    }

    setModel(searchModel);
    setManufacturer(searchManufacturer);
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          width={25}
          height={25}
          alt="car model icon"
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          placeholder="Tiguan..."
          className="searchbar__input"
          onChange={(e) => setSearchModel(e.target.value)}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
