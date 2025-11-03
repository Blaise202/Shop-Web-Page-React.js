import { Link } from "react-router-dom";
export function About() {
  return (
    <>
      <h1>About Us</h1>
      <h3>
        At the Gym Supplements, it is our goal to provide with you every kind of
        original gym materials and make all our customers happy
      </h3>
      <h3> We were founded in 20.. and blah blah blah</h3>
      <h4>Please contact us on +123456789 in case of any ingaru</h4>
      <Link to="/contact">
        <button>Contact Us</button>
      </Link>
    </>
  );
}
