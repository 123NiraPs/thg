import React from "react";

const ProductCard = () => {
  return (
    <div className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer">
      <img src="/assets/slide-1.png" className="w-full" alt="product image" />
      <div className="p-4 text-black/[0.9]">
        <h2 className="text-lg font-medium">product Name</h2>
        <div className="flex items-center text-black/[0.5]">
          <p className="mr-2 text-lg font-semibold">&#8377;500</p>
          <p className="ml-auto text-base font-medium text-green-500">
            &#8377;10 % off
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
