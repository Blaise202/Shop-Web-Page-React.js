export function Cart({ cart, setCart }) {
  function removeFromCart(item) {
    setCart(cart.filter((product) => product != item));
  }

  return (
    <>
      {cart.map((item) => {
        return (
          <>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => removeFromCart(item)}>Remove Item</button>
          </>
        );
      })}
    </>
  );
}
