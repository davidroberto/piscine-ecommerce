const Header = () => {
  const user = {
    firstName: "John",
    lastName: "Doe",
  };

  const cart = [
    { id: 1, product: "Machine à laver", quantity: 1 },
    { id: 2, product: "Télévision", quantity: 1 },
    { id: 4, product: "Tablette", quantity: 1 },
  ];

  let cartQuantity = 0;

  cart.forEach((cartItem) => {
    cartQuantity += cartItem.quantity;
  });

  return (
    <header>
      <img
        src="https://img.freepik.com/vecteurs-libre/vecteur-degrade-logo-colore-oiseau_343694-1365.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1712016000&semt=sph"
        alt="logo"
      />

      <p>
        Bonjour {user.firstName} {user.lastName}
      </p>

      <p>Vous avez {cartQuantity} items au panier</p>
    </header>
  );
};

export default Header;
