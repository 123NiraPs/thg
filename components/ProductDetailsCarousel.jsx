import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const ProductDetailsCarousel = () => {
  return (
    <div className="text-white text-[20px] w-full max-w-[1360px] mx-auto sticky top-[50px]">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
      >
        <img src="/assets/p1.png" className="h-[500px]" />
        <img src="/assets/p2.png" className="h-[500px]" />
        <img src="/assets/p3.png" className="h-[500px]" />
        <img src="/assets/p4.png" className="h-[500px]" />
        <img src="/assets/p5.png" className="h-[500px]" />
        <img src="/assets/p6.png" className="h-[500px]" />
        <img src="/assets/p7.png" className="h-[500px]" />
      </Carousel>
    </div>
  );
};

export default ProductDetailsCarousel;
