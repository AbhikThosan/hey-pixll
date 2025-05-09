"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import ProductCard from "./ProductCard";

interface Product {
  id: number;
  imageSrc: string;
}

const products: Product[] = [
  {
    id: 1,
    imageSrc: "/images/card1.png",
  },
  {
    id: 2,
    imageSrc: "/images/card2.png",
  },
  {
    id: 3,
    imageSrc: "/images/card3.png",
  },
  {
    id: 4,
    imageSrc: "/images/card1.png",
  },
];

const ProductList = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container">
        {products.map((product) => (
          <div key={product.id} className="embla__slide flex justify-center">
            <ProductCard imageSrc={product.imageSrc} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
