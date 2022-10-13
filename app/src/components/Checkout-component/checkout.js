import "./checkout.css";
import Head from "../header-component/headers";
import Footer from "../Footer-component/footer";
import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import DataContext from "../../context/context";
// import { useEffect } from "react/cjs/react.production.min";

const Checkout = () => {
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
          {desk >= 425 ? (
            <div id="cart-list-heading">
              <p id="list-heading-img">Product</p>
              <p id="list-heading-name">Name</p>
              <p id="list-heading-qty">Qty</p>
              <p id="list-heading-price">Pice</p>
            </div>
          ) : (
            ""
          )}

          {cart.map((item) => {
            return desk <= 425 ? (
              //phones
              <div id="item">
                <div id="sect-1">
                  <img src={item.img} alt="" id="cart-item-image" />
                  <div>
                    <p>{item.name}</p>
                  </div>
                </div>

                <div id="sect-2">
                  <div id="x-item">
                    <input type="button" value="-" id="dec" />
                    <span id="x">0</span>
                    <button id="inc">+</button>
                  </div>
                  <p id="x-item-price">NGN {item.price}</p>
                </div>
                <button id="del" onClick={() => del(item.id)}>
                  DELETE
                </button>
              </div>
            ) : (
              //Laptop
              <div id="item">
                <MdDelete id="del" onClick={() => del(item.id)} />
                <div id="sect-1">
                  <img src={item.img} alt="" id="cart-item-image" />
                </div>

                <div id="sect-2">
                  <div id="item-name">
                    <p>{item.name}</p>
                  </div>
                  {/* <div id="x-item">
                    <input type="button" value="-" id="dec" />
                    <span id="x">0</span>
                    <button id="inc">+</button>
                  </div> */}
                </div>
                <div id="sect-3">
                  <p id="qty">{1}</p>
                </div>
                <div id="sect-4">
                  <p id="x-item-price">N {item.price}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div id="checkout-modal">
          <h2 id="summary">Cart Summary</h2>
          <span id="totalPrice">
            <p> Subtotal</p>
            <p>NGN 5000</p>
          </span>
          <button id="buy">Continue to Checkout</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
