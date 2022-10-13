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
              <div id="product-info-container">
                <div id="specification">
                  <div id="info-img-cont">
                    <img id="info-img" src={item.img} alt="" />
                  </div>
                  <div id="spec">
                    <h2>{item.name}</h2>
                    <h4>{item.price}</h4>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default ProductPage;
