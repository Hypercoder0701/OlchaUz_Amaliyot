import React from "react";

export default function SearchBar() {
  return (
    <div className="searchbar-container">
      <input type="text" placeholder="Katalog bo`yicha qidirish..." />
      <button>
        <img src="search.svg" alt="" />
      </button>
    </div>
  );
}
