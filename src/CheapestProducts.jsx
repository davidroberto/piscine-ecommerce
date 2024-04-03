import Product from "./Product";

const CheapestProducts = ({ products }) => {
  const productsSortedByPrice = products.sort((a, b) => {
    return b.price - a.price;
  });

  const threeCheapestProducts = productsSortedByPrice.slice(-3);

  return (
    <section>
      <h2>Les produits les moins chers pour les grosses pinces</h2>
      {threeCheapestProducts.map((product) => {
        return <Product product={product} />;
      })}
    </section>
  );
};

export default CheapestProducts;
