import ProductCard from '@components/Cards/ProductCard';

export default function Product({ properties }) {
  return (
    <div className="max-w-6xl my-16 mx-auto grid  px-4 md:px-1 grid-cols-1 md:grid-cols-3 sm:grid-cols-2  gap-4">
      {properties &&
        properties?.map((property, idx) => (
          <ProductCard {...property} key={idx} />
        ))}
    </div>
  );
}
