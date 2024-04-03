import Product from "./Product";

const InformatiqueProducts = ({ products }) => {
  const informatiqueProducts = products.filter((product) => {
    return product.category === "Informatique";
  });

  return (
    <section>
      {informatiqueProducts.map((product) => {
        return <Product product={product} />;
      })}
    </section>
  );
};

export default InformatiqueProducts;
