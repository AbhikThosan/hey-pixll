interface ProductCardProps {
  imageSrc: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ imageSrc }) => {
  return (
    <div className="flex flex-col items-center">
      <img src={imageSrc} alt="product" className="object-cover rounded-lg" />
    </div>
  );
};

export default ProductCard;
