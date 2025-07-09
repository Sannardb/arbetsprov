import React, { useState } from "react";

const ProductCard = ({ product }: ProductCardProps) => {
  // Filtrerar bort varianter som saknar viktiga värden
  const validAttribute = product.attributes.filter(
    (v) => v.color && v.size && v.price && v["image-url"] && v["article-number"]
  );

  // Startar med första variant i listan
  const [selectedAttributes, setSelectedAttribute] = useState(
    validAttribute[0]
  );

  // Skapar lista med unika färger i denna produkt
  const uniqueColors = Array.from(new Set(validAttribute.map((v) => v.color)));

  // Skapar lista och tar fram alla produkter som har minst en variant med den valda färgen
  const availableSizes = Array.from(
    new Set(
      validAttribute
        .filter((v) => v.color === selectedAttributes.color)
        .map((v) => v.size)
    )
  );

  // När en färg väljs sätts produkten till den färgen och första tillgängliga storleken
  const handleColorChange = (color: string) => {
    const match = validAttribute.find(
      (v) => v.color === color && v.size === selectedAttributes.size
    );

    if (match) {
      setSelectedAttribute(match);
    } else {
      // Om inte möjligt, välj första tillgängliga variant med rätt färg
      const fallback = validAttribute.find((v) => v.color === color);
      if (fallback) setSelectedAttribute(fallback);
    }
  };

  // När en storlek väljs, sätt produkten med den storleken och nuvarande färgen
  const handleSizeChange = (size: string) => {
    const match = validAttribute.find(
      (v) => v.color === selectedAttributes.color && v.size === size
    );
    if (match) setSelectedAttribute(match);
  };

  return (
    <div className="rounded-2xl shadow-md p-4 bg-white hover:shadow-lg transition-shadow">
      <img
        src={selectedAttributes["image-url"]}
        alt={product.title}
        className="w-full object-cover rounded-xs mb-4 text-black hover:brightness-105 cursor-pointer"
      />
      <h2 className="text-xl font-semibold mb-1 text-black">{product.title}</h2>
      <p className="text-lg font-medium text-gray-800">
        {Math.ceil(selectedAttributes.price)} kr
      </p>
      <p className="text-sm text-gray-500 mt-1">
        {selectedAttributes.brand} {selectedAttributes.color}{" "}
        {selectedAttributes.size}
      </p>
      <p className="line-clamp-2 text-gray-700 mt-1">
        {selectedAttributes.description}
      </p>
      <div className="mt-4">
        <p className="font-semibold mb-1 text-xs sm:text-sm md:text-base">
          Color:
        </p>
        <div className="flex flex-wrap gap-2">
          {uniqueColors.map((color) => (
            <button
              key={color}
              onClick={() => handleColorChange(color)}
              className={`cursor-pointer px-2 py-1 rounded-sm text-xs ${
                color === selectedAttributes.color ? "font-bold" : ""
              }`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Storleksval */}
      <div className="mt-4">
        <p className="font-semibold mb-1 text-xs sm:text-sm md:text-base">
          Size:
        </p>
        <div className="flex flex-wrap gap-2">
          {availableSizes.map((size) => (
            <button
              key={size}
              onClick={() => handleSizeChange(size)}
              className={`cursor-pointer px-2 py-1 rounded-sm text-xs ${
                size === selectedAttributes.size ? "font-bold" : ""
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
