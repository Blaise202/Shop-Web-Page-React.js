import { Link } from "react-router-dom";
import Gym from "../../public/images/gym.png";

export function Home() {
  return (
    <>
      <h2>Welcome to gym store</h2>
      <img src={Gym} />
      <br />
      <Link to="/products">
        <button>View All Products</button>
      </Link>
    </>
  );
}
