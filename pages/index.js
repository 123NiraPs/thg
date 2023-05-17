import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";
import Wrapper from "@/components/Wrapper";
import Link from "next/link";

export default function Home() {
  return (
    <h2 className="h-[1800px]">
      <Banner />
      <Wrapper>
        <div className="text-center max-w-[800px] mx-auto my-[50px] md:my-[80px]">
          <div className="text-[28px] md:text-[34px] mb-5 font-semibold leading-tight">
            Take Your Miles
          </div>
          <div className="text-md md:text-xl">
            A lightweight Nike running Shoes.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-14 px-5 md:px-0">
          <Link href="/product/1">
            <ProductCard />
          </Link>
          <Link href="/product/2">
            <ProductCard />
          </Link>
          <Link href="/product/3">
            <ProductCard />
          </Link>
          <Link href="/product/4">
            <ProductCard />
          </Link>
          <Link href="/product/5">
            <ProductCard />
          </Link>
          <Link href="/product/6">
            <ProductCard />
          </Link>
          <Link href="/product/7">
            <ProductCard />
          </Link>
          <Link href="/product/8">
            <ProductCard />
          </Link>
          <Link href="/product/9">
            <ProductCard />
          </Link>
        </div>
      </Wrapper>
    </h2>
  );
}
