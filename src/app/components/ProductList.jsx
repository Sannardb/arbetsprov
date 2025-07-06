import React from "react";
import produkter from "@/data/produkter.json";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="bg-gray-100 py-10 px-20">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {/* Loopar igenom varje produkt i JSON-filen och renderar ett produktkort */}
        {produkter.map((product) => (
          <ProductCard key={product["article-number"]} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
