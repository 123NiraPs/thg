import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const Category = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="text-center max-w-[800px] m-auto mt-8 md:mt-0">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Running Shoes
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
    </div>
  );
};

export default Category;
