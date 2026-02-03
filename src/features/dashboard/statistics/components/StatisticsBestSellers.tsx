import React from "react";

const StatisticsBestSellers = () => {
  const bestSellers = [
    {
      name: "Adidas Ultra Boost",
      price: "$126.50",
      totalRevenue: "$126,500",
      sales: 999,
    },
    {
      name: "Nike Air Max 270",
      price: "$89.99",
      totalRevenue: "$71,992",
      sales: 800,
    },
    {
      name: "Puma RS-X",
      price: "$110.00",
      totalRevenue: "$82,500",
      sales: 750,
    },
  ];

  return (
    <div className="bg-WhiteMain rounded-2xl px-4 py-6 h-full ml-1 flex flex-col gap-4">
      <div className="pb-4 border-b border-DarkGray">
        <p className="text-xl font-bold">Best Sellers</p>
      </div>
      {bestSellers.map((product, index) => (
        <div key={index} className="flex gap-4 items-center justify-between">
          <div className="flex gap-4 items-center">
            <div className="w-16 h-16 bg-Blue">but</div>
            <div className="flex flex-col gap-1">
              <p className="font-semibold">{product.name}</p>
              <p className="opacity-60 text-sm">{product.totalRevenue}</p>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold">{product.price}</p>
            <p className="opacity-60 text-sm">{product.sales} sales</p>
          </div>
        </div>
      ))}
      <button
        type={"button"}
        className="px-4 py-2 rounded-md  bg-DarkGray text-WhiteMain"
      >
        REPORT
      </button>
    </div>
  );
};

export default StatisticsBestSellers;
