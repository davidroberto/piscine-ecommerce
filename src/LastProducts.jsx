import Product from "./Product";

const LastProducts = ({ products }) => {
  const productsSortedByDate = products.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
  });

  const lastThreeProducts = productsSortedByDate.slice(0, 3);

  return (
    <section>
      {lastThreeProducts.map((product) => {
        return <Product product={product} />;
      })}
    </section>
  );
};

export default LastProducts;
