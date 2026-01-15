import React from "react";
import { useParams } from "react-router-dom";

const Categories = () => {
  const { categoryName } = useParams();

  // Dummy content (har category ka data alag show karne ke liye)
  const categoryData = {
    toys: ["🧸 Teddy Bears", "🚗 Cars", "👩‍🍼 Dolls", "🎲 Building Blocks"],
    games: ["🎮 PlayStation", "🕹️ Xbox", "♟️ Chess", "🧩 Puzzle Games"],
    learning: ["📚 Activity Books", "✏️ Drawing Kits", "🧪 Science Kits"],
    outdoor: ["🚲 Kids Cycles", "⚽ Football", "🏏 Cricket Kit"],
    party: ["🎉 Party Props", "🎭 Masks", "🎂 Cake Toys"],
  };

  const items = categoryData[categoryName] || ["No items found"];

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold capitalize">{categoryName}</h1>
      <ul className="mt-5 list-disc pl-5">
        {items.map((item, index) => (
          <li key={index} className="text-lg">{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;

