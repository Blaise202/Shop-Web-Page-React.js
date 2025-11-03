export function ProductCard({ product, cart, setCart }) {
  function addToCart() {
    setCart([...cart, product]);
  }

  return (
    <div className="productCard">
      <h2>{product.title}</h2>
      <p>{product.desc}</p>
      <button>${product.price}</button>
      <button
        className="cartBtn"
        onClick={() => addToCart()}
      >
        {cart.find((item) => item.title == product.title)
          ? "Added"
          : "Add To Cart"}
      </button>
    </div>
  );
}
