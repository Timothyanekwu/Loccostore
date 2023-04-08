import Head from "../components/header-component/headers";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../context/context";
import "./productPage.css";
import { useState } from "react";

const ProductPage = () => {
  const { items } = useContext(DataContext);
  const { nam } = useParams();
  const [len, setLen] = useState(false);

  const clk = () => {
    setLen(!len);
  };

  return (
    <div style={{ backgroundColor: "#f7f7f7" }}>
      <Head />
      <div>
        {items
          .filter((item) => item.name === nam)
          .map((item) => {
            return (
              <div
                style={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  width: "80%",
                }}
              >
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

                      <div>
                        <p id="sold">{item.sold} sold</p>
                        <p id="sold">inStock</p>
                      </div>
                      <button id="toCart1">Add to cart</button>
                      <button id="buyNow">Buy Now</button>
                    </div>
                  </div>
                </div>
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div id="description">
                    <div>
                      <p id="h4">DESCRIPTION</p>

                      {len === true
                        ? item.description
                        : item.description.substr(0, 300)}
                      <p onClick={() => clk()}>
                        <b>Read more...</b>
                      </p>
                    </div>
                  </div>

                  <div id="description">
                    <div>
                      <p id="h4">FEATURES</p>

                      {len === true
                        ? item.description
                        : item.description.substr(0, 300)}
                      <p onClick={() => clk()}>
                        <b>Read more...</b>
                      </p>
                    </div>
                  </div>
                </div>
                <div id="review">
                  <div>
                    <p id="h4">REVIEW</p>
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

//
//     {
//       "id": 5,
//       "img": "/image/6.jpg",
//       "name": "Shoe",
//       "price": 44,
//       "category": "shoe",
//       "sold": 20,
//       "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum "
//     },
//     {
//       "id": 6,
//       "img": "/image/9.jpg",
//       "name": "Flask",
//       "price": 46,
//       "category": "electronics",
//       "sold": 3,
//       "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum "
//     },
//     {
//       "id": 7,
//       "img": "/image/9.jpg",
//       "name": "Phone stand",
//       "price": 40,
//       "category": "ankara",
//       "sold": 11,
//       "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum "
//     },
//     {
//       "id": 8,
//       "img": "/image/1.jpg",
//       "name": "School Bag",
//       "price": 40,
//       "category": "bag",
//       "sold": 14,
//       "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum "
//     },
//     {
//       "id": 9,
//       "img": "/image/2.jpg",
//       "name": " Sneaker Shoe",
//       "price": 44,
//       "category": "shoe",
//       "sold": 23,
//       "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum "
//     },
//     {
//       "id": 10,
//       "img": "/image/3.jpg",
//       "name": "Food Flask",
//       "price": 44,
//       "category": "electronics",
//       "sold": 1,
//       "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum "
//     },
//     {
//       "id": 11,
//       "img": "/image/4.jpg",
//       "name": "Phone stand",
//       "price": 40,
//       "category": "ankara",
//       "sold": 18,
//       "description": "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum "
//     }
