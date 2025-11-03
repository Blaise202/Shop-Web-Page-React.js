import { ProductCard } from "../components/ProductCard";

export function Products({ cart, setCart }) {
  const protein = {
    title: "Protein Powder",
    desc: "Whey protein powder used for building muscle",
    price: 40,
  };
  const creatine = {
    title: "Creatine",
    desc: "Creatine monohydrate ussed to supplement your athleticism",
    price: 25,
  };
  const massGainer = {
    title: "Mass gainer",
    desc: "dense carb-loaded powder for packing on weight",
    price: 50,
  };

  const products = [protein, creatine, massGainer];

  return (
    <>
      {products.map((product) => {
        return (
          <>
            <ProductCard
              product={product}
              cart={cart}
              setCart={setCart}
            />
          </>
        );
      })}
    </>
  );
}
