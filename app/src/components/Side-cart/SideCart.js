import { useContext } from "react";
import { Link } from "react-router-dom";
import DataContext from "../../context/context";
import "./sideCart.css";
const SideCart = () => {
  const { cart, setSideCartView } = useContext(DataContext);

  return (
    <section id="sideContainer">
      <div id="sideContTitle">
        <p>Shopping Cart</p>
        <div
          onClick={() => setSideCartView(false)}
          style={{ cursor: "pointer" }}
        >
          close
        </div>
      </div>
      <div id="sideContItems">
        {cart.map((item) => {
          return (
            <div>
              <div id="sideContImage">
                <img src={item.img[0]} />
              </div>
              <div id="itemContent">
                <p>{item.name}</p>
                <div id="qtySetter">
                  <span>-</span>
                  <input value={0} />
                  <span>+</span>
                </div>
                <p>N {item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div id="sideContReview">
        <p id="sideSubtotal">Subtotal</p>

        <p id="sideContTotal">N 25000</p>
      </div>
      <div id="sideContFooter">
        <Link to="/cart">
          <button id="viewCart" onClick={() => setSideCartView(false)}>
            View Cart
          </button>
        </Link>
        <button id="checkout">Checkout</button>
      </div>
    </section>
  );
};

export default SideCart;
