import "./cart.css";
import { Link } from "react-router-dom";
import Head from "../header-component/headers";
import Footer from "../Footer-component/footer";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import DataContext from "../../context/context";
// import { useEffect } from "react/cjs/react.production.min";

const Cart = () => {
  const { cart, desk, total, del } = useContext(DataContext);

  return (
    <div>
      <Head />
      <div id="cont">
        <div id="cart-list">
          <div id="info">
            <p>Subtotal ({cart.length} items)</p>
            <div>N {total}</div>
          </div>
          <table style={{ width: "100%" }}>
            <thead>
              <tr id="cart-list-heading">
                <td id="list-heading-img">
                  <p>Product</p>
                </td>
                <td id="list-heading-name">
                  <p>Name</p>
                </td>
                <td id="list-heading-qty">
                  <p>Quantity</p>
                </td>
                <td id="list-heading-price">
                  <p>Price</p>
                </td>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => {
                return (
                  <tr id="item">
                    <td>
                      <img src={item.img} alt="" id="cart-item-image" />
                    </td>
                    <td>
                      <div id="item-name">
                        <p>{item.name}</p>
                      </div>
                    </td>
                    <td>
                      <div id="sect-3">
                        <p id="qty">{1}</p>
                      </div>
                    </td>
                    <td>
                      <div id="sect-4">
                        <p id="x-item-price">N {item.price}</p>
                      </div>
                    </td>
                    <MdDelete id="del" onClick={() => del(item.id)} />
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <div id="checkout-modal">
          <h2 id="summary">Cart Summary</h2>
          <span id="totalPrice">
            <p> Subtotal</p>
            <p>NGN 5000</p>
          </span>

          <Link to="/checkout">
            <button id="buy">Continue to Checkout</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
