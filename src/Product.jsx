const Product = ({ product }) => {
  return (
    <article>
      <h2>{product.name}</h2>
      <p>Prix : {product.price}</p>
      <p>Catégorie : {product.category}</p>
      <p>Achetez ce produit avant qu'il ne soit trop tard</p>
    </article>
  );
};

export default Product;
