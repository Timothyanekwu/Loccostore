import Head from "../components/header-component/headers";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/context";
import "./productPage.css";

const ProductPage = () => {
  const { items } = useContext(DataContext);
  const { nam } = useParams();

  return (
    <div>
      <Head />
      <div>
        {items
          .filter((item) => item.name === nam)
          .map((item) => {
            return (
              <div id="specification">
                <div id="sus-1">
                  <div id="info-img-cont">
                    <img id="info-img" src={item.img} alt="" />
                  </div>
                  <div id="sus-child-1">
                    <div>
                      <h2 id="spec">{item.name}</h2>
                      <p id="info-price">N {item.price}</p>
                    </div>
                    <div id="qty-cont">
                      <input id="change" type="button" value="+" />
                      <input id="qty" value="0" />
                      <input id="change" type="button" value="-" />
                    </div>
                    <p id="sold">{item.sold} sold</p>
                    <button id="toCart1">Add to cart</button>
                  </div>
                </div>
                <h3>Description</h3>
                <div id="description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </div>
                <button id="toCart">Add to cart</button>

                <div id="footer"></div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductPage;
