import Product from "./Product";

const ElectroMenagerProducts = ({ products }) => {
  const electroProducts = products.filter((product) => {
    return product.category === "Electroménager";
  });

  return (
    <section>
      <h2>Les meilleures offres Electro ménager :</h2>

      {electroProducts.map((product) => {
        return <Product product={product} />;
      })}
    </section>
  );
};

export default ElectroMenagerProducts;
