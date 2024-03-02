import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedFilter, setSelectedFilter] = useState(null);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setSelectedFilter(event.target.value);
  };

  const filteredProducts = PRODUCTS.filter((product) => {
    // Filter by search query
    if (searchQuery) {
      return product.productName.toLowerCase().includes(searchQuery.toLowerCase());
    }
    // Filter by selected filter
    if (selectedFilter) {
      return product[selectedFilter.toLowerCase()];
    }
    return true;
  });

  return (
    <div className="shop">
      <div className="shopTitle">
        <h1>Green Haven</h1>
      </div>

      <div className="filters">
        <input type="text" placeholder="Search..." value={searchQuery} onChange={handleSearchChange} />
        <select onChange={handleFilterChange}>
          <option value="">Filter by...</option>
          <option value="size">Size</option>
          <option value="sunlightRequirements">Sunlight Requirements</option>
          <option value="waterNeeds">Water Needs</option>
        </select>
      </div>

      <div className="products">
        {filteredProducts.map((product) => (
          <Product data={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};
