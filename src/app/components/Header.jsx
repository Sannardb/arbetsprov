import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const categories = ["Kvinnor", "Män", "Nyheter"];

  return (
    <header className="bg-white shadow-md py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center">
        <div className="w-1/4">
          <span className="text-xl font-bold text-gray-800 cursor-pointer">
            Sportee
          </span>
        </div>

        <nav className="w-1/2 flex justify-center space-x-6">
          {categories.map((category) => (
            <span
              key={category}
              className="text-gray-700 hover:text-black font-medium cursor-pointer"
            >
              {category}
            </span>
          ))}
        </nav>

        <div className="w-1/4 flex justify-end">
          <button className="text-gray-700 hover:text-black cursor-pointer">
            <ShoppingCartIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
