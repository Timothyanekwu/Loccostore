import { useContext } from "react";
import DataContext from "../../context/context";
import "./header.css";

const Head = () => {
  const { cartNumber } = useContext(DataContext);

  return (
    <div id="head">
      <span id="cat"></span>
      <div id="title">LOCCO STORE</div>

      <div id="form">
        <input type="text" id="input" />
        <input type="submit" id="submit" value="Search" />
      </div>

      <div>
        <div id="cart-number">{cartNumber}</div>
      </div>
    </div>
  );
};

export default Head;
