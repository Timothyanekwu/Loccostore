import { useContext } from "react";
import DataContext from "../../context/context";
import "./products.css";

const Cards = () => {
  const { items, addCart } = useContext(DataContext);

  return (
    <div id="card-wrapper">
      {items.map((cards) => {
        return (
          <div key={cards.id} id="card">
            <img src={cards.img} alt="" id="img" />
            <div id="cap">
              <p id="name">{cards.name}</p>
              <p id="price">N{cards.price}</p>
            </div>
            <div id="add" value={cards} onClick={() => addCart(cards)}>
              Add to cart
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
