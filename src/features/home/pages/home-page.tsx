import { products } from "@/features/product/pages/product-constans";
import React from "react";
import TestPage from "./[id]";

const HomePage = () => {
  return (
    <div>
      {products.map((item) => (
        <>
          <TestPage product={item} />
        </>
      ))}
    </div>
  );
};

export default HomePage;
