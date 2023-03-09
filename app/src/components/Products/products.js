import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import DataContext from "../../context/context";
import "./products.css";

const Cards = () => {
  const { items, addCart } = useContext(DataContext);
  const navigate = useNavigate();

  return (
    <div id="main-wrapper">
      <div id="capper">
        <div id="cod">Delivery in Lagos</div>
        <div id="fil">Flilter</div>
        <div id="sort">Sort</div>
      </div>
      <div id="card-wrapper">
        {items.map((cards) => {
          cards.id = Math.random();
          return (
            <div
              key={cards.id}
              id="card"
              onClick={() => navigate(`/${cards.name}`)}
            >
              <img src={cards.img[0]} alt="" id="img" />
              <div id="cap">
                <p id="name">{cards.name}</p>
                <p id="price">N {cards.price}</p>
                <p id="sold">{cards.sold} sold</p>
              </div>

              <div id="add" onClick={async (e) => await addCart(cards, e)}>
                Add to cart
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
