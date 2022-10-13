import "./checkout.css";
import Head from "../header-component/headers";
import { useContext } from "react";
import DataContext from "../../context/context";

const Checkout = () => {
  const { cart } = useContext(DataContext);
  console.log(cart);

  return (
    <div>
      <Head />
      <div id="cont">
        <div id="cart-list">
          {cart.map((item) => {
            return (
              <div item="item">
                <img src={item.img} alt="" id="cart-item-image" />
                <span>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
